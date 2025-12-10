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
    <section className="w-full pt-10 md:pt-14 xl:pt-20 px-4 md:px-8 lg:px-12 xl:px-16 pb-8 md:pb-10 xl:pb-11 flex flex-col items-center text-black font-sora">
      <div className="w-full flex flex-col items-center max-w-[1312px]">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-14 xl:mb-20">
          <div className="flex flex-col items-start gap-2 md:gap-3 xl:gap-4">
            <span className="text-sm md:text-base font-semibold">Discover</span>
            <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-[300px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[440px]">
              Find Your Dream Property with Us
            </h4>
          </div>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-normal w-full md:max-w-[320px] lg:max-w-[480px] xl:max-w-[616px]">
            At our real estate agency, we offer a range of services to help you
            with your property needs. Whether you&apos;re looking to buy, sell,
            or get a valuation, our experienced team is here to assist you every
            step of the way.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 lg:gap-6 mb-8 md:mb-10 xl:mb-[54px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col w-full gap-4 md:gap-5 xl:gap-6 md:max-w-[220px] lg:max-w-[300px] xl:max-w-[405.33px]"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={76}
                height={76}
                className="w-[56px] h-[56px] md:w-[60px] md:h-[60px] lg:w-[68px] lg:h-[68px] xl:w-[76px] xl:h-[76px]"
              />
              <h5 className="text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold">
                {service.title}
              </h5>
              <p className="text-sm md:text-base font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center gap-4 md:gap-5 xl:gap-6 self-baseline">
          <Link
            href="#"
            className="flex items-center justify-center w-[140px] md:w-[150px] xl:w-[160px] h-[48px] md:h-[52px] xl:h-[56px] bg-btn-primary-bg text-text-dark font-sora text-sm md:text-base font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
          >
            Learn More
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 md:gap-4 font-normal font-roboto text-sm md:text-base"
          >
            Contact
            <Icons.ChevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
