export default function SocialIcon({ icon }: { icon: JSX.Element }) {
  return (
    <>
      <div className="rounded-full bg-black p-[1rem] hover:bg-red-500 transition-all">
        {icon}
      </div>
    </>
  );
}
