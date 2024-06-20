export default function NavBarBtn({
  txtColor = "black",
  name,
  onClick,
  isActive = false,
}: {
  txtColor?: string;
  name: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <>
      <button
        className={`text-[1.1rem] text-${txtColor} 
        font-bold bg-inherit hover:text-red-600 transition duration-150 ease-out hover:ease-in
        ${isActive && "text-red-600"}
        `}
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}
