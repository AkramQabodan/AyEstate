import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";

const services = [
  {
    icon: "/images/file.png",
    title: "Property Buying and Selling",
    description:
      "We provide expert guidance for buying and selling properties, ensuring a smooth and successful transaction.",
  },
  {
    icon: "/images/file.png",
    title: "Property Valuation Services",
    description:
      "Our team of certified appraisers offers accurate property valuations to help you make informed decisions.",
  },
  {
    icon: "/images/file.png",
    title: "Real Estate Investment Advice",
    description:
      "Get expert advice on real estate investment strategies to maximize your returns.",
  },
];

export default function Services() {
  return (
    <section className="w-full pt-20 px-16 pb-11  flex flex-col items-center text-black font-sora">
      <div className="w-full flex flex-col items-center max-w-[1312px]">
        <div className="w-full flex justify-between mb-20">
          <div className="flex flex-col items-start gap-4">
            <span className="text-base font-semibold">Discover</span>
            <h4 className="text-5xl font-bold max-w-[440px]">
              Find Your Dream Property with Us
            </h4>
          </div>
          <p className="text-[18px] font-normal max-w-[616px]">
            At our real estate agency, we offer a range of services to help you
            with your property needs. Whether you&apos;re looking to buy, sell,
            or get a valuation, our experienced team is here to assist you every
            step of the way.
          </p>
        </div>
        <div className="w-full flex justify-between mb-[54px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col w-full gap-6 max-w-[405.33px]"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={76}
                height={76}
              />
              <h5 className="text-[32px] font-bold">{service.title}</h5>
              <p className="text-base font-normal">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center gap-6 self-baseline">
          <Link
            href="/services"
            className=" flex items-center justify-center w-[160px] h-[56px] bg-btn-primary-bg text-text-dark font-sora text-base font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-4 font-normal font-roboto text-base"
          >
            Contact
            <Icons.ChevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
