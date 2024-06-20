export default function CustomerCard({
  img,
  name,
  job,
  desc,
}: {
  img: string;
  name: string;
  job: string;
  desc: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-[.8rem] items-center text-center md:items-start md:text-start bg-black bg-opacity-70 p-[2rem] rounded-lg">
        <img className="rounded-full h-[5rem] w-[5rem]" src={img} alt="" />
        <div>
          <p className="text-[1.5rem] font-bold">{name}</p>
          <p className="text-[1rem] font-bold  text-white text-opacity-50">
            {job}
          </p>
        </div>
        <p className="text-[1rem] font-bold">{desc}</p>
      </div>
    </>
  );
}
