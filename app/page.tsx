import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import BestSelling from "@/components/sections/BestSeller";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSelling />
      <About />
      <Testimonials />
    </main>
  );
}
