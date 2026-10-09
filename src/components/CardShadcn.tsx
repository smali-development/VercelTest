import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CardShadcnProps {
  imagePath: string;
  reloadToken?: number;
}

export default function CardShadcn({ imagePath, reloadToken = 0 }: CardShadcnProps) {
  const src = reloadToken ? `${imagePath}?reload=${reloadToken}` : imagePath;

  return (
    <Card className="w-full">
      <CardContent className="p-2">
        <Image
          src={src}
          alt="Tool image"
          width={300}
          height={200}
          unoptimized={reloadToken > 0}
          className="w-full h-auto object-cover rounded-md"
        />
      </CardContent>
    </Card>
  );
}