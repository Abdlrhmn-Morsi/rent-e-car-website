export default function AppLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  const myLiks = links.map((link) => {
    return (
      <li key={link} className="text-[.8rem] font-bold hover:text-red-500">
        {link}
      </li>
    );
  });
  return (
    <div className="flex flex-col">
      <p className="text-[1.3rem] font-bold mb-[1rem]">{title}</p>
      <ul className="flex flex-col gap-[.8rem]">{myLiks}</ul>
    </div>
  );
}
