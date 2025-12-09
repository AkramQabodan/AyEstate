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
      <summary className="w-full h-[80px] px-6 flex items-center justify-between text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="text-[20px] font-bold text-text-blackish">
          {question}
        </span>
        <span className="text-[24px] font-light text-text-blackish shrink-0 ml-4">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <div className="px-[30px] pb-[28px] flex flex-col gap-6">
        <p className="text-[16px] text-text-nav text-left">{answer}</p>
        <Link
          href="/faq"
          className="text-[18px] font-bold text-text-blueish hover:underline text-left"
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
    <section className="w-full p-[100px] flex flex-col items-center text-black font-sora">
      <div className="w-full flex flex-col items-center max-w-[1312px] text-center">
        <h6 className="text-[18px] font-semibold mb-4 text-text-orangish">
          FAQ
        </h6>
        <span className="text-[44px] font-bold mb-[30px] text-text-blackish">
          Frequently Asked Questions
        </span>
        <span className="text-text-nav text-[18px] font-normal mb-[53px]">
          Did you find the question as you expected?
        </span>
        <div className="w-full flex justify-between gap-[20px]">
          <div className="flex flex-col gap-[20px] flex-1 max-w-[640px]">
            {leftColumn.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[20px] flex-1 max-w-[640px]">
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
          className="mt-[50px] flex items-center justify-center w-[190px] h-[56px] bg-btn-primary-bg text-text-dark font-sora text-[18px] font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Give a Quote
        </Link>
      </div>
    </section>
  );
}
