import fs from "fs";
import path from "path";

const EXTENSIONS = new Set(["jpg", "jpeg", "avif", "webp", "png"]);
let imageCache: string[] | null = null;

// public/images ڈائریکٹری سے فائلیں پڑھ کر کیش اپ ڈیٹ کریں
export function refreshImageCache(): string[] {
    const publicImagesDir = path.join(process.cwd(), "public", "images");

    try {
        if (!fs.existsSync(publicImagesDir)) {
            fs.mkdirSync(publicImagesDir, { recursive: true });
        }
        const allFiles = fs.readdirSync(publicImagesDir);

        // صرف اجازت شدہ ایکسٹینشنز والی فائلیں فلٹر کریں
        imageCache = allFiles.filter((file) => {
            const ext = file.split(".").pop()?.toLowerCase();
            return ext ? EXTENSIONS.has(ext) : false;
        });
    } catch (error) {
        console.error("Failed to read image directory:", error);
        imageCache = [];
    }

    return imageCache;
}

// کیش سے فائل لسٹ حاصل کریں
export function getImageCache(): string[] {
    if (!imageCache) {
        return refreshImageCache();
    }
    return imageCache;
}

// cardName کے حساب سے (Piston1, Piston2, Piston3) کیش سے امیجز تلاش کریں
export function getImagesByCardName(cardName: string): string[] {
    const allFiles = getImageCache();
    const matches: string[] = [];

    for (let i = 1; i <= 3; i++) {
        const prefix = `${cardName}${i}.`.toLowerCase();
        const foundFile = allFiles.find((file) =>
            file.toLowerCase().startsWith(prefix)
        );

        if (foundFile) {
            matches.push(`/images/${foundFile}`);
        }
    }

    return matches;
}

// امیج ڈلیٹ کرنے کا فنکشن
export function deleteImageFromCache(filename: string): boolean {
    const publicImagesDir = path.join(process.cwd(), "public", "images");
    const filePath = path.join(publicImagesDir, filename);

    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            refreshImageCache(); // ڈلیٹ کرنے کے بعد کیش تازہ کریں
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Failed to delete image ${filename}:`, error);
        return false;
    }
}