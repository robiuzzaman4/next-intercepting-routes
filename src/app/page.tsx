import { products } from "@/constants/products";
import { Expand, GithubIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 py-12 grid gap-16">
      <div className="grid gap-4">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tighter">
          Next.js Intercepting Routes Example.
        </h1>
        <span className="text-base font-normal text-zinc-700">
          Visit Next.js documentation to learn about{" "}
          <Link
            href={
              "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"
            }
            target="_blank"
            className="underline"
          >
            Parallel Routes
          </Link>{" "}
          and{" "}
          <Link
            href={
              "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"
            }
            target="_blank"
            className="underline"
          >
            Intercepting Routes.
          </Link>{" "}
        </span>
        <Link href={`/products/`} className="w-full">
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-950 bg-zinc-950 shadow-sm hover:bg-zinc-950/90 text-white">
            <span>Github</span>
            <GithubIcon className="text-white" size={16} />
          </button>
        </Link>
      </div>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full p-4 rounded-lg bg-white border border-zinc-200 grid gap-4"
          >
            <h1 className="text-3xl font-medium tracking-tighter">
              {product.name}
            </h1>
            <Image
              src={product.img}
              alt={product.name}
              width={720}
              height={720}
              className="w-full h-full object-cover"
            />

            <div className="mt-4 w-fit ml-auto">
              <Link href={`/products/${product.id}`} className="w-full">
                <button className="inline-flex items-center justify-center gap-1 px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 text-zinc-700">
                  <Expand className="text-zinc-700" size={14} />
                  <span>Preview</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
