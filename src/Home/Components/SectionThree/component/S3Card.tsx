export default function S3Card({
  img,
  title,
  content,
}: {
  img: string;
  title: string;
  content: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center gap-3 bg-black bg-opacity-50 p-[1rem] rounded-md">
        <img
          className="w-[7rem] delay-150 hover:rotate-180 ease-in-out duration-150 transition-all hover:scale-120  rounded-full"
          src={img}
          alt=""
        />
        <p className="text-center text-[1.5rem] font-bold">{title}</p>
        <p className="text-center text-[.8rem">{content}</p>
      </div>
    </>
  );
}
