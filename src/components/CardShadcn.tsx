import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CardShadcnProps {
  imagePath: string;
//   cardName: string;
//   viewImagesLink: string;
}

export default function CardShadcn({ imagePath}: CardShadcnProps) {
  return (
    <Card className="w-72">
   
      <CardContent>
        <Image src={imagePath} alt={imagePath} width={96} height={96} className="w-full h-auto rounded-md" />
      </CardContent>
     
    </Card>
  );
}