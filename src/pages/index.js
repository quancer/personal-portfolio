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

export default function Home() {
  return (
    <div className="text-gray-600 max-w-[1280px] m-auto">
      <Header />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
