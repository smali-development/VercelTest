import { NextResponse } from "next/server";
import path from "path";
import { deleteImageFromCache } from "@/lib/imageCache";

export async function DELETE(request: Request) {
    try {
        const { filename } = await request.json();

        if (!filename || typeof filename !== "string") {
            return NextResponse.json({ error: "Filename is required" }, { status: 400 });
        }

        // اگر آپ کے پاس پورا URL یا پاتھ آ رہا ہو تو صرف فائل کا نام الگ کریں
        const safeFilename = path.basename(filename);

        const success = deleteImageFromCache(safeFilename);

        if (!success) {
            return NextResponse.json({ error: "File not found on disk" }, { status: 404 });
        }

        return NextResponse.json({ message: "File deleted successfully" });
    } catch (error) {
        console.error("Delete Error:", error);
        return NextResponse.json({ error: "Failed to delete file" }, { status: 500 });
    }
}

// اس GET فنکشن سے آپ براؤزر میں ڈائریکٹ روٹ ٹیسٹ کر سکتے ہیں
export async function GET() {
    return NextResponse.json({ status: "Delete API Route is Active!" });
}