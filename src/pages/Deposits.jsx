import React from 'react'

import deposit from "../assets/deposit.webp";
import deposit1 from "../assets/deposit1.webp";
import deposit3 from "../assets/deposit3.png";
import deposit4 from "../assets/deposit4.png";
import deposit5 from "../assets/deposit5.png";
import deposit6 from "../assets/deposit6.png";
import deposit7 from "../assets/deposit7.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Imports Translate
import { useTranslation } from "react-i18next";

const Deposits = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }; 
  return (
    <>
      <div className="bg-slate-100 dark:bg-gray-800 dark:text-white ">
        <div className=" flex justify-between items-center pt-[40px] pb-[40px] pl-[100px] pr-[100px] sx:p-[10px] sx:flex-wrap l:p-[10px] l:flex-wrap xl:flex-wrap xl:p-[30px] xxl:p-[40px] xxl:flex-wrap cs:p-[20px] cx:p-[20px]">
          <div className="w-[55%] text-gray-800 sx:w-[100%] l:w-[100%] xl:w-[100%] xxl:w-[100%]">
            <h1 className="text-[50px] font-[600] sx:text-[30px] dark:text-[white]">
            {t("deposit.h1")}
            </h1>
            <p className="text-[18px] font-[500] mt-[3%] sx:text-[16px] dark:text-[white]">
            {t("deposit.h2")}
            </p>
            <button className="bg-gray-900 border-[2px] hover:text-gray-900 duration-500 hover:font-[600] hover:border-gray-900 hover:bg-transparent   dark:bg-gray-800 dark:text-[#fcd450] dark:border-[2px] dark:border-[#fcd450] text-[white] w-[30%] mb-[5%] rounded-[10px] mt-[4%] h-[8.5vh] sx:h-[10vh] sx:w-[50%] ph:w-[80%] cs:w-[50%] cx:w-[50%] text-[16px] font-[500]">
            {t("deposit.h3")}
            </button>
          </div>
          <div className="w-[50%] sx:w-[100%] l:w-[100%] xl:w-[100%] xxl:w-[100%]">
            <img className="w-[100%] h-[100%]" src={deposit1} alt="" />
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] dark:text-[white] dark:bg-gray-800  text-center text-gray-900 sx:p-[10px] l:p-[10px]">
        <h1 className="text-[45px] font-[600] sx:text-[30px] l:text-[35px] xl:text-[35px] xxl:p-[10px]">
        {t("deposit.h4")}
        </h1>
      </div>
      <div className=" flex justify-between p-[100px] sx:p-[10px] sx:flex-wrap ph:p-[10px] ph:flex-wrap dark:bg-gray-800 l:p-[10px] l:flex-wrap xl:flex-wrap xl:p-[50px] xxl:p-[50px] xxl:flex-wrap cs:p-[20px] cx:p-[30px]">
        <div className="div-deposit bg-slate-100 w-[30%] rounded-md sx:w-[70%] sx:m-[auto] ph:w-[70%] l:mt-[50px] ph:m-[auto] l:w-[70%] l:m-[auto] sx:mt-[40px] xl:w-[70%] xl:m-[auto] xl:mt-[40px] xxl:w-[50%] xxl:m-[auto] xxl:mt-[40px] dark:text-[white] dark:bg-gray-900">
          <h1 className="w-[15%] h-[8vh] rounded-[10px] font-serif  text-center pt-[7px] bg-slate-400 text-[white] dark:text-[white] text-[30px] font-[800] ml-[41%] mt-[-6%] sx:h-[10vh] sx:w-[18%]">
            1
          </h1>
          <p className="text-center w-[80%] m-auto text-[18px]  font-[400] mt-[5%] mb-[7%] text-slate-700 dark:text-white">
          {t("deposit.h6")}
          </p>
        </div>
        <div className="div-deposit bg-slate-100 w-[30%] rounded-md sx:w-[70%] sx:m-[auto] l:w-[70%] l:m-[auto] l:mt-[50px] xl:w-[70%] xl:m-[auto] xl:mt-[40px] xxl:w-[48%] xxl:m-[auto] xxl:mt-[40px]  sx:mt-[40px] dark:bg-gray-900 dark:text-[white]">
          <h1 className="w-[15%] h-[8vh] rounded-[10px] font-serif pt-[7px]  text-center bg-slate-400 text-[white] text-[30px] font-[800] ml-[41%] mt-[-6%] sx:h-[10vh] sx:w-[18%]">
            2
          </h1>
          <p className="text-center w-[80%] m-auto text-[18px] font-[400] mt-[5%] mb-[7%] text-slate-700 dark:text-white">
          {t("deposit.h7")}
          </p>
        </div>
        <div className="div-deposit bg-slate-100 w-[30%] rounded-md sx:w-[70%] sx:m-[auto] l:w-[70%] l:m-[auto] l:mt-[50px] sx:mt-[40px] sx:p-[0px] xl:w-[70%] xl:m-[auto] xl:mt-[40px] xxl:w-[48%] xxl:m-[auto] xxl:mt-[40px] dark:bg-gray-900">
          <h1 className="w-[15%] h-[8vh] rounded-[10px] font-serif pt-[7px]  text-center bg-slate-400 text-[white] text-[30px] font-[800] ml-[41%] mt-[-6%] sx:h-[10vh] sx:w-[18%]">
            3
          </h1>
          <p className="text-center w-[80%] m-auto text-[18px] font-[400] mt-[5%] mb-[7%] text-slate-700 dark:text-white">
          {t("deposit.h8")}
          </p>
        </div>
      </div>

      <div className="pl-[100px] pr-[100px]  dark:bg-gray-800  pt-[30px] pb-[30px] dark:text-white  text-center text-gray-900 sx:w-[100%] ph:p-[10px] l:p-[10px] xl:p-[10px]">
        <h1 className="text-[45px] font-[600] sx:text-[30px]">{t("deposit.h9")}</h1>
      </div>

      <div className="bg-slate-100">  
        <div className="pl-[100px] pr-[100px] m-auto flex gap-10 flex-wrap dark:bg-gray-800 pt-[5%] pb-[5%] sx:flex-wrap sx:p-[10px] l:p-[10px] l:flex-wrap xl:p-[50px] xxl:p-[50px] cs:p-[40px] cs:flex-wrap cx:p-[40px]">
          <div class="div-deposit w-[30%] bg-[white]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] l:w-[90%] l:m-[auto] xl:w-[90%] xl:m-[auto] xxl:w-[47%] cs:w-[47%] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit3} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] pt-[4px] sx:h-[8vh] sx:pt-[6px]  rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
            {t("deposit.h10")}
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600] dark:text-white">
            {t("deposit.h11")}
            </p>
            <ul>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 50 сомони
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 долларов США
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 500 российских рублей
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 Евро
              </li>
            </ul>
            <button className="text-[white] bg-gray-900 w-[50%] ml-[23%] mb-[5%] h-[7vh] sx:h-[10vh] rounded-[5px] mt-[5%] font-[500]">
            {t("deposit.h12")} <ArrowRightAltIcon />
            </button>
          </div>
          <div class="div-deposit w-[30%] bg-[white] l:w-[90%] xxl:w-[47%] l:m-[auto] xl:w-[90%] xl:m-[auto]  my-2 rounded-[5px] sx:w-[90%] cs:w-[47%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit4} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] pt-[4px] sx:h-[8vh] sx:pt-[6px]  rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-xl font-bold mb-3 mt-2 text-center">
            {t("deposit.h13")}
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600]">
            {t("deposit.h11")}
            </p>
            <ul>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 50 сомони
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 долларов США
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 500 российских рублей
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 Евро
              </li>
            </ul>
            <button className="text-[white] bg-gray-900 w-[50%] sx:h-[10vh] ml-[23%] mb-[5%] h-[7vh] rounded-[5px] mt-[5%] font-[500]">
            {t("deposit.h12")} <ArrowRightAltIcon />
            </button>
          </div>
          <div class=" div-deposit w-[30%] bg-[white] l:w-[90%] xxl:w-[47%] cs:w-[47%] l:m-[auto] xl:w-[90%] xl:m-[auto]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit5} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] sx:h-[8vh] sx:pt-[6px] pt-[4px] rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
            {t("deposit.h14")}
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600]">
            {t("deposit.h11")}
            </p>
            <ul>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 50 сомони
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 долларов США
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 500 российских рублей
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 Евро
              </li>
            </ul>
            <button className="text-[white] bg-gray-900 w-[50%] ml-[23%] mb-[5%] h-[7vh] sx:h-[10vh] rounded-[5px] mt-[5%] font-[500]">
            {t("deposit.h12")} <ArrowRightAltIcon />
            </button>
          </div>
          <div class="div-deposit w-[30%] bg-[white] l:w-[90%] xxl:w-[47%] cs:w-[47%] l:m-[auto] xl:w-[90%] xl:m-[auto]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white ">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit6} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] pt-[4px] sx:h-[8vh] sx:pt-[6px]  rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
            {t("deposit.h15")}
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600]">
            {t("deposit.h11")}
            </p>
            <ul>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 50 сомони
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 долларов США
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 500 российских рублей
              </li>
              <li className="text-[14px] font-[500]  mt-[2%] ml-[5%]">
                ° 10 Евро
              </li>
            </ul>
            <button className="text-[white] bg-gray-900 w-[50%] ml-[23%] mb-[5%] sx:h-[10vh] h-[7vh] rounded-[5px] mt-[5%] font-[500]">
            {t("deposit.h12")} <ArrowRightAltIcon />
            </button>
          </div>
          <div class="div-deposit w-[30%] bg-[white] l:w-[90%] xxl:w-[47%] cs:w-[47%] cs:m-[auto] xxl:m-[auto] l:m-[auto] xl:w-[90%] xl:m-[auto]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit7} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] sx:h-[8vh] sx:pt-[6px] pt-[4px] rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
            {t("deposit.h16")}
            </h2>

            <ul>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
              {t("deposit.h17")}
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
              {t("deposit.h18")}
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
              {t("deposit.h19")}
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
              {t("deposit.h20")}
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
              {t("deposit.h21")}
              </li>
            </ul>
            <button className="text-[white] bg-gray-900 w-[50%] sx:h-[10vh] ml-[23%] mb-[5%] h-[7vh] rounded-[5px] mt-[5%] font-[500]">
            {t("deposit.h12")} <ArrowRightAltIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Deposits;