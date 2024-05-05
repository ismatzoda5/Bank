import React, { useEffect, useRef, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Slider } from "@mui/material";
import "../App.css";
// imports in assets image
import image1 from "../assets/credits-image1.jpg";
import image2 from "../assets/credits-image2.jpg";
import image3 from "../assets/credits-image3.jpg";
import sumho from "../assets/sumho.svg";
import bitovaya from "../assets/bitovaya.svg";
// Imports Translate
import { useTranslation } from "react-i18next";

const Credits = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };  

  const [creditAmount, setCreditAmount] = useState(1000);
  const [sliderValue, setSliderValue] = useState(1000);
  const handleSliderChange = (e) => {
    setCreditAmount(parseInt(e.target.value));
    setSliderValue(parseInt(e.target.value));
  };
  const handleAmountClick = (amount) => {
    setCreditAmount(amount);
    setSliderValue(amount);
  };

  const [loancredit, setLoancredit] = useState(3);
  const [sliderloanValue, setSlideLoanrValue] = useState(3);
  const handleSliderChange2 = (e) => {
    setLoancredit(parseInt(e.target.value));
    setSlideLoanrValue(parseInt(e.target.value));
  };
  const handleLoanClick = (amount) => {
    setLoancredit(amount);
    setSlideLoanrValue(amount);
  };

  const [interestRate, setInterestRate] = useState(1);
  const [sliderInterestValue, setSliderInterestValue] = useState(1);
  const handleSliderChange3 = (e) => {
    setInterestRate(parseInt(e.target.value));
    setSliderInterestValue(parseInt(e.target.value));
  };
  const handleInterestClick = (amount) => {
    setInterestRate(amount);
    setSliderInterestValue(amount);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numPayments = loancredit;
    const loanAmountWithInterest =
      creditAmount * (1 + monthlyInterestRate) ** numPayments;
    const monthlyPayment = loanAmountWithInterest / numPayments;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="pt-[5%] dark:bg-gray-800 dark:text-[white]">
      <div className="flex flex-col gap-[30px] pl-[100px] pr-[100px] sx:p-[10px] sx:gap-[20px]">
        <div className="flex gap-[5px] items-center ml-[0%]">
          <div className="flex gap-[5px] items-center ">
            <Link to={"/"}>
              <HomeIcon className="text-[#746D66]" />/
            </Link>
          </div>
          <h1
            className="text-[#222222] dark:text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
           {t("credit.h1")}
          </h1>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          className="flex justify-between dark:bg-gray-900 p-[30px] rounded-[20px] bg-[#F9E5A6] items-center sx:w-[80%] sx:m-[auto] sx:flex-wrap"
        >
          <div className="w-[48%] sx:w-[100%]">
            <h1 className="text-[40px] font-[700] "> {t("credit.h2")}</h1>
            <p className="text-[19px] font-[400] pt-[15px]">
            {t("credit.h3")}
            </p>
          </div>
          <div className="w-[48%] sx:w-[100%] sx:mt-[20px]">
            <img className="sumho" src={sumho} alt="" />
          </div>
        </div>
      </div>
      <div className="pl-[100px] gap-[30px] pr-[100px] pt-[100px] pb-[100px] flex justify-between items-center flex-wrap sx:p-[10px] sx:mt-[50px]">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          className=" transform p-[50px] bg-[#F9E5A6] dark:bg-gray-900 cursor-pointer rounded-[12px] flex justify-between items-center w-[48%] sx:w-[80%] sx:m-[auto] sx:flex-wrap"
        >
          <div className="w-[38%] sx:w-[100%]">
            <img src={bitovaya} alt="" />
          </div>
          <div className="w-[58%] sx:w-[100%]">
            <h1 className="text-[22px] font-[500]"> {t("credit.h4")}</h1>
            <p className="text-[17px] font-[400] pt-[10px]">
            {t("credit.h5")}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className=" p-[36px] flex-row-reverse bg-[#F9E5A6] dark:bg-gray-900 cursor-pointer rounded-[12px] flex justify-between items-center w-[48%] sx:w-[80%] sx:m-[auto] sx:flex-wrap"
        >
          <div className="w-[38%] sx:w-[100%]">
            <img className="rounded-[20px]" src={image3} alt="" />
          </div>
          <div className="w-[58%] sx:w-[100%] sx:mt-[20px]">
            <h1 className="text-[22px] font-[500]">
            {t("credit.h6")}
            </h1>
            <p className="text-[17px] font-[400] pt-[10px]">
            {t("credit.h7")}
            </p>
          </div>
        </div>
        <div className="p-[36px] flex-row-reverse bg-[#F9E5A6] dark:bg-gray-900 cursor-pointer rounded-[12px] flex justify-between items-center w-[100%] sx:w-[80%] sx:m-[auto] sx:flex-wrap">
          <div className="w-[48%] sx:w-[100%] ">
            <img className="rounded-[20px]" src={image2} alt="" />
          </div>
          <div className="w-[48%] sx:w-[100%] ">
            <h1 className="text-[35px] font-[600]"> {t("credit.h8")}</h1>
            <p className="text-[19px] w-[80%] font-[400] pt-[20px]">
            {t("credit.h9")}
            </p>
          </div>
        </div>
        <div className="p-[36px] flex-row-reverse bg-[#F9E5A6] dark:bg-gray-900 cursor-pointer rounded-[12px] flex justify-between items-center w-[100%] sx:w-[80%] sx:flex-wrap sx:m-[auto]">
          <div className="w-[48%] sx:w-[100%]">
            <img className="rounded-[20px]" src={image1} alt="" />
          </div>
          <div className="w-[48%] sx:w-[100%]">
            <h1 className="text-[35px] font-[600] sx:mt-[10px]">
            {t("credit.h10")}
            </h1>
            <p className="text-[19px] w-[80%] font-[400] pt-[20px]">
            {t("credit.h11")}
            </p>
          </div>
        </div>
      </div>

      <div className="p-[88px_100px] dark:bg-gray-900 bg-[#F9E5A6] flex flex-col gap-[60px] sx:p-[10px] sx:m-[20px]">
        <h1 className="text-[40px] font-[600] sx:text-[25px]">
        {t("credit.h12")}
        </h1>
        <div className="bg-white dark:bg-gray-800 sx:overflow-scroll  rounded-[28px] p-[30px] flex items-start gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <div>
              <div className="p-[33px_27px_0px] w-[92.5%] border-[#FFB700] border-t border-r border-l rounded-[8px]">
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor=""> {t("credit.h13")}</label>
                  <div className="">
                    <input
                      className="outline-none text-[#FFB700] dark:bg-gray-800 text-[25px] w-[13.6%]"
                      value={creditAmount.toLocaleString()}
                    />{" "}
                    <span>сомони</span>
                  </div>
                </div>
                <Slider
                  value={sliderValue}
                  sx={{
                    position: "relative",
                    top: "1.3rem",
                    width: "610px",
                    left: "-1.6rem",
                    borderRadius: "0px 0px 10px 10px",
                    color: "#FFB700",
                  }}
                  onChange={handleSliderChange}
                  min={1000}
                  max={50000}
                />
              </div>
              <div className="mt-[2%] flex gap-[160px]">
                <span
                  className="cursor-pointer"
                  onClick={() => handleAmountClick(1000)}
                >
                  1000 сомони
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleAmountClick(25000)}
                >
                  25тыс сомони
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleAmountClick(50000)}
                >
                  50тыс сомони
                </span>
              </div>
            </div>
            <div>
              <div className="p-[33px_27px_0px] w-[92.5%] border-[#FFB700] border-t border-r border-l rounded-[8px]">
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor=""> {t("credit.h14")}</label>
                  <div className="">
                    <input
                      className="outline-none text-[#FFB700]  dark:bg-gray-800 text-[25px] w-[5%]"
                      value={loancredit.toLocaleString()}
                    />{" "}
                    <span>мес.</span>
                  </div>
                </div>
                <Slider
                  value={sliderloanValue}
                  sx={{
                    position: "relative",
                    top: "1.3rem",
                    width: "610px",
                    left: "-1.6rem",
                    borderRadius: "0px 0px 10px 10px",
                    color: "#FFB700",
                  }}
                  onChange={handleSliderChange2}
                  min={3}
                  max={36}
                />
              </div>
              <div className="mt-[2%] flex gap-[230px]">
                <span
                  className="cursor-pointer"
                  onClick={() => handleLoanClick(3)}
                >
                  3 мес.
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleLoanClick(20)}
                >
                  20 мес.
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleLoanClick(36)}
                >
                  36 мес.
                </span>
              </div>
            </div>
            <div>
              <div className="p-[33px_27px_0px] w-[92.5%] border-[#FFB700] border-t border-r border-l rounded-[8px]">
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor=""> {t("credit.h15")}</label>
                  <div className="">
                    <input
                      className="outline-none text-[#FFB700]  dark:bg-gray-800 text-[25px] w-[5%]"
                      value={interestRate.toLocaleString()}
                    />{" "}
                    <span>%</span>
                  </div>
                </div>
                <Slider
                  value={sliderInterestValue}
                  sx={{
                    position: "relative",
                    top: "1.3rem",
                    width: "610px",
                    left: "-1.6rem",
                    borderRadius: "0px 0px 10px 10px",
                    color: "#FFB700",
                  }}
                  onChange={handleSliderChange3}
                  min={1}
                  max={30}
                />
              </div>
              <div className="mt-[2%] flex gap-[260px]">
                <span
                  className="cursor-pointer"
                  onClick={() => handleInterestClick(1)}
                >
                  1%
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleInterestClick(15)}
                >
                  15%
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleInterestClick(30)}
                >
                  30%
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[500px] p-[50px] rounded-[15px] shadow-[0_0_5px_#FFB700] flex items-end gap-[120px]">
              <div>
                <h1> {t("credit.h16")}</h1>
                <h1 className="text-[#FFB700] text-[28px]">{monthlyPayment}</h1>
              </div>

              <button
                className="bg-[#FFB700] p-[10px_20px] rounded-[5px] text-[#FFF] outline-none"
                onClick={calculateMonthlyPayment}
              >
                 {t("credit.h17")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;