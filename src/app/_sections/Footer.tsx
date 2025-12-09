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
    <footer className="w-full pt-[100px] px-[10px]  flex flex-col items-center text-white bg-bg-dark-2 font-sora relative overflow-hidden">
      <div className="w-full flex flex-col items-center max-w-[1312px]">
        <div className="w-full flex justify-between gap-8  ">
          <div className="flex flex-col gap-4 max-w-[280px]">
            <Link
              href="/"
              className="font-playball text-[32px] font-normal text-white"
            >
              AyEstate
            </Link>
            <p className="text-text-nav text-[18px] font-medium mb-6 font-jakarta">
              hello.ayestate@example.com
              <br />
              (+1) 2345 6789
            </p>
            <p className="text-text-nav text-[18px] font-medium font-jakarta">
              4140 Parker Rd. Allentown,
              <br />
              New Mexico 31134
            </p>
          </div>
          {footerLinks.map((link) => (
            <div className="flex flex-col" key={link.title}>
              <span className="text-[18px] font-semibold text-white mb-8 font-jakarta">
                {link.title}
              </span>
              <nav className="flex flex-col gap-3 text-[18px] font-medium text-text-nav font-jakarta">
                {link.hrefs.map((href) => (
                  <Link href={href.href} key={href.label}>
                    {href.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className=" w-full flex h-[90px] items-center justify-center text-text-whitish text-[18px] font-normal">
          Copyright © AyEstate | Designed by AY Studio
        </div>
      </div>
    </footer>
  );
}
