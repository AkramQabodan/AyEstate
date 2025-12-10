import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="w-full pt-8 md:pt-10 xl:pt-[50px] px-4 md:px-8 lg:px-12 xl:px-16 pb-8 md:pb-10 xl:pb-[52px] flex flex-col items-center text-black font-sora bg-bg-pinkish">
      <div className="w-full flex flex-col items-center max-w-[1312px] text-center">
        <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 lg:mb-10 xl:mb-[50px]">
          Customer Testimonials
        </span>
        <Image
          src="/images/Stars.png"
          alt="stars"
          width={116}
          height={19}
          className="mb-4 md:mb-6 xl:mb-8 w-[80px] md:w-[100px] xl:w-[116px] h-auto"
        />
        <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-4 md:mb-6 xl:mb-8 max-w-[300px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[768px]">
          Our experience with this real estate website design has been nothing
          short of amazing. The team was professional, responsive, and delivered
          beyond our expectations.
        </p>
        <div className="flex items-center gap-3 md:gap-4 xl:gap-5">
          <Image
            src="/images/Avatar.png"
            alt="testimonial 1"
            width={56}
            height={56}
            className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] xl:w-[56px] xl:h-[56px]"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm md:text-base font-semibold">John Doe</span>
            <span className="text-sm md:text-base font-normal">
              CEO, ABC Realty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
