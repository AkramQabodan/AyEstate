import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="w-full pt-[50px] px-16 pb-[52px] flex flex-col items-center text-black font-sora bg-bg-pinkish">
      <div className="w-full flex flex-col items-center max-w-[1312px] text-center">
        <span className="text-5xl font-bold mb-[50px]">
          Customer Testimonials
        </span>
        <Image
          src="/images/stars.png"
          alt="stars"
          width={116}
          height={19}
          className="mb-8"
        />
        <p className="text-2xl font-bold mb-8 max-w-[768px]">
          Our experience with this real estate website design has been nothing
          short of amazing. The team was professional, responsive, and delivered
          beyond our expectations.
        </p>
        <div className="flex items-center gap-5">
          <Image
            src="/images/Avatar.png"
            alt="testimonial 1"
            width={56}
            height={56}
          />
          <div className="flex flex-col items-start">
            <span className="text-base font-semibold">John Doe</span>
            <span className="text-base font-normal">CEO, ABC Realty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
