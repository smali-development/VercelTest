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
          alt="Image description" 
          width={150} 
          height={150} 
          priority 
          className="w-full h-auto rounded-md object-cover" 
        />
      </CardContent>
    </Card>
  );
}