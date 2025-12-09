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
    <section className="w-full py-20 px-16 flex flex-col items-center bg-bg-dark-2 font-sora  text-white">
      <div className="w-full flex flex-col items-center max-w-[1312px]">
        <div className=" w-full flex justify-between mb-20">
          <div className="flex flex-col items-start max-w-[616px]">
            <span className="text-base font-semibold mb-4">Innovative</span>
            <h3 className="text-5xl font-bold">
              Transforming the Real Estate Industry with Excellence
            </h3>
          </div>
          <div className="flex flex-col items-start max-w-[616px]">
            <p className="text-[18px] font-normal mb-8">
              At our company, we take pride in our exceptional success rate,
              having listed thousands of properties, and ensuring client
              satisfaction is our top priority.
            </p>
            <Link
              href="/services"
              className=" flex items-center justify-center w-[160px] h-[56px] bg-btn-primary-bg text-text-dark font-sora text-base font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-between h-[140px]">
          {stats.map((stat) => (
            <div
              key={stat.description}
              className="flex flex-col items-start justify-center gap-2 border-l-2 border-white pl-8"
            >
              <h4 className="text-[80px] font-bold font-roboto">
                {stat.value}
              </h4>
              <p className="text-[20px] font-bold">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
