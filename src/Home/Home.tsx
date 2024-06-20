import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import SectionThree from "./Components/SectionThree/SectionThree";
import Footer from "./Components/Footer/Footer";
import OurCustomersSection from "./Components/OurCustomersSection/OurCustomersSection";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <OurCustomersSection />
      <Footer />
    </div>
  );
}
