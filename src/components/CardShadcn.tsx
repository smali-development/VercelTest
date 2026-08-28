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
        <Image 
  src={imagePath} 
  alt="Image description" 
  width={150} // Original ya screen ke mutabiq barha size dein
  height={150} // Sahi ratio ke mutabiq height dein
  // quality={95} // High quality ke liye 90-95 sab se behtareen hai
  priority // Yeh lagane se image jaldi load hogi aur saaf dikhegi
  className="w-full h-auto rounded-md" 
/>
      </CardContent>
     
    </Card>
  );
}