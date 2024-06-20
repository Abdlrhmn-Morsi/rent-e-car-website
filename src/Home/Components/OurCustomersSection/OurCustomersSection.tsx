// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import CustomerCard from "./component/CustomerCard";
import OurCustomerCover from "../../../assets/OurCustomerCover.png";

export default function OurCustomersSection() {
  return (
    <>
      <div id="our-customers" className="relative md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${OurCustomerCover})` }}
        ></div>

        <div
          className="relative flex flex-col items-center
          justify-center gap-[5rem] h-full bg-black bg-opacity-50 p-[2rem]
        "
        >
          <div className="relative text-5xl font-bold text-center">
            Our Customers
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              waitForTransition: true,
              disableOnInteraction: false,
            }}
            speed={800}
            modules={[Pagination, Autoplay]}
            className="w-full max-w-4xl"
          >
            <SwiperSlide>
              <CustomerCard
                img="https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Freviews%2Favatar%2Fimg3.webp&w=828&q=75"
                name="Tom Cruise"
                job="Actor - Director"
                desc="Non dolor qui incididunt duis ullamco fugiat aute cillum eiusmod elit velit. In reprehenderit nulla minim incididunt qui esse labore fugiat consectetur. Aliquip consectetur elit eiusmod fugiat aliquip. Aliqua cillum minim amet magna in veniam consectetur laboris nulla cillum cupidatat duis. Id in sunt ex deserunt eu nostrud sunt nulla esse do officia. Duis qui nostrud anim irure magna adipisicing tempor sint."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard
                img="https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Freviews%2Favatar%2Fimg1.webp&w=828&q=75"
                name="Tom Cruise"
                job="Actor - Director"
                desc="Non dolor qui incididunt duis ullamco fugiat aute cillum eiusmod elit velit. In reprehenderit nulla minim incididunt qui esse labore fugiat consectetur. Aliquip consectetur elit eiusmod fugiat aliquip. Aliqua cillum minim amet magna in veniam consectetur laboris nulla cillum cupidatat duis. Id in sunt ex deserunt eu nostrud sunt nulla esse do officia. Duis qui nostrud anim irure magna adipisicing tempor sint."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CustomerCard
                img="https://deepstrike.io/_next/image?url=%2Fimg%2Flanding%2Freviews%2Favatar%2Fimg2.webp&w=828&q=75"
                name="Tom Cruise"
                job="Actor - Director"
                desc="Non dolor qui incididunt duis ullamco fugiat aute cillum eiusmod elit velit. In reprehenderit nulla minim incididunt qui esse labore fugiat consectetur. Aliquip consectetur elit eiusmod fugiat aliquip. Aliqua cillum minim amet magna in veniam consectetur laboris nulla cillum cupidatat duis. Id in sunt ex deserunt eu nostrud sunt nulla esse do officia. Duis qui nostrud anim irure magna adipisicing tempor sint."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
