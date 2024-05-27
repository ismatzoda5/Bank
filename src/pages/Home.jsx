import React, { useEffect, useRef, useState } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import AOS

import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// imports of image in Assets
import img1 from "../assets/Screenshot_5.png";
import img2 from "../assets/Screenshot_6.png";
import img3 from "../assets/Screenshot_7.png";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.webp";
import img4 from "../assets/Screenshot_8.png";
import img from "../assets/img (2).png";
import deposit from "../assets/img (4).png";
import perevod from "../assets/img (5).png";
import rko from "../assets/img (6).png";
import perevodi from "../assets/perevodi.png";
import cards from "../assets/cards.svg";
import credit from "../assets/credit.png";
import kredit1 from "../assets/kredit1.png";
import kredit2 from "../assets/kredit2.png";
import kredit3 from "../assets/kredit3.png";
import baner1 from "../assets/baner1.png";
import baner2 from "../assets/baner2.png";
import baner3 from "../assets/baner3.png";
import baner4 from "../assets/baner4.png";
import video from "../assets/Digital-SANDUK-mobile.mp4";
import { Link } from "react-router-dom";

// Imports Translate
import { useTranslation } from "react-i18next";

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };  

  return (
    <>
      <div className=" ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              style={{ height: "70vh", objectFit: "cover" }}
              className="sx:h-[100vh] object-cover"
              src={img1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ height: "70vh", objectFit: "cover" }}
              className="sx:h-[100vh] object-cover"
              src={img2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ height: "70vh", objectFit: "cover" }}
              className="h-[50vh] sx:h-[100vh] object-cover"
              src={img3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "70vh" }}>
              <img className="" src={img4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="back-div-home dark:bg-gray-800 dark:text-[white] pt-[30px]">
        <div className="">
          <h1 className="text-center sx:font-[500] sx:text-[30px] l:text-[30px] l:w-[70%] sx:w-[70%] sx:m-[auto] font-[700] w-[70%]  m-auto text-[35px] pt-[2%] ">
            {t("home.h1")}
          </h1>
        </div>
        <div className="w-[90%] m-auto mt-[5%] pb-[5%]  flex justify-between sx:flex-wrap l:flex-wrap l:w-[100%]">
          <div className="zayavka-div w-[31.5%] dark:bg-gray-900 dark:border-[1px] cursor-pointer bg-slate-100 p-[25px] text-center rounded-[10px] sx:w-[80%] sx:m-[auto] sx:mt-[10px]">
            <img
              className="m-auto pt-[5%]"
              src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-01.svg"
              alt=""
            />
            <h1 className="text-[25px] font-[700] mt-[5%]">{t("home.h2")}</h1>
            <p className="mt-[5%] mb-[2%]  text-[#4c5267] text-[16px] dark:text-[white] font-[500] leading-6">
              {t("home.h3")}
            </p>
          </div>
          <div className="zayavka-div w-[31.5%] sx:w-[80%] sx:m-[auto] sx:mt-[10px] dark:bg-gray-900 dark:border-[1px] cursor-pointer bg-slate-100 p-[25px] text-center rounded-[10px]">
            <img
              className="m-auto pt-[5%]"
              src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-02.svg"
              alt=""
            />
            <h1 className="text-[25px] font-[700] mt-[5%]">{t("home.h4")}</h1>
            <p className="mt-[5%] mb-[5%] dark:text-[white] text-[#4c5267] text-[16px] font-[500] leading-6">
              {t("home.h5")}
            </p>
          </div>
          <div className="zayavka-div w-[31.5%] sx:w-[80%] sx:m-[auto] sx:mt-[10px] dark:bg-gray-900 dark:border-[1px] cursor-pointer bg-slate-100 p-[25px] text-center rounded-[10px]">
            <img
              className="m-auto pt-[5%]"
              src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-03.svg"
              alt=""
            />
            <h1 className="text-[25px] font-[700] mt-[5%]">{t("home.h6")}</h1>
            <p className="mt-[5%] mb-[5%] dark:text-[white] text-[#4c5267] text-[16px] font-[500] leading-6">
              {t("home.h7")}
            </p>
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[20px] pb-[20px] dark:bg-gray-800 dark:text-[white] sx:p-[10px]">
        <h1 className="text-[40px] text-center font-[600] sx:text-[30px]">
          {t("home.h8")}
        </h1>
      </div>
      <div className="dark:bg-gray-800 pt-[6%] pb-[6%] ">
        <div
          data-aos="fade-right"
          className="w-[90%] m-auto bg-slate-100 rounded-[20px] dark:bg-gray-900 dark:text-[white] "
        >
          <div className="w-[90%] m-auto flex justify-between items-center sx:flex-wrap">
            <div className="w-[45%] mt-[3%] sx:w-[100%] ph:w-[100%]">
              <h1 className="text-[40px] font-[700]">{t("home.h8a")}</h1>
              <p className="text-[20px] mt-[4%] font-[400]">{t("home.h9")}</p>
              <Link to={"denezhnieperevody"}>
                <button className="bg-[#6D788F] sx:w-[60%] ph:w-[60%] w-[45%] py-[17px] hover:line-through mt-[12%] rounded-[10px] text-[white] text-[20px] font-[700]">
                  {t("home.h10")} <ArrowRightAltIcon />
                </button>
              </Link>
            </div>
            <img
              className="w-[50%] h-[60vh] sx:h-[70vh] ph:h-[50vh] sx:w-[100%] ph:w-[100%] object-cover"
              src={perevodi}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[20px] pb-[20px] dark:bg-gray-800 dark:text-[white] sx:p-[10px]">
        <h1 className="text-[40px] text-center font-[600] sx:text-[30px]">
          {t("home.h11")}
        </h1>
      </div>
      <div className="dark:bg-gray-800 pt-[6%] pb-[6%]">
        <div
          data-aos="fade-down"
          className="w-[90%] m-auto bg-slate-100 rounded-[20px] dark:bg-gray-900 dark:text-[white]"
        >
          <div className="w-[90%] m-auto flex justify-between items-center sx:flex-wrap">
            <div className="w-[45%] mt-[1%] sx:w-[100%] sx:p-[20px]">
              <h1 className="text-[40px] font-[700]">{t("home.h12")}</h1>
              <p className="text-[20px] mt-[4%] font-[400]">{t("home.h13")}</p>
              <Link to={"bankovskiekarty"}>
                <button className="bg-[#6D788F] sx:w-[60%] ph:w-[60%] w-[45%] py-[17px] hover:line-through mt-[10%] rounded-[10px] text-[white] text-[20px] font-[700]">
                  {t("home.h14")} <ArrowRightAltIcon />
                </button>
              </Link>
            </div>
            <img
              className="w-[50%] h-[45vh] mb-[5%] mt-[5%] sx:w-[100%] sx:h-[50vh]"
              src={cards}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[20px] pb-[20px] sx:p-[10px] ph:p-[100%] dark:bg-gray-800 dark:text-[white]">
        <h1 className="text-[40px] text-center font-[600] sx:text-[30px]">
          {t("home.h15")}
        </h1>
      </div>
      <div className="dark:bg-gray-800 pt-[6%] pb-[6%]">
        <div
          data-aos="fade-down-right"
          className="w-[90%] m-auto   bg-slate-100 rounded-[20px] dark:bg-gray-900 dark:text-white"
        >
          <div className="w-[90%] m-auto flex justify-between items-center sx:flex-wrap">
            <div className="w-[45%] mt-[3%] sx:w-[100%] ph:w-[100%]">
              <h1 className="text-[40px] font-[700]">{t("home.h16")}</h1>
              <p className="text-[20px] mt-[2%] font-[400]">{t("home.h17")}</p>
              <Link to={"credits"}>
                <button className="bg-[#6D788F] w-[45%] sx:w-[60%] py-[17px] hover:line-through mt-[10%] rounded-[10px] text-[white] text-[20px] font-[700] ">
                  {t("home.h18")} <ArrowRightAltIcon />
                </button>
              </Link>
            </div>
            <img
              className="w-[40%] h-[50vh] mt-[2%] mb-[3%] sx:w-[100%] object-cover"
              src={credit}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 pt-[5%] pb-[5%] dark:text-white">
        <h1 className="text-center font-[700]  text-[35px]">{t("home.h19")}</h1>
        <div className="w-[90%] m-auto flex gap-10 text-center mt-[5%] sx:flex-wrap ph:flex-wrap">
          <div
            data-aos="flip-left"
            class="biznes-div bg-gray-200 p-6  my-2 rounded-[10px] dark:bg-gray-900 dark:text-[white]"
          >
            <img className="rounded-[10px]" src={kredit1} alt="" />
            <h2 class="text-xl font-bold mb-5 mt-5">{t("home.h20")}</h2>
            <p class="text-gray-700 dark:text-white">{t("home.h21")}</p>
            <Link>
              <button className="hover:text-[white] mt-[5%] font-[500]">
                {t("home.h22")}
                <ArrowRightAltIcon />
              </button>
            </Link>
          </div>

          <div
            data-aos="flip-up"
            class="biznes-div bg-gray-200 p-6 my-2 rounded-[10px] dark:bg-gray-900 dark:text-[white]"
          >
            <img className="rounded-[10px]" src={kredit2} alt="" />
            <h2 class="text-xl font-bold mb-5 mt-5">{t("home.h23")}</h2>
            <p class="text-gray-700 dark:text-white">{t("home.h24")}</p>
            <Link>
              <button className="hover:text-[white] mt-[5%] font-[500]">
                {t("home.h25")} <ArrowRightAltIcon />
              </button>
            </Link>
          </div>

          <div
            data-aos="flip-right"
            class="biznes-div bg-gray-200 p-6 my-2 rounded-[10px]  dark:bg-gray-900 dark:text-[white]"
          >
            <img className="rounded-[10px]" src={kredit3} alt="" />
            <h2 class="text-xl font-bold mb-5 mt-5">{t("home.h26")}</h2>
            <p class="text-gray-700 dark:text-[white]">{t("home.h27")}</p>
            <Link>
              <button className="hover:text-[white] mt-[5%] font-[500]">
                {t("home.h28")}
                <ArrowRightAltIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-[5%] pb-[5%]  rounded-[50px] dark:rounded-none dark:bg-gray-800">
        <div className="w-[90%] m-auto flex justify-between sx:flex-wrap ph:flex-wrap">
          <div className="bg-gray-100 dark:bg-gray-900 dark:text-white w-[55%] rounded-[10px] text-center sx:w-[100%] ph:w-[100%]">
            <h1 className="text-[25px]  mt-[3%] font-[600]">{t("home.h29")}</h1>
            <div className="w-[85%] rounded-[5px] mt-[3.5%] dark:bg-gray-800 p-[5px] m-auto bg-white flex justify-around items-center ">
              <img
                className="w-[15%] h-[7vh]"
                src="https://m-files.cdnvideo.ru/lpfile/c/b/c/cbcfbaa3740dc2e60a93831329d4190d.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">USD</p>
              <p className="text-[20px] font-[500]">10.92</p>
            </div>
            <div className="w-[85%] rounded-[5px] mt-[3.5%] dark:bg-gray-800 p-[5px] m-auto bg-white flex justify-around items-center">
              <img
                className="w-[15%] h-[7vh]"
                src="https://cdn1.ozone.ru/s3/multimedia-g/6249267508.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">RUB</p>
              <p className="text-[20px] font-[500]">0.119</p>
            </div>
            <div className="w-[85%] rounded-[5px] mt-[3.5%] dark:bg-gray-800 p-[5px] m-auto bg-white flex justify-around items-center">
              <img
                className="w-[15%] h-[7vh]"
                src="https://get.pxhere.com/photo/star-europe-flag-blue-yellow-eu-flag-europe-flag-astronomical-object-flags-and-pennants-euro-flag-flag-of-the-united-states-banner-to-fix-1030903.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">EUR</p>
              <p className="text-[20px] font-[500]">11.72</p>
            </div>
            <div className="w-[85%] rounded-[5px] mt-[3.5%] p-[5px] dark:bg-gray-800 m-auto bg-white flex justify-around items-center mb-[5%]">
              <img
                className="w-[15%] h-[7vh]"
                src="https://img3.akspic.ru/attachments/crops/5/3/8/9/3/139835/139835-simvol-flag-turciya-krasnyj_cvet-tkan-1920x1080.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">TRY</p>
              <p className="text-[20px] font-[500]">2,97</p>
            </div>
          </div>
          <div className="w-[40%] bg-gray-100 p-[20px] rounded-[10px] dark:bg-gray-900 dark:text-[white] sx:w-[100%] sx:mt-[20px] ph:mt-[20px] ph:w-[100%]">
            <div className="flex justify-between px-[5%] items-center dark:text-[white]">
              <h1 className="text-[30px] font-[600]"> {t("home.h30")}</h1>
              <h1 className="text-[20px] font-[500]"> {t("home.h31")}</h1>
            </div>
            <div className="w-[90%] bg-white dark:bg-gray-800 rounded-[5px] mt-[5%] p-[10px] m-auto flex gap-5 items-center">
              <img className="w-[20%] rounded-[10px]" src={news1} alt="" />
              <h1 className="text-[14px] font-[600]">{t("home.h32")}</h1>
            </div>
            <div className="w-[90%] bg-white dark:bg-gray-800 rounded-[5px] mt-[5%] p-[10px] m-auto flex gap-5 items-center">
              <img className="w-[20%] rounded-[10px]" src={news2} alt="" />
              <h1 className="text-[14px] font-[600]">{t("home.h33")}</h1>
            </div>
            <div className="w-[90%] bg-white dark:bg-gray-800 rounded-[5px] mt-[5%] p-[10px] m-auto flex gap-5 items-center">
              <img className="w-[20%] rounded-[10px]" src={news3} alt="" />
              <h1 className="text-[14px] font-[600]">{t("home.h34")}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[5%] pb-[5%] dark:bg-gray-800">
        <div className="w-[90%] m-auto flex justify-between mt-[5%] sx:flex-wrap ph:flex-wrap">
          <div className="w-[48%]  rounded-md sx:w-[100%] ph:w-[100%]">
            <div>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="rounded-[10px]" src={baner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="rounded-[10px] " src={baner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="rounded-[10px]" src={baner3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="rounded-[10px]" src={baner4} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-[48%] sx:w-[100%] ph:w-[100%]">
            <div className="">
              <video className="rounded-[10px]" controls src={video}></video>
            </div>
            <div className="flex justify-between mt-[7%]">
              <img
                className="w-[33%] h-[14vh] mt-[0.5%] rounded-[10px]"
                src="https://psm7.com/wp-content/uploads/2015/09/western-union-tranfer-rate.jpg"
                alt=""
              />

              <img
                className="w-[33%] h-[14vh] mt-[0.5%] rounded-[10px]"
                src="https://kredit-on.ru/wp-content/uploads/0/2/f/02f25ff717653ee5fffdc8512030dd53.jpeg"
                alt=""
              />
              <img
                className="w-[33%] h-[15vh]"
                src="https://www.demirbank.kg/assets/c207871/img/logos/unistream.png"
                alt=""
              />
            </div>
            <div className="mt-[8%]">
              <iframe
                width="100%"
                className="rounded-[10px] mt-[2.5%] sx:w-[100%] ph:w-[100%]"
                height="327"
                src="https://www.youtube.com/embed/hkTO4BUfMKk"
                title="Фармони Президенти ҶТ дар бораи тадбирҳои вусъат додани ҳисоббаробаркунии ғайринақдӣ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;