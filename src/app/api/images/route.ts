import { NextResponse } from "next/server";
import { getImagesByCardName, getImageCache } from "@/lib/imageCache";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cardName = searchParams.get("name");

  // اگر name نہ بھیجا گیا ہو تو کیش کی تمام امیجز کی لسٹ بھیجیں (Admin Page کے لیے)
  if (!cardName) {
    return NextResponse.json({ images: getImageCache() });
  }

  // cardName کے مطابق امیجز واپس کریں
  const images = getImagesByCardName(cardName);
  return NextResponse.json({ images });
}