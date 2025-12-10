import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-[500px] md:min-h-[550px] xl:h-[600px] bg-bg-header flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-12 xl:px-[80px] py-8 md:py-10 xl:py-0 gap-8 md:gap-10 lg:gap-12 xl:gap-[85px]">
      <div className="flex flex-col items-start md:items-start w-full md:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px] order-2 md:order-1">
        <h1 className="font-sora text-[32px] md:text-[36px] lg:text-[44px] xl:text-[56px] font-bold text-[#000000] mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          Discover Your Dream Home Today
        </h1>
        <p className="font-sora text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-normal text-[#000000] mb-6 md:mb-10 lg:mb-14 xl:mb-20">
          Find the perfect property that suits your lifestyle. Our real estate
          service offers unique selling propositions that set us apart from the
          competition. Find your perfect home today!
        </p>
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/listings"
            className="flex items-center justify-center w-[130px] md:w-[140px] xl:w-[153px] h-[42px] md:h-[45px] xl:h-[48px] bg-btn-primary-bg text-text-dark font-sora text-[14px] md:text-[15px] xl:text-[16px] font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
          >
            Explore Now
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center w-[110px] md:w-[120px] xl:w-[129px] h-[42px] md:h-[45px] xl:h-[48px] bg-transparent border border-border-black text-text-black font-sora text-[14px] md:text-[15px] xl:text-[16px] font-normal rounded-[12px] hover:bg-text-heading hover:text-text-white transition-colors duration-200"
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
        className="w-full max-w-[350px] md:max-w-[320px] lg:max-w-[420px] xl:max-w-[579px] h-auto order-1 md:order-2"
        preload={true}
      />
    </section>
  );
}
