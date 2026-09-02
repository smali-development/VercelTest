import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { refreshImageCache } from "@/lib/imageCache";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadDir = path.join(process.cwd(), "public", "images");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, file.name);
        fs.writeFileSync(filePath, buffer);

        // کیش اپ ڈیٹ کریں
        refreshImageCache();

        return NextResponse.json({
            message: "File uploaded successfully",
            filename: file.name,
        });
    } catch {
        return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
    }
}