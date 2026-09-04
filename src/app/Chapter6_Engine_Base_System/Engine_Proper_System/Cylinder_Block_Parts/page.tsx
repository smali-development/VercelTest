import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";

export default function Cylinder_Block_Parts() {
  const elements = [
    { name: "Water Jacket", slug: "?" },
    { name: "Water Port", slug: "?" },
    { name: "Oil-In Line", slug: "?" },
    { name: "Oil Return Port", slug: "?" },
    { name: "Dowel Pin", slug: "?" },
    { name: "Sleeve", slug: "?" },
    { name: "Main Piece", slug: "?" },
    { name: "Oil Main Line", slug: "?" },
    { name: "Thrust Bearing", slug: "?" },
    { name: "Crank Shaft", slug: "?" },
    { name: "Crank Gauge", slug: "?" },
    { name: "Piston", slug: "?" },
    { name: "Water Jacket Pipe", slug: "?" },
    { name: "Engine Coolant Flange", slug: "?" },
    { name: "Oil Gallery", slug: "?" },
    { name: "Liner", slug: "?" },
    { name: "Crank Shaft Bearings", slug: "?" },
    { name: "Main Caps", slug: "?" },
    { name: "Rear Main Seal", slug: "?" },
    { name: "Front Main Seal", slug: "?" },
    { name: "Flywheel Mounts", slug: "?" },
    { name: "Block Mounts", slug: "?" },
    { name: "Deck Surface", slug: "?" },
    { name: "Oil Pump", slug: "?" },
    { name: "Water Pump", slug: "?" },
    { name: "Crank Pulley", slug: "?" },
    { name: "Oil Filter", slug: "?" },
    { name: "Oil Dipstick", slug: "?" },
    { name: "Starter Motor", slug: "?" },
    { name: "Alternator", slug: "?" },
  ];

  const basePath = "/Chapter6_Engine_Base_System/Engine_Proper_System/Cylinder_Block_Parts";

  return (
    <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
      <div>


        <div>
          <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Base System</h1>
          <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Proper System</h2>
          <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Cylinder Block Parts</h3>
          {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
        </div>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium">
          {elements.map((element) => (
            <li key={element.slug}>
              <Link
                href={`${basePath}/${element.slug}`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {element.name}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Images / Cards Partition (Deferred Loading) */}
      <CollapsibleCards title="View Tool Cards & Images">
        {elements.map((element) => (
          <CardShadcn3BunchDiv_CardName
            key={element.slug}
            cardName={element.name}
          />
        ))}
      </CollapsibleCards>

    </div>


  );
}

