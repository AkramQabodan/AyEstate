import Image from "next/image";

const processSteps = [
  {
    image: "/images/process_section_1.png",
    title: "Find Your Dream Property",
    description:
      "Browse through a wide selection of properties that match your preferences and requirements.",
  },
  {
    image: "/images/process_section_2.png",
    title: "Connect with Trusted Agents",
    description:
      "Our platform connects you with experienced and reliable real estate agents who will guide you through the process.",
  },
  {
    image: "/images/process_section_3.png",
    title: "Negotiate and Close the Deal",
    description:
      "Our experts will assist you in negotiating the best terms and ensuring a smooth closing process.",
  },
];
export default function Process() {
  return (
    <section className="w-full pt-20 px-16 pb-20 flex flex-col items-center text-black font-sora text-center">
      <div className="w-full flex flex-col items-center max-w-[1312px]">
        <span className="text-base font-semibold mb-4">Simplify</span>
        <h3 className="text-5xl font-bold mb-6 max-w-[768px]">
          Streamline Your Property Buying or Selling Process
        </h3>
        <p className="text-[18px] font-normal mb-20 max-w-[768px]">
          Our website provides a step-by-step guide to help you seamlessly
          navigate the process of buying or selling property. From finding the
          perfect property to closing the deal, we&apos;ve got you covered.
        </p>

        <div className="w-full flex justify-between">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center  max-w-[405.33px]"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={405}
                height={240}
                className="mb-8 w-full"
                style={{ width: "100%", height: "auto" }}
              />
              <h4 className="text-[32px] font-bold mb-6">{step.title}</h4>
              <p className="text-base font-normal">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
