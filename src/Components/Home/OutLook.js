import React from "react";
import TitleAndSub from "../TitleAndSub";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "flowbite-react";

function OutLook() {
  const rules = [
    {
      id: "rule1",
      image: "./banner1.jpg",
      title: "Customs Procedures",
      description:
        "All import and export goods must be accurately and fully declared to customs authorities.",
      date: "May 6, 2024",
    },
    {
      id: "rule2",
      image: "./banner2.jpg",
      title: "Port Security",
      description:
        "Only authorized personnel are allowed to enter the port area. The port must have strict surveillance and security systems to protect goods and facilities.",
      date: "May 6, 2024",
    },
    {
      id: "rule3",
      image: "./banner3.jpg",
      title: "Transportation and Storage",
      description:
        "Goods must be transported safely and properly to avoid damage or loss. Proper storage conditions must be maintained for different types of goods.",
      date: "May 6, 2024",
    },
    {
      id: "rule4",
      image: "./banner4.jpg",
      title: "Labor Safety",
      description:
        "Employees working at the port must be equipped with protective gear and follow safety regulations. Training on safety procedures is mandatory.",
      date: "May 6, 2024",
    },
    {
      id: "rule5",
      image: "./banner1.jpg",
      title: "Environmental Regulations",
      description:
        "Proper waste disposal procedures must be followed to protect the environment. Activities at the port must minimize air, water, and soil pollution.",
      date: "May 6, 2024",
    },
    {
      id: "rule6",
      image: "./banner2.jpg",
      title: "Document Management",
      description:
        "All documents related to import and export must be accurately and completely maintained. Valid documents such as invoices, packing lists, and certificates of origin must accompany the goods.",
      date: "May 6, 2024",
    },
    {
      id: "rule7",
      image: "./banner3.jpg",
      title: "Payment and Taxes",
      description:
        "All taxes and fees related to import and export must be paid in full and on time. International payments must comply with port and relevant banking regulations.",
      date: "May 6, 2024",
    },
    {
      id: "rule8",
      image: "./banner4.jpg",
      title: "Anti-Smuggling and Trade Fraud",
      description:
        "Measures must be taken to prevent smuggling and trade fraud. Employees must promptly report any suspicious activities related to smuggling or trade fraud.",
      date: "May 6, 2024",
    },
  ];

  return (
    <div className="py-6 flex flex-col gap-6">
      <TitleAndSub
        sub={"News & Lookout"}
        title={"OutLook and News: only one click away!"}
      />
      <Swiper
        autoplay={true}
        speed={1000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="w-[1140px]"
      >
        {rules.map((rule, index) => (
          <SwiperSlide key={index} id="2">
            <div className="relative group">
              <div className="h-[450px] bg-gray rounded-sm overflow-hidden">
                <Link
                  to={`/rules/${rule.id}`}
                  className="p-2 h-48 flex flex-col gap-4 hover:underline"
                >
                  <p className="flex font-light text-sm justify-end mr-4">
                    {rule.date}
                  </p>
                  <p className="font-semibold text-xl truncated line-clamp-2 text-main">
                    {rule.title}
                  </p>
                  <p className="text-xs line-clamp-4 truncated">
                    {rule.description}
                  </p>
                </Link>
                <img
                  src={rule.image}
                  alt={rule.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col gap-4 mx-12">
        <p className="font-semibold text-xl">
          Subscribe to receive the latest about us
        </p>
        <p className="font-light">
          Do you love shipping as much as we do? Whether it‘s exciting stories
          about our employees on land or at sea, features of our customers from
          around the world, or the latest information about our services – with
          our Lookout newsletter and CustomerNEWS, we always keep you up to date
          on the latest news. Plus, we would be delighted to offer journalists a
          subscription to receive our press releases – automatically and, of
          course, free of charge.
        </p>
        <Link
          className="w-fit text-white hover:underline px-4 py-2 bg-subMain rounded-md"
          to={"/rule"}
        >
          Choose Subscription(s)
        </Link>
      </div>
    </div>
  );
}

export default OutLook;
