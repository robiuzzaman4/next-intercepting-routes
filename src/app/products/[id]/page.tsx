import { products } from "@/constants/products";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

const SingleProductPage = ({ params }: SingleProductPageProps) => {
  const id = params.id;
  const product = products.find((pd) => pd.id === id);

  return (
    <div className="w-full max-w-md mx-auto py-16 grid gap-4 px-4">
      {/* back button */}
      <Link href={`/`} className="w-fit">
        <button className="inline-flex items-center justify-center gap-1 px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 text-zinc-700">
          <ArrowLeft className="text-zinc-700" size={14} />
          <span>Back</span>
        </button>
      </Link>
      <div className="w-full p-4 rounded-lg bg-white border border-zinc-200 grid gap-4">
        <h1 className="text-3xl font-medium tracking-tighter">
          {product && product.name}
        </h1>
        <Image
          src={product ? product.img : ""}
          alt={product ? product.name : "product-image"}
          width={1080}
          height={1080}
          className="w-full h-full max-w-96 max-h-96 mx-auto object-contain"
        />
        <h3 className="text-2xl font-medium tracking-tighter">
          Price: ${product && product.price}
        </h3>
      </div>
    </div>
  );
};

export default SingleProductPage;
