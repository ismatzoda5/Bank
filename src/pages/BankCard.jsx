import React from "react";

// Images
import cards from "../assets/cards.svg";

// Icons
import SecurityIcon from "@mui/icons-material/Security";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "../App.css";

// Imports Translate
import { useTranslation } from "react-i18next";

const BankCard = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };  
  return (
    <>
      <div className="card ">
        <div className=" flex justify-between items-center p-[100px] sx:p-[10px] sx:flex-wrap  ">
          <div className="w-[55%] text-gray-800 sx:w-[90%]">
            <h1 className="text-[50px] font-[600] dark:text-white sx:text-[30px]">
            {t("kart.h1")}
            </h1>
            <p className="text-[20px] dark:text-white font-[500]  mt-[3%] sx:text-[18px]">
            {t("kart.h2")}
            </p>
            <button className="bg-[#fcd450] dark:bg-gray-800 dark:text-[#fcd450] dark:border-[2px] dark:border-[#fcd450] w-[40%] mb-[5%] rounded-[10px] mt-[4%] sx:h-[12vh] h-[8vh] text-[18px] font-[500]">
            {t("kart.h3")}
            </button>
          </div>
          <div className="w-[40%] sx:w-[90%]">
            <img className="bankCard-image" src={cards} alt="" />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-900  pl-[100px] pr-[100px] pt-[30px] pb-[30px] dark:bg-gray-800 dark:text-[white]">
        <h1 className="text-[45px] font-[600]">{t("kart.h4")}</h1>
        <p className="text-[16px] w-[70%] m-[auto] mt-[3%] font-[500]">
        {t("kart.h5")}
        </p>
      </div>
      {/* <div className=" flex justify-between mt-[10%] pl-[100px] pr-[100px] pt-[30px] pb-[30px] sx:p-[10px] sx:flex-wrap">
        <div className="bg-slate-100 w-[22%] rounded-[5px] sx:w-[70%] sx:m-[auto] sx:mt-[30px]">
          <h1 className="w-[45%] h-[15vh] rounded-[50%] sx:w-[30%] pt-[30px] text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]">
            <SecurityIcon sx={{ fontSize: "60px" }} />
          </h1>
          <p className="text-center text-[16px] font-[700] w-[70%] m-[auto] mt-[5%] mb-[7%]">
            Безопасное хранение денежных средств
          </p>
        </div>
        <div className="bg-slate-100 w-[22%] rounded-[5px] sx:w-[70%] sx:m-[auto] sx:mt-[30px]">
          <h1 className="w-[45%] h-[15vh] rounded-[50%] pt-[30px] text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]">
            <PhoneIphoneIcon sx={{ fontSize: "60px" }} />
          </h1>
          <p className="text-center text-[16px] font-[700] w-[70%] m-[auto] mt-[5%] mb-[7%]">
            Онлайн платежи c помощью мобильного кошелька
          </p>
        </div>
        <div className="bg-slate-100 w-[22%] h-[auto] rounded-[5px] sx:w-[70%] sx:m-[auto] sx:mt-[30px]">
          <h1 className="w-[45%]  rounded-[50%]  text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]">
            <CreditCardIcon sx={{ fontSize: "60px" }} />
          </h1>
          <p className="text-center text-[16px] font-[700] w-[70%] m-[auto] mt-[5%] mb-[7%]">
            Доступ к деньгам 24/7
          </p>
        </div>
        <div className="bg-slate-100 w-[22%] rounded-[5px] sx:w-[70%] sx:m-[auto] sx:mt-[30px]">
          <h1 className="w-[45%] h-[15vh] rounded-[50%] pt-[30px] text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]">
            <DescriptionIcon sx={{ fontSize: "60px" }} />
          </h1>
          <p className="text-center text-[16px] font-[700] w-[70%] m-[auto] mt-[5%] mb-[7%]">
            Контроль расходов
          </p>
        </div>
      </div> */}

      <div className="p-[50px] sx:p-[10px] dark:bg-gray-800">
        <div className="w-[90%] bg-slate-100 m-auto dark:bg-gray-900 dark:text-[white] flex justify-between rounded-[20px] p-[40px] items-center sx:p-[10px] sx:flex-wrap">
          <div className="w-[45%] mt-[3%] sx:w-[90%]">
            <h1 className="text-[40px] font-[600] sx:text-[30px]">
            {t("kart.h6")}
            </h1>
            <p className="text-[16px] leading-6 mt-[4%] font-[400]">
            {t("kart.h7")}
            </p>
            <button className="bg-[#fcd450] w-[40%] dark:bg-gray-800 dark:text-[#fcd450] dark:border-[#fcd450] dark:border-[1.5px] mb-[5%] rounded-[10px] mt-[7%] sx:h-[12vh] sx:w-[45%] h-[8vh] text-[18px] font-[700]">
            {t("kart.h8")}<ArrowRightAltIcon />
            </button>
          </div>
          <div className="w-[50%] h-[45vh] mt-[5%] mb-[5%] sx:w-[100%]">
            <img className="bankCard-image" src={cards} alt="" />
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center  p-[100px] sx:p-[10px] dark:bg-gray-800 dark:text-[white] sx:flex-wrap  sx:mt-[50px] sx:flex-row-reverse">
        <div className="w-[38%] sx:w-[90%] sx:m-[auto] sx:flex-column-reverse">
          <img className="bankCard-image" src={cards} alt="" />
        </div>
        <div className="w-[48%] sx:w-[90%] sx:m-[auto] sx:mt-[10px]">
          <p className="text-[18px] font-[500]  sx:text-[16px]">
          {t("kart.h9")}
          </p>
          <p className="text-[18px] font-[500]   mt-[5%] sx:text-[16px]">
          {t("kart.h10")}
          </p>
        </div>
      </div>
    </>
  );
};

export default BankCard;
