import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Work,
  Contact,
  Footer,
} from "@/components";
import Ps from "@/components/playscore/Ps";
export default function Playscore() {
  return (
    <div className="text-gray-600 max-w-[1280px] m-auto">
      <Header />
      <Ps />
      <Footer />
    </div>
  );
}
