import Link from "next/link";

const faqData = [
  {
    question: "How Many Steps To Get A Job?",
    answer:
      "Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.",
  },
  {
    question: "What Do We Need To Apply For A Job?",
    answer:
      "Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.",
  },
  {
    question: "Do We Get Cv From Jobify?",
    answer:
      "Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.",
  },
  {
    question: "Can We Reschedule The Interview Meeting?",
    answer:
      "Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.",
  },
  {
    question: "Can We Apply For All Jobs?",
    answer:
      "Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.",
  },
];

function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="w-full rounded-[12px] border border-border-light bg-bg-white overflow-hidden group"
      open={defaultOpen}
    >
      <summary className="w-full min-h-[60px] md:min-h-[70px] xl:h-[80px] px-4 md:px-5 xl:px-6 py-3 md:py-4 flex items-center justify-between text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="text-[16px] md:text-[18px] xl:text-[20px] font-bold text-text-blackish">
          {question}
        </span>
        <span className="text-[20px] md:text-[22px] xl:text-[24px] font-light text-text-blackish shrink-0 ml-3 md:ml-4">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <div className="px-4 md:px-6 xl:px-[30px] pb-4 md:pb-5 xl:pb-[28px] flex flex-col gap-4 md:gap-5 xl:gap-6">
        <p className="text-[14px] md:text-[15px] xl:text-[16px] text-text-nav text-left">
          {answer}
        </p>
        <Link
          href="/faq"
          className="text-[16px] md:text-[17px] xl:text-[18px] font-bold text-text-blueish hover:underline text-left"
        >
          Read More
        </Link>
      </div>
    </details>
  );
}

export default function FAQ() {
  const leftColumn = [faqData[0], faqData[1]];
  const rightColumn = [faqData[2], faqData[3], faqData[4]];

  return (
    <section className="w-full p-6 md:p-12 lg:p-16 xl:p-[100px] flex flex-col items-center text-black font-sora">
      <div className="w-full flex flex-col items-center max-w-[1312px] text-center">
        <h6 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold mb-2 md:mb-3 xl:mb-4 text-text-orangish">
          FAQ
        </h6>
        <span className="text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-bold mb-4 md:mb-5 lg:mb-6 xl:mb-[30px] text-text-blackish">
          Frequently Asked Questions
        </span>
        <span className="text-text-nav text-[14px] md:text-[16px] xl:text-[18px] font-normal mb-8 md:mb-10 lg:mb-12 xl:mb-[53px]">
          Did you find the question as you expected?
        </span>
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 md:gap-4 lg:gap-5 xl:gap-[20px]">
          <div className="flex flex-col gap-4 md:gap-4 lg:gap-5 xl:gap-[20px] flex-1 md:max-w-[350px] lg:max-w-[480px] xl:max-w-[640px]">
            {leftColumn.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-4 lg:gap-5 xl:gap-[20px] flex-1 md:max-w-[350px] lg:max-w-[480px] xl:max-w-[640px]">
            {rightColumn.map((item, idx) => (
              <FAQItem
                key={idx + 2}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
        <Link
          href="/services"
          className="mt-8 md:mt-10 lg:mt-12 xl:mt-[50px] flex items-center justify-center w-[160px] md:w-[175px] xl:w-[190px] h-[48px] md:h-[52px] xl:h-[56px] bg-btn-primary-bg text-text-dark font-sora text-[16px] md:text-[17px] xl:text-[18px] font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Give a Quote
        </Link>
      </div>
    </section>
  );
}
