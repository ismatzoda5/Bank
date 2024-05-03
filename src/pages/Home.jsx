import React, { useRef, useState } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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

const Home = () => {
  return (
    <>
      <div className="">
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
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="dark:bg-gray-800 dark:text-[white]  ">
        <div className="">
          <h1 className="text-center font-[700] w-[30%] m-auto text-[35px] pt-[2%] ">
            3 шага, которые нужно выполнить
          </h1>
        </div>
        <div className="w-[90%] m-auto mt-[5%] pb-[5%]  flex justify-between">
          <div className="zayavka-div w-[31.5%] dark:bg-gray-900 dark:border-[1px] cursor-pointer bg-slate-100 p-[25px] text-center rounded-[10px]">
            <img
              className="m-auto pt-[5%]"
              src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-01.svg"
              alt=""
            />
            <h1 className="text-[25px] font-[700] mt-[5%]">
              Подать заявку на кредит
            </h1>
            <p className="mt-[5%] mb-[2%]  text-[#4c5267] text-[16px] dark:text-[white] font-[500] leading-6">
              Мы работаем по международным принципам защиты клиентов Мы
              предлагаем следующие виды кредитов
            </p>
          </div>
          <div className="zayavka-div w-[31.5%] dark:bg-gray-900 dark:border-[1px] cursor-pointer bg-slate-100 p-[25px] text-center rounded-[10px]">
            <img
              className="m-auto pt-[5%]"
              src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-02.svg"
              alt=""
            />
            <h1 className="text-[25px] font-[700] mt-[5%]">
              Получить одобрение
            </h1>
            <p className="mt-[5%] mb-[5%] dark:text-[white] text-[#4c5267] text-[16px] font-[500] leading-6">
              У нас нет комиссий скрытых платежей У нас нет штрафов за досрочное
              погашение кредита
            </p>
          </div>
          <div className="zayavka-div w-[31.5%] dark:bg-gray-900 dark:border-[1px] cursor-pointer bg-slate-100 p-[25px] text-center rounded-[10px]">
            <img
              className="m-auto pt-[5%]"
              src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-03.svg"
              alt=""
            />
            <h1 className="text-[25px] font-[700] mt-[5%]">
              Получите свои деньги
            </h1>
            <p className="mt-[5%] mb-[5%] dark:text-[white] text-[#4c5267] text-[16px] font-[500] leading-6">
              Качественное и быстрое обслуживание Простые и понятные условия
              кредитования
            </p>
          </div>
        </div>
        {/* <div className="w-[90%] m-auto mt-[5%]  flex justify-between">
    <div className="box1 w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[25px] text-center font-serif font-[600]'>Кредиты</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>6 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      
      </div>
      <div className="py-[2%]">
        <h1  className='font-[600] px-[15px] py-[7px] rounded-[20px] font-mono w-[70%] m-auto text-[16px] text-center border-[1px] border-[#fcd450] my-[3%] hover:bg-[#fcd450] hover:text-[white] hover:line-through'>Узнать больше !</h1>
      </div>
    </div>
    <div className="w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[25px] text-center font-serif font-[600]'>Депозиты</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>5 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      <img className='w-[70%] m-auto h-[27vh]' src={deposit} alt="" />
      </div>
      <div className="py-[2%]">
        <h1  className='font-[500] px-[15px] py-[7px] rounded-[20px] font w-[70%] m-auto text-[16px] text-center border-[1px] border-[#fcd450] my-[3%]'>Узнать больше !</h1>
      </div>
    </div>
    <div className="w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[23px] text-center font-serif font-[600]'>переводы</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>6 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      <img className='w-[70%] m-auto h-[27vh]' src={perevod} alt="" />
      </div>
      <div className="py-[2%]">
        <h1  className='font-[500] px-[15px] py-[7px] rounded-[20px] font w-[70%] m-auto text-[16px] text-center border-[1px] border-[#fcd450] my-[3%]'>Узнать больше !</h1>
      </div>
    </div>
    <div className="w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[25px] text-center font-serif font-[600]'>РКО</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>6 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      <img className='w-[70%] m-auto h-[27vh]' src={rko} alt="" />
      </div>
      <div className="py-[2%]">
        <h1  className='font-[500] px-[15px] py-[7px] rounded-[20px] font w-[70%] m-auto text-[16px] text-center border-[1px] border-[#fcd450] my-[3%]'>Узнать больше !</h1>
      </div>
    </div>
  </div> */}
      </div>

      <div className="dark:bg-gray-800 pt-[8%] pb-[8%]">
        <div className="w-[90%] m-auto bg-slate-100 rounded-[20px] dark:bg-gray-900 dark:text-[white]">
          <div className="w-[90%] m-auto flex justify-between items-center">
            <div className="w-[45%] mt-[3%]">
              <h1 className="text-[40px] font-[700]">Денежные переводы</h1>
              <p className="text-[20px] mt-[4%] font-[400]">
                Переводы по всему миру
              </p>
              <button className="bg-[#6D788F] w-[45%] py-[17px] hover:line-through mt-[12%] rounded-[10px] text-[white] text-[20px] font-[700]">
                Подробнее <ArrowRightAltIcon />
              </button>
            </div>
            <img className="w-[50%] h-[60vh]" src={perevodi} alt="" />
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 pt-[8%] pb-[8%]">
        <div className="w-[90%] m-auto bg-slate-100 rounded-[20px] dark:bg-gray-900 dark:text-[white]">
          <div className="w-[90%] m-auto flex justify-between items-center">
            <div className="w-[45%] mt-[1%]">
              <h1 className="text-[40px] font-[700]">Платежные карты</h1>
              <p className="text-[20px] mt-[4%] font-[400]">
                Бесплатное обслуживание
              </p>
              <button className="bg-[#6D788F] w-[45%] py-[17px] hover:line-through mt-[10%] rounded-[10px] text-[white] text-[20px] font-[700]">
                Подробнее <ArrowRightAltIcon />
              </button>
            </div>
            <img
              className="w-[50%] h-[45vh] mb-[5%] mt-[5%]"
              src={cards}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 pt-[8%] pb-[8%]">
        <div className="w-[90%] m-auto   bg-slate-100 rounded-[20px] dark:bg-gray-900 dark:text-white">
          <div className="w-[90%] m-auto flex justify-between items-center ">
            <div className="w-[45%] mt-[3%]">
              <h1 className="text-[40px] font-[700]">Бизнес кредит</h1>
              <p className="text-[20px] mt-[2%] font-[400]">
                Качественное и быстрое обслуживание
              </p>
              <button className="bg-[#6D788F] w-[45%] py-[17px] hover:line-through mt-[10%] rounded-[10px] text-[white] text-[20px] font-[700] ">
                Подробнее <ArrowRightAltIcon />
              </button>
            </div>
            <img
              className="w-[40%] h-[50vh] mt-[2%] mb-[3%] "
              src={credit}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 pt-[5%] pb-[5%] dark:text-white">
        <h1 className="text-center font-[700]  text-[35px] font-serif  ">
          Топ продукты
        </h1>
        <div className="w-[90%] m-auto flex gap-10 text-center mt-[5%]">
          <div class="biznes-div bg-gray-200 p-6  my-2 rounded-[10px] dark:bg-gray-900 dark:text-[white]">
            <img className="rounded-[10px]" src={kredit1} alt="" />
            <h2 class="text-xl font-bold mb-5 mt-5">Потребительский кредит</h2>
            <p class="text-gray-700 dark:text-white">
              Данный вид кредита позволяет приобрести предметы домашнего
              обихода.
            </p>
            <button className="hover:text-[white] mt-[5%] font-[500]">
              Подробности <ArrowRightAltIcon />
            </button>
          </div>

          <div class="biznes-div bg-gray-200 p-6 my-2 rounded-[10px] dark:bg-gray-900 dark:text-[white]">
            <img className="rounded-[10px]" src={kredit2} alt="" />
            <h2 class="text-xl font-bold mb-5 mt-5">Бизнес кредит</h2>
            <p class="text-gray-700 dark:text-white">
              Развитие и расширение бизнеса предполагает регулярное
              инвестирование.
            </p>
            <button className="hover:text-[white] mt-[5%] font-[500]">
              Подробности <ArrowRightAltIcon />
            </button>
          </div>

          <div class="biznes-div bg-gray-200 p-6 my-2 rounded-[10px]  dark:bg-gray-900 dark:text-[white]">
            <img className="rounded-[10px]" src={kredit3} alt="" />
            <h2 class="text-xl font-bold mb-5 mt-5">Кредит Бозтамвил</h2>
            <p class="text-gray-700 dark:text-[white]">
              Поддержка тех людей, кто занимается народным ремеслом.
            </p>
            <button className="hover:text-[white] mt-[5%]  font-[500] ">
              Подробности <ArrowRightAltIcon />{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-[5%] pb-[5%] dark:bg-gray-800">
        <div className="w-[90%] m-auto flex justify-between ">
          <div className="bg-[#fcd450] dark:bg-gray-900 dark:text-white w-[55%] rounded-[10px] text-center">
            <h1 className="text-[25px] text-[white] mt-[3%] font-[600] font-serif">
              Курс валюты НБТ на 30/04/24
            </h1>
            <div className="w-[85%] rounded-[5px] mt-[2%] dark:bg-gray-800 p-[5px] m-auto bg-white flex justify-around items-center ">
              <img
                className="w-[15%] h-[7vh]"
                src="https://m-files.cdnvideo.ru/lpfile/c/b/c/cbcfbaa3740dc2e60a93831329d4190d.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">USD</p>
              <p className="text-[20px] font-[500]">10.92</p>
            </div>
            <div className="w-[85%] rounded-[5px] mt-[2%] dark:bg-gray-800 p-[5px] m-auto bg-white flex justify-around items-center">
              <img
                className="w-[15%] h-[7vh]"
                src="https://cdn1.ozone.ru/s3/multimedia-g/6249267508.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">RUB</p>
              <p className="text-[20px] font-[500]">0.119</p>
            </div>
            <div className="w-[85%] rounded-[5px] mt-[2%] dark:bg-gray-800 p-[5px] m-auto bg-white flex justify-around items-center">
              <img
                className="w-[15%] h-[7vh]"
                src="https://get.pxhere.com/photo/star-europe-flag-blue-yellow-eu-flag-europe-flag-astronomical-object-flags-and-pennants-euro-flag-flag-of-the-united-states-banner-to-fix-1030903.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">EUR</p>
              <p className="text-[20px] font-[500]">11.72</p>
            </div>
            <div className="w-[85%] rounded-[5px] mt-[2%] p-[5px] dark:bg-gray-800 m-auto bg-white flex justify-around items-center mb-[5%]">
              <img
                className="w-[15%] h-[7vh]"
                src="https://img3.akspic.ru/attachments/crops/5/3/8/9/3/139835/139835-simvol-flag-turciya-krasnyj_cvet-tkan-1920x1080.jpg"
                alt=""
              />
              <p className="text-[20px] font-[500]">TRY</p>
              <p className="text-[20px] font-[500]">2,97</p>
            </div>
          </div>
          <div className="w-[40%] bg-[#fcd450] p-[20px] rounded-[10px] dark:bg-gray-900 dark:text-[white]">
            <div className="flex justify-between px-[5%] items-center">
              <h1 className="text-[30px] font-[600]">Новости</h1>
              <h1 className="text-[20px] font-[500]">Все Новости</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[5%] pb-[5%] dark:bg-gray-800">
        <div className="w-[90%] m-auto flex justify-between mt-[5%]">
          <div className="w-[48%]  rounded-md">
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
          <div className="w-[48%]">
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
                className="w-[33%] h-[15vh]"
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
                width="530"
                className="rounded-[10px] mt-[2.5%]"
                height="292"
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