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
import { useTheme } from "@/context/ThemeContext";
export default function Home() {
  const { theme } = useTheme();
  let divClassName = `text-gray-600  ${
    theme == "Light"
      ? "bg-[#fff] text-[#4B5563]"
      : "bg-[#030712] text-[#D1D5DB]"
  }`;

  return (
    <div className={divClassName}>
      <div className="max-w-[1280px]  m-auto">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
