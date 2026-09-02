import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CardShadcnProps {
  imagePath: string;
}

export default function CardShadcn({ imagePath }: CardShadcnProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-2">
        <Image
          src={imagePath}
          alt="Tool image"
          width={300}
          height={200}
          className="w-full h-auto object-cover rounded-md"
        />
      </CardContent>
    </Card>
  );
}