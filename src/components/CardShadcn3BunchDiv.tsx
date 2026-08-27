import CardShadcn from "./CardShadcn";

interface CardShadcn3BunchDivProps {
    cardName: string;
    viewImagesLink: string;
    images: string[]; // up to 3 image paths
}

export default function CardShadcn3BunchDiv({ cardName, viewImagesLink, images }: CardShadcn3BunchDivProps) {
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
                {images.slice(0, 3).map((imagePath, index) => (
                    <CardShadcn key={index} imagePath={imagePath} />
                ))}
            </div>
        </div>
    );
}