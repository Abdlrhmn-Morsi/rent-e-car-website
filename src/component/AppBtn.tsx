export default function AppBtn({
  name,
  bgColor = "white",
  txtColor,
}: {
  name: string;
  bgColor?: string;
  txtColor?: string;
}) {
  return (
    <button
      className={`text-${txtColor} bg-${bgColor} font-bold py-2 px-4 rounded w-[60%] md:w-[25%]
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500
       hover:text-white duration-300`}
    >
      {name}
    </button>
  );
}
