import Link from "next/link";

const footerLinks = [
  {
    title: "Pages",
    hrefs: [
      { label: "Listings", href: "/listings" },
      { label: "About us", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    hrefs: [
      { label: "Properties", href: "/properties" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    hrefs: [
      { label: "Style Guide", href: "/style-guide" },
      { label: "Changelog", href: "/changelog" },
      { label: "Licensing", href: "/licensing" },
      { label: "Instructions", href: "/instructions" },
    ],
  },
  {
    title: "Download",
    hrefs: [
      { label: "Official Website", href: "/" },
      { label: "Play Store", href: "https://play.google.com" },
      { label: "App Store", href: "https://apps.apple.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full pt-10 md:pt-14 lg:pt-16 xl:pt-[100px] px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center text-white bg-bg-dark-2 font-sora relative overflow-hidden">
      <div className="w-full flex flex-col items-center max-w-[1312px]">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-6 lg:gap-8 mb-6 md:mb-0">
          <div className="flex flex-col gap-3 md:gap-4 md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]">
            <Link
              href="/"
              className="font-playball text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] font-normal text-white"
            >
              AyEstate
            </Link>
            <p className="text-text-nav text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-medium mb-3 md:mb-4 lg:mb-5 xl:mb-6 font-jakarta">
              hello.ayestate@example.com
              <br />
              (+1) 2345 6789
            </p>
            <p className="text-text-nav text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-medium font-jakarta">
              4140 Parker Rd. Allentown,
              <br />
              New Mexico 31134
            </p>
          </div>

          <div className="w-full md:flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-3 lg:gap-5 xl:gap-6">
            {footerLinks.map((link) => (
              <div className="flex flex-col" key={link.title}>
                <span className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white mb-3 md:mb-4 lg:mb-6 xl:mb-8 font-jakarta">
                  {link.title}
                </span>
                <nav className="flex flex-col gap-2 md:gap-2 lg:gap-3 text-[12px] md:text-[13px] lg:text-[15px] xl:text-[18px] font-medium text-text-nav font-jakarta">
                  {link.hrefs.map((href) => (
                    <Link
                      href={href.href}
                      key={href.label}
                      className="hover:text-white transition-colors"
                    >
                      {href.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px] items-center justify-center text-text-whitish text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal mt-6 md:mt-8 border-t border-gray-800">
          Copyright © AyEstate | Designed by AY Studio
        </div>
      </div>
    </footer>
  );
}
