import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    image: "/images/properties_1.png",
    title: "Luxury Villa",
    location: "Oceanfront",
    price: "$1,000,000",
    id: 1,
  },
  {
    image: "/images/properties_2.png",
    title: "Modern Apartment",
    location: "City Center",
    price: "$500,000",
    id: 2,
  },
  {
    image: "/images/properties_3.png",
    title: "Cozy Cottage",
    location: "Mountain View",
    price: "$300,000",
    id: 3,
  },
  {
    image: "/images/properties_4.png",
    title: "Spacious Condo",
    location: "Beachfront",
    price: "$700,000",
    id: 4,
  },
  {
    image: "/images/properties_5.png",
    title: "Luxury Penthouse",
    location: "Downtown",
    price: "$1,500,000",
    id: 5,
  },
  {
    image: "/images/properties_6.png",
    title: "Lakefront Retreat",
    location: "Lake View",
    price: "$800,000",
    id: 6,
  },
  {
    image: "/images/properties_7.png",
    title: "Charming Bungalow",
    location: "Garden View",
    price: "$400,000",
    id: 7,
  },
  {
    image: "/images/properties_8.png",
    title: "Luxury Villa",
    location: "Ocean View",
    price: "$1,000,000",
    id: 8,
  },
];
export default function Properties() {
  return (
    <section className="w-full py-10 md:py-14 xl:py-20 px-4 md:px-8 lg:px-12 xl:px-16 pb-16 md:pb-24 lg:pb-32 xl:pb-[191.4px] flex flex-col items-center text-black font-sora">
      <div className="w-full flex flex-col items-center max-w-[1312px] text-center">
        <span className="text-sm md:text-base font-semibold mb-2 md:mb-3 xl:mb-4">
          Find
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-5 xl:mb-6">
          Properties
        </h3>
        <p className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-normal mb-10 md:mb-14 xl:mb-20">
          Explore our curated list of properties and find your dream home.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-8 md:gap-y-12 xl:gap-y-16 justify-items-center">
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex flex-col items-center w-full max-w-[280px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[304px]"
            >
              <Image
                src={property.image}
                alt={property.title}
                width={304}
                height={365}
                className="mb-3 md:mb-4 w-full"
                style={{ height: "auto" }}
              />
              <h4 className="text-[16px] md:text-[18px] xl:text-[20px] font-bold">
                {property.title}
              </h4>
              <p className="text-[14px] md:text-[15px] xl:text-[16px] font-normal mb-1 md:mb-2">
                {property.location}
              </p>
              <p className="text-[14px] md:text-[15px] xl:text-[16px] font-normal mb-3 md:mb-4">
                {property.price}
              </p>
              <Link
                href={`/properties/${property.id}`}
                className="text-[14px] md:text-[15px] xl:text-[16px] font-normal w-full h-9 md:h-10 border rounded-[12px] flex items-center justify-center font-roboto"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
