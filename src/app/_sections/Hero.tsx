import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[600px] bg-bg-header flex items-center justify-center px-[80px] gap-[85px]">
      <div className="flex flex-col items-start max-w-[650px]">
        <h1 className="font-sora text-[56px] font-bold text-[#000000] mb-10">
          Discover Your Dream Home Today
        </h1>
        <p className="font-sora text-[18px] font-normal text-[#000000] mb-20">
          Find the perfect property that suits your lifestyle. Our real estate
          service offers unique selling propositions that set us apart from the
          competition. Find your perfect home today!
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/listings"
            className="flex items-center justify-center w-[153px] h-[48px] bg-btn-primary-bg text-text-dark font-sora text-[16px] font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
          >
            Explore Now
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center w-[129px] h-[48px] bg-transparent border border-border-black text-text-black font-sora text-[16px] font-normal rounded-[12px] hover:bg-text-heading hover:text-text-white transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
      <Image
        src="/images/hero-home.png"
        alt="Beautiful modern home interior with dining area"
        width={579}
        height={500}
        preload={true}
      />
    </section>
  );
}
