import { useState } from "react";
import AppBar from "../../../AppBar/AppBar";
import Cybertruck from "../../../assets/Cybertruck.png";
import AppBtn from "../../../component/AppBtn";
import Drawer from "../Drawer/Drawer";

export default function SectionOne() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      id="section-one"
      className="flex flex-col items-center justify-center h-screen relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Cybertruck})` }}
      ></div>

      {/* Fixed AppBar and Drawer */}
      <div className="fixed top-0 w-full z-50 px-[1rem]">
        <AppBar isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
        <Drawer isOpen={isOpen} />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center gap-[.3rem]">
        <p className="text-[2.8rem] font-bold text-opacity-25 bg-black bg-opacity-50 px-[1rem]">
          Cybertruck
        </p>
        <p className="text-[1.8rem] font-bold bg-black bg-opacity-50 px-[1rem]">
          Long Range AWD From $42,4901
        </p>
        <p className="text-[1.6rem] font-bold  bg-black bg-opacity-50 px-[1rem]">
          After Est. Savings
        </p>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center md:flex-row gap-5 justify-center">
        <AppBtn name="Rent Now" bgColor="black" txtColor="white" />
        {/* <AppBtn name="Order Now" bgColor="white" txtColor="black" /> */}
      </div>
    </div>
  );
}
