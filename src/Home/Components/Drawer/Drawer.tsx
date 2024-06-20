import NavBarBtn from "../../../AppBar/component/NavBarBtn";
export default function Drawer({ isOpen }: { isOpen: boolean }) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`flex flex-col gap-5 bg-black text-white rounded-md  
             transition-all duration-300 ease-in-out overflow-hidden ${
               isOpen ? "mt-5 p-4 h-[40%]" : "h-0"
             }`}
      >
        <NavBarBtn
          txtColor="white"
          onClick={() => scrollToSection("section-one")}
          name="Home"
        />
        <NavBarBtn
          txtColor="white"
          onClick={() => scrollToSection("section-two")}
          name="Clients"
        />
        <NavBarBtn
          txtColor="white"
          onClick={() => scrollToSection("section-three")}
          name="Our Work"
        />
        <NavBarBtn
          txtColor="white"
          onClick={() => scrollToSection("our-customers")}
          name="Customers"
        />
        <NavBarBtn
          txtColor="white"
          onClick={() => scrollToSection("footer")}
          name="Contact"
        />
      </div>
    </>
  );
}
