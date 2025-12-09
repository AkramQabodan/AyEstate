import { Icons } from "@/components/icons";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="w-full py-[100px] px-[120px] pb-[60px] flex flex-col items-center text-white font-sora relative overflow-hidden"
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
        <h2 className="text-4xl font-bold text-text-white text-sora uppercase leading-[54px]">
          Let’s start a
          <br />
          successful project
        </h2>
        <p className="text-[18px] font-normal text-gray-300 mt-6  leading-relaxed w-full">
          We deliver immediate business impact and long-term ROI for your brand.
          <br />
          Find out why Astheris are Australia&apos;s trusted Digital Agency.
        </p>
        <Link
          href="/contact"
          className="mt-6 flex items-center justify-center gap-[10px] px-8 h-[56px] bg-btn-primary-bg text-text-blueish-2 text-[18px] font-semibold rounded-full hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Start A Project
          <Icons.ArrowTopRight />
        </Link>
      </div>
    </section>
  );
}
