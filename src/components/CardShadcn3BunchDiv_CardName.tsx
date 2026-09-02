"use client";
import { useEffect, useState } from "react";
import CardShadcn from "./CardShadcn";

interface CardShadcn3BunchDiv_CardNameProps {
    cardName: string;
}

export default function CardShadcn3BunchDiv_CardName({
    cardName,
}: CardShadcn3BunchDiv_CardNameProps) {
    const [images, setImages] = useState<string[]>([]);
    const viewImagesLink = `https://www.bing.com/images/search?q=${encodeURIComponent(
        cardName
    )}`;

    useEffect(() => {
        let cancelled = false;

        async function loadImages() {
            try {
                // اب صرف 1 ریکویسٹ جائے گی جو کیش سے امیجز لائے گی
                const res = await fetch(`/api/images?name=${encodeURIComponent(cardName)}`);
                const data = await res.json();
                if (!cancelled && data.images) {
                    setImages(data.images);
                }
            } catch (error) {
                console.error("Failed to load images:", error);
            }
        }

        loadImages();
        return () => {
            cancelled = true;
        };
    }, [cardName]);

    return (
        <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-semibold text-slate-800">{cardName}</span>
                <a
                    href={viewImagesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-link whitespace-nowrap"
                >
                    View pictures ↗
                </a>
            </div>

            <div className="grid grid-cols-3 gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory">
                {images.map((imagePath, index) => (
                    <div key={index}>
                        <CardShadcn imagePath={imagePath} />
                    </div>
                ))}
            </div>
        </div>
    );
}