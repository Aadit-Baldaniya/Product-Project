import { Button, Carousel, Navbar } from "flowbite-react";
import React from "react";
import NavBar from "../Reusable Components/NavBar";
import Product from "../Product-App/Product";
import Carousell from "../carousel/Carousell";
import { useDispatch, useSelector } from "react-redux";
import { buyPhone, sellPhone } from "../Redux/sliceFile/slice";
import ProductMap from "../ProductName/ProductMap";

function Home() {
  const cake = useSelector((store) => {
    return store.cake;
  });
  const dispacth = useDispatch();
  function Add() {
    dispacth(buyPhone());
  }
  function sell() {
    dispacth(sellPhone());
  }
  return (
    <>
      <NavBar />
      <Carousell />
      <ProductMap />
      <Product />
    </>
  );
}

export default Home;
