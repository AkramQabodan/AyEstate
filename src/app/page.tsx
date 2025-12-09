import {
  Navbar,
  Hero,
  Services,
  Process,
  Stats,
  Properties,
  Testimonials,
  FAQ,
  CTA,
  Footer,
} from "./_sections";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Properties />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
