import { Button, Drawer } from "flowbite-react";
import { HiMinus, HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, quntity, remove } from "../Redux/sliceFile/cart";
import { useState } from "react";

function DrawerCart({ isOpen, handleClose }) {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const dispacth = useDispatch();

  function removeCart(id) {
    dispacth(remove(id));
  }
  function cartincrese(id) {
    dispacth(increment(id));
  }
  function cartdecrese(id) {
    dispacth(decrement(id));
  }
  return (
    <Drawer
      className="bg-black text-white fixed left-0 right-0 top-0 bottom-0"
      open={isOpen}
      onClose={handleClose}
      position="top"
    >
      <Drawer.Header
        className="text-center "
        title="Your Shoping Cart"
        titleIcon={HiShoppingCart}
      />
      <Drawer.Items>
        <div className="">
          <ul>
            {cart.cartStore.map((value, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex content-center text-3xl gap-10  "
                  >
                    <img
                      src={value.img}
                      alt=""
                      className="h-52 rounded-[20%]"
                    />
                    <div className="">
                      <p>
                        <span>${value.title}</span>
                      </p>
                      <p className="italic relative">
                        ${value.price} /{" "}
                        <span>${value.price * value.quntity}</span>
                      </p>

                      <br />
                      <p>Total Item={value.quntity}</p>
                    </div>
                    <div className="flex h-11 ml- gap-10 mt-44 ">
                      <Button
                        gradientDuoTone="redToYellow"
                        onClick={() => cartdecrese(value.id)}
                      >
                        Remove
                      </Button>
                      <Button
                        gradientDuoTone="redToYellow"
                        onClick={() => cartincrese(value.id)}
                      >
                        Add
                      </Button>

                      <Button
                        onClick={() => removeCart(value.id)}
                        gradientDuoTone="redToYellow"
                        className="rounded-xl w-48 text-xl"
                      >
                        Delete Item
                      </Button>
                    </div>
                  </div>
                  <div className="mt-10 w- ml-72"></div>
                </>
              );
            })}
          </ul>
          <div className="flex group-[1]: items-center gap-20 text-center justify-center">
            <p className="text-3xl">Total Bill</p>
            <span className="text-3xl">=</span>
            <div className="text-3xl">
              <p>SubTotal</p>
              <p>{cart.subtotal}</p>
            </div>
            <div className="text-3xl">
              <p>text</p>
              <p>{cart.text}</p>
            </div>
            <div className="text-3xl">
              <p>Total</p>
              <p>{cart.total}</p>
            </div>
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  );
}
export default DrawerCart;
