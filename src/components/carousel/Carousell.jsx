import { Carousel } from "flowbite-react";
import React, { memo } from "react";

function Carousell() {
  return (
    <div className="h-44 sm:h-52 xl:h-80 2xl:h-96 text-white bg-black  ">
      <Carousel slideInterval={5000}>
        <img
          src="https://media.istockphoto.com/id/1144376964/vector/summer-sale-banner-on-yellow-background.jpg?s=612x612&w=0&k=20&c=I6YMPNKXvJS32jQVys-b4D9ndoMWc4pHUE1UCXMY7VQ="
          alt="..."
          className="object-fill h-72 w-4/5 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5WNlqQz5NkA0lRcAvU6Ian2nwZU2jI77Rg&s"
          alt="..."
          className="object-fill h-72 w-4/5 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRMuW49Se8hM8U9QUYcabo2dRyQrGwGiJgg&s"
          alt="..."
          className="object-fill h-72 w-4/5 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwcd9iPxpAGSNGCNdQcCh7Hnm-qCGdwyBRg&s"
          alt="..."
          className="object-fill h-72 w-4/5 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmtjibg4qyB_Gnc8o0reKNa8vf4z_aT6N6w&s"
          alt="..."
          className="object-fill h-72 w-4/5 rounded-2xl"
        />
      </Carousel>
    </div>
  );
}

export default memo(Carousell);
