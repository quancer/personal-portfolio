import { Header, Hero, About } from "@/components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
}
