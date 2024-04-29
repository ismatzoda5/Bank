import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Icons

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


// imports of image in Assets 
import img1 from "../assets/Screenshot_5.png"
import img2 from "../assets/Screenshot_6.png"
import img3 from "../assets/Screenshot_7.png"
import img4 from "../assets/Screenshot_8.png"
import img from "../assets/img (2).png"
import deposit from "../assets/img (4).png"
import perevod from "../assets/img (5).png"
import rko from "../assets/img (6).png"
import perevodi from "../assets/perevodi.png"
import cards from "../assets/cards.svg"
import credit from "../assets/credit.png"
import kredit1 from "../assets/kredit1.png"
import kredit2 from "../assets/kredit2.png"
import kredit3 from "../assets/kredit3.png"

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
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        
      </Swiper>
</div>
<div className="">
  <div className="">
    <h1 className='text-center font-[700] text-[35px] font-serif mt-[2%]'>Актуально сейчас</h1>
  </div>
  <div className="w-[90%] m-auto mt-[5%]  flex justify-between">
    <div className="w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[25px] text-center font-serif font-[600]'>Кредиты</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>6 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      <img className='w-[70%] m-auto h-[27vh]' src={img} alt="" />
      </div>
      <div className="py-[2%]">
        <h1  className='font-[500] px-[15px] py-[7px] rounded-[5px] w-[70%] m-auto text-[16px] text-center border-[2px] my-[3%]'>Узнать больше !</h1>
      </div>
    </div>
    <div className="w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[25px] text-center font-serif font-[600]'>Депозиты</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>5 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      <img className='w-[70%] m-auto h-[27vh]' src={deposit} alt="" />
      </div>
      <div className="py-[2%]">
        <h1  className='font-[500] px-[15px] py-[7px] rounded-[5px] w-[70%] m-auto text-[16px] text-center border-[2px] my-[3%]'>Узнать больше !</h1>
      </div>
    </div>
    <div className="w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[23px] text-center font-serif font-[600]'>переводы</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>6 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      <img className='w-[70%] m-auto h-[27vh]' src={perevod} alt="" />
      </div>
      <div className="py-[2%]">
        <h1  className='font-[500] px-[15px] py-[7px] rounded-[5px] w-[70%] m-auto text-[16px] text-center border-[2px] my-[3%]'>Узнать больше !</h1>
      </div>
    </div>
    <div className="w-[22%] border-[#fcd450] border-[1px] rounded-[5px]">
      
      <h1 className='text-[25px] text-center font-serif font-[600]'>РКО</h1>
      <p className='font-[500] text-[16px] text-center pb-[2%]'>6 продукты</p>
      
      <div className="w-[100%] bg-[#fcd450]">
      <img className='w-[70%] m-auto h-[27vh]' src={rko} alt="" />
      </div>
      <div className="py-[2%]">
        <h1  className='font-[500] px-[15px] py-[7px] rounded-[5px] w-[70%] m-auto text-[16px] text-center border-[2px] my-[3%]'>Узнать больше !</h1>
      </div>
    </div>
  </div>
</div>  



<div className="w-[90%] m-auto mt-[8%]  bg-slate-100 rounded-[20px] ">
<div className="w-[90%] m-auto flex justify-between">
<div className="w-[45%] mt-[3%]">
   <h1 className='text-[30px] font-[700]'>Денежные переводы</h1>
   <p className='text-[20px] mt-[4%] font-[400]'>Переводы по всему миру</p>
   <button className='bg-[#6D788F] w-[45%] py-[17px] mt-[32%] rounded-[10px] text-[white] text-[20px] font-[700]'>Подробнее <ArrowRightAltIcon/></button>
</div>
<img className='w-[50%] h-[60vh]' src={perevodi} alt="" />
</div>
</div>

<div className="w-[90%] m-auto mt-[8%]  bg-slate-100 rounded-[20px] ">
<div className="w-[90%] m-auto flex justify-between ">
<div className="w-[45%] mt-[3%]">
   <h1 className='text-[30px] font-[700]'>Платежные карты</h1>
   <p className='text-[20px] mt-[4%] font-[400]'>Бесплатное обслуживание</p>
   <button className='bg-[#6D788F] w-[45%] py-[17px] mt-[26%] rounded-[10px] text-[white] text-[20px] font-[700]'>Подробнее <ArrowRightAltIcon/></button>
</div>
<img className='w-[50%] h-[45vh] mb-[5%] mt-[5%]' src={cards} alt="" />
</div>
</div>

<div className="w-[90%] m-auto mt-[8%]  bg-slate-100 rounded-[20px] ">
<div className="w-[90%] m-auto flex justify-between items-center">
<div className="w-[45%] mt-[3%]">
   <h1 className='text-[30px] font-[700]'>Бизнес кредит</h1>
   <p className='text-[20px] mt-[4%] font-[400]'>Качественное и быстрое обслуживание</p>
   <button className='bg-[#6D788F] w-[45%] py-[17px] mt-[25%] rounded-[10px] text-[white] text-[20px] font-[700]'>Подробнее <ArrowRightAltIcon/></button>
</div>
<img className='w-[40%] h-[50vh] mt-[2%] mb-[3%] ' src={credit} alt="" />
</div>
</div>

<div className="">
<h1 className='text-center font-[700]  text-[35px] font-serif mt-[5%]'>Топ продукты</h1>
   <div className="w-[90%] m-auto flex gap-10 text-center mt-[5%]">
   <div class="bg-gray-200 p-6  my-2 rounded-[10px]">
    <img className='rounded-[10px]' src={kredit1} alt="" />
    <h2 class="text-xl font-bold mb-5 mt-5">Потребительский кредит</h2>
    <p class="text-gray-700">
        Данный вид кредита позволяет приобрести предметы домашнего обихода.
    </p>
    <button className='mt-[5%] font-[500]'>Подробности <ArrowRightAltIcon/></button>
</div>

<div class="bg-gray-200 p-6 my-2 rounded-[10px]">
  <img className='rounded-[10px]' src={kredit2} alt="" />
    <h2 class="text-xl font-bold mb-5 mt-5">Бизнес кредит</h2>
    <p class="text-gray-700">
        Развитие и расширение бизнеса предполагает регулярное инвестирование.
    </p>
    <button className='mt-[5%] font-[500]'>Подробности  <ArrowRightAltIcon/></button>
</div>

<div class="bg-gray-200 p-6 my-2 rounded-[10px]">
  <img className='rounded-[10px]' src={kredit3} alt="" />
    <h2 class="text-xl font-bold mb-5 mt-5">Кредит Бозтамвил</h2>
    <p class="text-gray-700">
        Поддержка тех людей, кто занимается народным ремеслом.
    </p>
    <button className='mt-[5%] font-[500]'>Подробности <ArrowRightAltIcon/> </button>
</div>
   </div>
</div>

<div className="w-[90%] m-auto flex justify-between mt-[5%]">
<div className="bg-[#fcd450] w-[55%] rounded-[10px] text-center">
  <h1 className='text-[25px] text-[white] mt-[3%] font-[600] font-serif'>Курс валюты НБТ на 30/04/24</h1>
  <div className="w-[85%] rounded-[5px] mt-[2%] p-[5px] m-auto bg-white flex justify-around items-center">
    <img className='w-[15%] h-[7vh]' src="https://m-files.cdnvideo.ru/lpfile/c/b/c/cbcfbaa3740dc2e60a93831329d4190d.jpg" alt="" />
<p className='text-[20px] font-[500]'>USD</p>
<p className='text-[20px] font-[500]'>10.92</p>
</div>
  <div className="w-[85%] rounded-[5px] mt-[2%] p-[5px] m-auto bg-white flex justify-around items-center">
    <img className='w-[15%] h-[7vh]' src="https://cdn1.ozone.ru/s3/multimedia-g/6249267508.jpg" alt="" />
<p className='text-[20px] font-[500]'>RUB</p>
<p className='text-[20px] font-[500]'>0.119</p>
</div>
  <div className="w-[85%] rounded-[5px] mt-[2%] p-[5px] m-auto bg-white flex justify-around items-center">
    <img className='w-[15%] h-[7vh]' src="https://get.pxhere.com/photo/star-europe-flag-blue-yellow-eu-flag-europe-flag-astronomical-object-flags-and-pennants-euro-flag-flag-of-the-united-states-banner-to-fix-1030903.jpg" alt="" />
<p className='text-[20px] font-[500]'>EUR</p>
<p className='text-[20px] font-[500]'>11.72</p>
</div>
  <div className="w-[85%] rounded-[5px] mt-[2%] p-[5px] m-auto bg-white flex justify-around items-center">
    <img className='w-[15%] h-[7vh]' src="https://img3.akspic.ru/attachments/crops/5/3/8/9/3/139835/139835-simvol-flag-turciya-krasnyj_cvet-tkan-1920x1080.jpg" alt="" />
<p className='text-[20px] font-[500]'>TRY</p>
<p className='text-[20px] font-[500]'>2,97</p>
</div>
</div>
<div className="w-[40%] bg-[#fcd450] rounded-[10px]">
  <div className="flex justify-between px-[5%] items-center">
    <h1 className='text-[30px] font-[600]'>Новости</h1>
    <h1 className='text-[20px] font-[500]'>Все Новости</h1>
  </div>
</div>
</div>
    </>
  )
}

export default Home