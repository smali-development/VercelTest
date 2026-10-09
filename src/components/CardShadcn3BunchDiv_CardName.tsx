"use client";
import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import CardShadcn from "./CardShadcn";

interface CardShadcn3BunchDiv_CardNameProps {
    cardName: string;
    pathString?: string; // Optional prop for pathString
}

export default function CardShadcn3BunchDiv_CardName({
    cardName,
    pathString,
}: CardShadcn3BunchDiv_CardNameProps) {
    const [images, setImages] = useState<string[]>([]);
    const [reloadToken, setReloadToken] = useState(0);
    const [isLoadingImages, setIsLoadingImages] = useState(false);
    const viewImagesLink = `https://www.bing.com/images/search?q=${encodeURIComponent(
        pathString ? `${pathString} ${cardName}` : cardName
    )}`;

    useEffect(() => {
        let cancelled = false;

        async function loadImages() {
            setIsLoadingImages(true);
            try {
                const res = await fetch(
                    `/api/images?name=${encodeURIComponent(cardName)}&reload=${Date.now()}`,
                    { cache: "no-store" }
                );
                if (!res.ok) {
                    throw new Error(`Image request failed with status ${res.status}`);
                }

                const data: { images: string[] } = await res.json();
                if (!cancelled) {
                    setImages(data.images);
                }
            } catch (error) {
                console.error("Failed to load images:", error);
            } finally {
                if (!cancelled) {
                    setIsLoadingImages(false);
                }
            }
        }

        loadImages();
        return () => {
            cancelled = true;
        };
    }, [cardName, reloadToken]);

    return (
        <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-semibold text-slate-800">{cardName}</span>
                <span className="font-normal text-slate-800">{pathString?.replaceAll(" ", " > ")}</span>
                <a
                    href={viewImagesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-link whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                >
                    View pictures ↗
                </a>
                <button
                    type="button"
                    onClick={() => setReloadToken(Date.now())}
                    disabled={isLoadingImages}
                    className="pill-link whitespace-nowrap disabled:opacity-50"
                    aria-label={`Reload pictures for ${cardName}`}
                    title="Reload updated pictures"
                >
                    <RefreshCw size={16} className="inline mr-1" />
                    {isLoadingImages ? "Reloading..." : "Reload pictures"}
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory">
                {images.map((imagePath, index) => (
                    <div key={index}>
                        <CardShadcn imagePath={imagePath} reloadToken={reloadToken} />
                    </div>
                ))}
            </div>
        </div>
    );
}