// CardShadcn3BunchDiv_CardName.tsx
"use client";
import { useEffect, useState } from "react";
import CardShadcn from "./CardShadcn";

interface CardShadcn3BunchDiv_CardNameProps {
    cardName: string;
}

const EXTENSIONS = ["jpg", "jpeg", "avif", "webp", "png"];

async function findImage(basePath: string): Promise<string | null> {
    for (const ext of EXTENSIONS) {
        const path = `${basePath}.${ext}`;
        try {
            const res = await fetch(path, { method: "HEAD" });
            if (res.ok) return path;
        } catch {
            // network/dev-server hiccup, try next extension
        }
    }
    return null;
}

export default function CardShadcn3BunchDiv_CardName({ cardName }: CardShadcn3BunchDiv_CardNameProps) {
    const [images, setImages] = useState<string[]>([]);
    const viewImagesLink = `https://www.bing.com/images/search?q=${encodeURIComponent(cardName)}`;

    useEffect(() => {
        let cancelled = false;

        async function loadImages() {
            const found: string[] = [];
            for (let i = 1; i <= 3; i++) {
                const basePath = `/images/${cardName}${i}`;
                const image = await findImage(basePath);
                if (image) found.push(image);
            }
            if (!cancelled) setImages(found);
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
            {/* <div className="grid grid-cols-3 gap-4">
                {images.map((imagePath, index) => (
                    <CardShadcn key={index} imagePath={imagePath} />
                ))}
            </div> */}
            <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory">
                {images.map((imagePath, index) => (
                    <div key={index} className="shrink-0 snap-start w-64 md:w-72">
                        <CardShadcn imagePath={imagePath} />
                    </div>
                ))}
            </div>
        </div >
    );
}