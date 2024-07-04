import Modal from "@/components/ui/modal";
import { products } from "@/constants/products";
import Image from "next/image";
import React from "react";

interface SingleProductModalPageProps {
  params: {
    id: string;
  };
}

const SingleProductModalPage = ({ params }: SingleProductModalPageProps) => {
  const id = params.id;
  const product = products.find((pd) => pd.id === id);

  return (
    <Modal>
      <div className="w-full sm:p-4 rounded-lg bg-white grid gap-4">
        <h1 className="text-3xl font-medium tracking-tighter">
          {product && product.name}
        </h1>
        <div className="w-fit mx-auto">
          <Image
            src={product ? product.img : ""}
            alt={product ? product.name : "product-image"}
            width={1080}
            height={1080}
            className="w-full h-full max-w-96 max-h-96 object-contain"
          />
        </div>
        <h3 className="text-2xl font-medium tracking-tighter">
          Price: ${product && product.price}
        </h3>
      </div>
    </Modal>
  );
};

export default SingleProductModalPage;
