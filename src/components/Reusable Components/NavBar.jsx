import { Button, Navbar } from "flowbite-react";
import React, { memo, useState } from "react";
import DrawerCart from "./DrawerCart";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(!isOpen);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="images/card.png" className="mr-3 h-40 w-36 sm:h-20" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Shoping Now
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-lg text-green-300" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-lg text-green-300" href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-lg text-green-300" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-lg text-green-300" href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link className="text-lg text-green-300" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <Button
        onClick={handleClose}
        gradientDuoTone="tealToLime"
        className=" m-0 ml-32"
      >
        <p className="text-lg "> Cart</p>
      </Button>
      <DrawerCart isOpen={isOpen} handleClose={handleClose} />
    </Navbar>
  );
}

export default memo(NavBar);
