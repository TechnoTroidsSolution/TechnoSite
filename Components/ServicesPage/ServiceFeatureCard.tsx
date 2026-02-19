import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  service: {
    slug: any;
    title: string;
    description: string;
    imageLarge?: string;
    imageSmall?: string;
  };
  index: number;
}

export function ServiceFeatureCard({ service, index }: Props) {
  const isReversed = index % 2 === 1;

  return (
    <div className="rounded-3xl border-2 border-neutral-300 bg-transparent p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* TEXT */}
        <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
          <h3 className="text-3xl font-semibold mb-4">
            {service.title}
          </h3>

          <p className="text-muted-foreground max-w-md mb-6">
            {service.description}
          </p>

          <Link
  href={`/services/${service.slug}`}
  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition hover:bg-black hover:text-white ${
    isReversed ? "ml-auto" : ""
  }`}
>
  Read more
  <ArrowUpRight className="w-4 h-4" />
</Link>
        </div>

        {/* IMAGES */}
<div
  className={`flex gap-6 ${
    isReversed
      ? "lg:order-1 justify-start"
      : "lg:order-2 justify-end"
  }`}
>
  {/* Big image */}
  {service.imageLarge && (
    <div className="relative w-104 h-80 rounded-3xl overflow-hidden  bg-white">
      <Image
        src={service.imageLarge}
        alt="Main preview"
        fill
        className="object-cover"
      />
    </div>
  )}

  {/* Small image */}
  {service.imageSmall && (
    <div className="relative w-78 h-48 rounded-2xl overflow-hidden  bg-white">
      <Image
        src={service.imageSmall}
        alt="Secondary preview"
        fill
        className="object-cover"
      />
    </div>
  )}
</div>
        </div>

      </div>
    
  );
}