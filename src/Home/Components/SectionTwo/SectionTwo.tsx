import Cover from "../../../assets/cover2.png";
import Marquee from "react-fast-marquee"; // Ensure you have this package installed

export default function SectionTwo() {
  return (
    <div id="section-two" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Cover})` }}
      ></div>

      <div
        className="relative h-full flex flex-col items-center justify-center gap-[10rem]
       bg-black bg-opacity-50"
      >
        <div
          className="flex flex-col items-center justify-center
          text-[2.5rem] text-center px-4 mb-8 font-bold"
        >
          We secure companies worth billions
        </div>

        <div className="w-full flex flex-col gap-10">
          <Marquee className="bg-transparent">
            <div className="flex flex-row gap-[10rem]">
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fhealthie.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fcheckbook.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fhealthie.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fcapdesk.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fyou-gota-gift.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
            </div>
          </Marquee>

          <Marquee direction="right" className="bg-transparent">
            <div className="flex flex-row gap-[10rem]">
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fyoco.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />

              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fbokio.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fmawdoo3.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fyoco.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
              <img
                src={
                  "https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Fcustomers%2Fvezeeta.webp&w=256&q=75"
                }
                style={{ height: "3rem" }}
                alt=""
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
