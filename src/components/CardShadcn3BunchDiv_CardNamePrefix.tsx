// CardShadcn3BunchDiv_CardNamePrefix.tsx
"use client";

import { useEffect, useState } from "react";
import CardShadcn from "./CardShadcn";

interface CardShadcn3BunchDiv_CardNamePrefixProps {
    cardName: string;
}

export default function CardShadcn3BunchDiv_CardNamePrefix({ cardName }: CardShadcn3BunchDiv_CardNamePrefixProps) {
    const [images, setImages] = useState<string[]>([]);
    const viewImagesLink = `https://www.bing.com/images/search?q=${encodeURIComponent(cardName)}`;

    useEffect(() => {
        let cancelled = false;

        async function loadImages() {
            try {
                const res = await fetch(`/api/images-by-prefix?prefix=${encodeURIComponent(cardName)}`);
                if (!res.ok) return;
                const data = await res.json();
                if (!cancelled && Array.isArray(data.images)) {
                    setImages(data.images);
                }
            } catch {
                // silently skip on failure
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
                    rel="noopener"
                    className="pill-link whitespace-nowrap"
                >
                    View pictures ↗
                </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {images.map((imagePath, index) => (
                    <CardShadcn key={index} imagePath={imagePath} />
                ))}
            </div>
        </div >
    );
}