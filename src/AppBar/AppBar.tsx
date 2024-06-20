import NavBarBtn from "./component/NavBarBtn";
import { useState } from "react";

export default function AppBar({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  const [activeBtn, setActiveBtn] = useState(Number);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative flex items-center justify-between w-full">
      <p
        onClick={() => scrollToSection("section-one")}
        className="
      text-red-600 text-[1.4rem] md:text-[2rem] font-bold
      cursor-pointer
       "
      >
        ValorWings
      </p>
      <div className="hidden md:flex gap-6 justify-center items-center pt-6">
        <NavBarBtn
          isActive={activeBtn === 0}
          onClick={() => {
            setActiveBtn(0);
            scrollToSection("section-one");
          }}
          name="Home"
        />
        <NavBarBtn
          isActive={activeBtn === 1}
          onClick={() => {
            setActiveBtn(1);
            scrollToSection("section-two");
          }}
          name="Clients"
        />
        <NavBarBtn
          isActive={activeBtn === 2}
          onClick={() => {
            setActiveBtn(2);
            scrollToSection("section-three");
          }}
          name="Our Work"
        />
        <NavBarBtn
          isActive={activeBtn === 3}
          onClick={() => {
            setActiveBtn(3);
            scrollToSection("our-customers");
          }}
          name="Customers"
        />
        <NavBarBtn
          isActive={activeBtn === 4}
          onClick={() => {
            setActiveBtn(4);
            scrollToSection("footer");
          }}
          name="Contact"
        />
      </div>

      <div className="md:hidden" onClick={onClick}>
        {isOpen ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-3xl text-white font-semibold"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-3xl text-white font-semibold"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
}
