"use client";

import { useState, useEffect } from "react";

export default function AdminImagesPage() {
    const [images, setImages] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<string>("");

    const loadImages = async () => {
        const res = await fetch("/api/images");
        const data = await res.json();
        if (data.images) setImages(data.images);
    };

    useEffect(() => {
        loadImages();
    }, []);

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;

        setStatus("Uploading...");
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/admin/upload-image", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            setStatus("Upload successful!");
            setFile(null);
            loadImages();
        } else {
            setStatus("Upload failed.");
        }
    };

    const handleDelete = async (filename: string) => {
        if (!confirm(`Delete ${filename}?`)) return;

        const res = await fetch("/api/admin/delete-image", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ filename }),
        });

        if (res.ok) {
            setStatus(`Deleted ${filename}`);
            loadImages();
        } else {
            setStatus("Delete failed.");
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto space-y-6">
            <div className="border p-4 rounded-lg bg-slate-50">
                <h2 className="font-bold text-lg mb-2">Upload Image</h2>
                <form onSubmit={handleUpload} className="flex gap-2">
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="border p-1 text-sm bg-white rounded"
                    />
                    <button
                        type="submit"
                        disabled={!file}
                        className="bg-blue-600 text-white px-3 py-1 text-sm rounded disabled:opacity-50"
                    >
                        Upload
                    </button>
                </form>
            </div>

            <div className="border p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-2">Cached Images List</h2>
                {status && <p className="text-xs text-blue-600 mb-2">{status}</p>}
                <div className="divide-y max-h-96 overflow-y-auto">
                    {images.map((img) => (
                        <div key={img} className="py-2 flex justify-between items-center text-sm">
                            <span>{img}</span>
                            <button
                                onClick={() => handleDelete(img)}
                                className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}