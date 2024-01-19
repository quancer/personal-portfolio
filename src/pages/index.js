import { Header, Hero, About, Skills, Experience } from "@/components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-gray-600 max-w-[1280px] m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
