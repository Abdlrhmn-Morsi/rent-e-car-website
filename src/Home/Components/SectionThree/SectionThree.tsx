import cover from "../../../assets/cover3.png";
import S3Card from "./component/S3Card";

export default function SectionThree() {
  return (
    <>
      <div id="section-three" className="relative md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>

        <div
          className="relative p-[2rem] h-full flex flex-col items-center 
        justify-center gap-[5rem] overflow-auto
        bg-black bg-opacity-50
        "
        >
          <p className="text-[2.5rem] font-bold text-center">
            Why work with us?
          </p>

          <div className="flex flex-col md:grid grid-cols-3 gap-[3rem]">
            <S3Card
              img="https://deepstrike.io/_next/image?url=%2Ficons%2Ftime-management%20(1).webp&w=128&q=75"
              title="Real-Time Findings"
              content="DeepStrike provides real-time vulnerability reporting, allowing
              you to take immediate action and remediate faster, unlike
              traditional penetration testing, which takes weeks to deliver the
              results after the end of engagement."
            />
            <S3Card
              img="https://deepstrike.io/_next/image?url=%2Ficons%2Frepeat.webp&w=128&q=75"
              title="Continuous"
              content="DeepStrike provides continuous yearly penetration testing for clients, including in-depth quarterly tests and assessments for new releases and codebase modifications, unlike other providers who only test annually and disengage."
            />

            <S3Card
              img="https://deepstrike.io/_next/image?url=%2Ficons%2Fbrain.webp&w=128&q=75"
              title="Manual Approach"
              content="Most of DeepStrike's security testing relies on manual techniques instead of automated tools. This approach provides enhanced precision and adaptability in detecting vulnerabilities, as opposed to automated methods that often yield false positives."
            />
          </div>
        </div>
      </div>
    </>
  );
}
