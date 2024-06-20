export default function AppInfoWithInputField() {
  return (
    <>
      <div className="flex flex-col gap-[1rem]  items-center justify-center md:items-start">
        <p className="text-5xl font-bold">ValorWings</p>
        <p className="font-bold text-[1rem] m-[1rem] text-center md:text-start">
          Replace outdated PDF pentest reports with a cutting-edge penetration
          testing solution.
        </p>
        <div className="w-auto inline-block border-white rounded-full bg-black p-[.8rem] bg-opacity-70">
          <input
            className=" bg-transparent rounded-md p-2 focus:outline-none "
            type="text"
            placeholder="Your Email"
          />
          <button className="bg-red-500 rounded-full p-2">Get Started</button>
        </div>
      </div>
    </>
  );
}
