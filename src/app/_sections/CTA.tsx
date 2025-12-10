import { Icons } from "@/components/icons";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 xl:py-[100px] px-4 md:px-8 lg:px-16 xl:px-[120px] pb-8 md:pb-10 lg:pb-12 xl:pb-[60px] flex flex-col items-center text-white font-sora relative overflow-hidden"
      style={{
        background: "#070711",
      }}
    >
      <div
        className="absolute top-0 left-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(15, 30, 70, 0.7) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(15, 30, 70, 0.7) 0%, transparent 60%)",
        }}
      />

      <div className="w-full flex flex-col items-center max-w-[1312px] text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-text-white text-sora uppercase leading-[36px] md:leading-[42px] lg:leading-[48px] xl:leading-[54px]">
          Let&apos;s start a
          <br />
          successful project
        </h2>
        <p className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-normal text-gray-300 mt-4 md:mt-5 xl:mt-6 leading-relaxed w-full max-w-[300px] md:max-w-[500px] lg:max-w-full">
          We deliver immediate business impact and long-term ROI for your brand.
          <br className="hidden md:inline" />
          Find out why Astheris are Australia&apos;s trusted Digital Agency.
        </p>
        <Link
          href="/contact"
          className="mt-4 md:mt-5 xl:mt-6 flex items-center justify-center gap-2 md:gap-[10px] px-6 md:px-7 xl:px-8 h-[48px] md:h-[52px] xl:h-[56px] bg-btn-primary-bg text-text-blueish-2 text-[16px] md:text-[17px] xl:text-[18px] font-semibold rounded-full hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Start A Project
          <Icons.ArrowTopRight />
        </Link>
      </div>
    </section>
  );
}
