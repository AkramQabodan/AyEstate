import Link from "next/link";

const stats = [
  {
    value: "30%",
    description: "Success Rate",
  },
  {
    value: "30%",
    description: "Properties Listed",
  },
  {
    value: "30%",
    description: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="w-full py-10 md:py-14 xl:py-20 px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center bg-bg-dark-2 font-sora text-white">
      <div className="w-full flex flex-col items-center max-w-[1312px]">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-14 xl:mb-20">
          <div className="flex flex-col items-start w-full md:max-w-[300px] lg:max-w-[450px] xl:max-w-[616px]">
            <span className="text-sm md:text-base font-semibold mb-2 md:mb-3 xl:mb-4">
              Innovative
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Transforming the Real Estate Industry with Excellence
            </h3>
          </div>
          <div className="flex flex-col items-start w-full md:max-w-[300px] lg:max-w-[450px] xl:max-w-[616px]">
            <p className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-normal mb-4 md:mb-6 xl:mb-8">
              At our company, we take pride in our exceptional success rate,
              having listed thousands of properties, and ensuring client
              satisfaction is our top priority.
            </p>
            <Link
              href="#"
              className="flex items-center justify-center w-[140px] md:w-[150px] xl:w-[160px] h-[48px] md:h-[52px] xl:h-[56px] bg-btn-primary-bg text-text-dark font-sora text-sm md:text-base font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-4 lg:gap-6 md:h-auto xl:h-[140px]">
          {stats.map((stat) => (
            <div
              key={stat.description}
              className="flex flex-col items-start justify-center gap-1 md:gap-2 border-l-2 border-white pl-4 md:pl-6 xl:pl-8"
            >
              <h4 className="text-[40px] md:text-[50px] lg:text-[65px] xl:text-[80px] font-bold font-roboto leading-tight">
                {stat.value}
              </h4>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-bold">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
