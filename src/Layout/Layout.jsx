import { Link, Outlet } from "react-router-dom";
import Switcher from "../components/Swicher";
import "../App.css";
import React from "react";

// imports of Assets Image
import logo from "../assets/logo.png";
import tjk from "../assets/tj-flag.jpeg";

// imports on material icon
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { color } from "framer-motion";
// imports of popover in ant design
import { Button, ConfigProvider, Popover } from "antd";
import { useState } from "react";

// Imports Select MUI

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import select from ant
const content = (
  <div className="w-[200px]  ">
    <Link to={"credits"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.6] cursor-pointer p-[5px]">
        Кредиты
      </h1>
    </Link>
    <Link to={"deposity"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Депозиты
      </h1>
    </Link>
    <Link to={"strakhoviklady"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Страховые вклады
      </h1>
    </Link>
    <Link to={"denezhnieperevody"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Денежные переводы
      </h1>
    </Link>
    <Link to={"bankovskiekarty"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Банковские карты
      </h1>
    </Link>
    <Link to={"projects"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Проекты
      </h1>
    </Link>
  </div>
);
const content2 = (
  <div className="w-[200px]">
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Зарплатные проекты
    </h1>
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      РКО
    </h1>
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Бизнес проекты
    </h1>
  </div>
);
const content3 = (
  <div className="w-[200px]">
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Фудиторские отчеты
    </h1>
    <Link to={"pravaklienta"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Права клиента
      </h1>
    </Link>
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Норматив достаточности капитала
    </h1>
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Инвесторам
    </h1>
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Комплаенс
    </h1>
    <Link to={"finansovieotchety"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Финансовые отчеты
      </h1>
    </Link>
    <Link to={"rukovodstva"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        Руководство
      </h1>
    </Link>
    <Link to={"istoriya"}>
      <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
        История
      </h1>
    </Link>
  </div>
);
const content4 = (
  <div className="w-[200px]">
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Акция
    </h1>
  </div>
);
const content5 = (
  <div className="w-[200px]">
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Головной офис
    </h1>
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      Филлиалы
    </h1>
    <h1 className="chastnie-lica text-[18px] text-[#EBA707] hover:opacity-[0.7] cursor-pointer p-[5px]">
      ЦБО
    </h1>
  </div>
);

// Imports Translate
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [modal, setModal] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="pl-[80px] sticky top-0  dark:bg-gray-900 bg:text-[white] font-[500] text-[18px] shadow-md  bg-[white] text-[#EBA707]  pr-[80px] pt-[3px] pb-[3px] flex justify-between items-center z-10 sx:p-[10px] l:p-[10px] xl:p-[10px] xxl:p-[10px] cx:p-[20px] ">
        <div className="w-[16%] h-[100%] sx:w-[40%] l:w-[35%] xl:w-[35%] xxl:w-[35%] cs:w-[35%] cx:w-[30%]">
          <Link to={"/"}>
            <img className="w-[100%] h-[100%]" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-[30px] sx:hidden l:hidden xl:hidden xxl:hidden cs:hidden cx:hidden">
          <Popover className="border-none" placement="bottom" content={content}>
            <h1 className="chastnie-lica  text-[#EBA707] hover:text-[gray] cursor-pointer p-[5px]">
              {t("navbar.h1")}
            </h1>
          </Popover>
          <Popover placement="bottom" content={content2}>
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("navbar.h2")}
            </h1>
          </Popover>
          <Popover content={content3} placement="bottom">
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("navbar.h3")}
            </h1>
          </Popover>
          <Popover content={content4} placement="bottom">
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("navbar.h4")}
            </h1>
          </Popover>
          <Popover content={content5} placement="bottom">
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("navbar.h5")}
            </h1>
          </Popover>
        </div>
        <div className="pl-[80px] dark:bg-gray-900 bg:text-[white] text-[19px] sx:p-[0px]  bg-[white] text-[#EBA707]  pr-[80px] pt-[10px] pb-[10px] flex justify-between items-center ">
          <div className="flex items-center gap-[30px] justify-between">
            {/* <select
              className="w-[80px] bg-[white] rounded-md dark:bg-gray-900 p-[5px] h-[40px] outline-none cursor-pointer"
              name=""
              id=""
            >
              <option value="">
                <h1>TJK</h1>
              </option>
              <option onClick={()=> changeLanguage("ru")} value="">
                <h1 >RUS</h1>
              </option>
              <option value="">
                <h1>ENG</h1>
              </option>
            </select> */}
            <Box
              className="sx:hidden "
              sx={{
                minWidth: 115,
                color: "#EBA707",
                border: "none",
                outline: "none",
              }}
            >
              <FormControl fullWidth sx={{ border: "none" }}>
                <InputLabel
                  sx={{ color: "#EBA707", border: "none", outline: "none" }}
                  id="demo-simple-select-label"
                >
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Language"
                  onChange={handleChange}
                  sx={{ border: "none", outline: "none" }}
                  className="dark:bg-gray-900"
                >
                  <MenuItem
                    sx={{ color: "#EBA707" }}
                    onClick={() => changeLanguage("eng")}
                    value="Eng"
                  >
                    Eng
                  </MenuItem>
                  <MenuItem
                    sx={{ color: "#EBA707" }}
                    onClick={() => changeLanguage("ru")}
                    value="Rus"
                  >
                    Rus
                  </MenuItem>
                  <MenuItem
                    sx={{ color: "#EBA707" }}
                    onClick={() => changeLanguage("tj")}
                    value="Tjk"
                  >
                    Tjk
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Switcher />
            <div className="hidden sx:block border-[#EBA707] rounded-md  border-[1px]">
              <IconButton onClick={() => setModal(true)}>
                <MenuIcon
                  sx={{ width: "25px", height: "25px", color: "#EBA707" }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <div className="p-[30px] flex justify-between items-center shadow-2xl  bg-[white] dark:bg-gray-900 text-[#EBA707] text-[16px] font-[500] sx:p-[10px] sx:flex-wrap l:p-[10px] l:flex-wrap xl:p-[10px] xl:flex-wrap xxl:p-[20px] xxl:flex-wrap cs:flex-wrap cs:p-[20px] cx:p-[20px] cx:flex-wrap">
        <div className="w-[35%] h-[100%] sx:w-[100%] l:w-[100%] xl:w-[100%] xxl:w-[48%] cs:w-[48%] cx:w-[48%]">
          <img className="w-[50%] h-[100%]" src={logo} alt="" />
          <h1 className="font-[500] mt-[40px]">{t("footer.h1")}</h1>
        </div>
        <div className="w-[20%] sx:w-[48%] l:w-[48%] xl:w-[48%] xxl:w-[48%] cs:w-[48%] cx:w-[48%]">
          <h1 className=" cursor-pointer p-[5px] text-[22px] font-[500]">
            {t("footer.h2")}
          </h1>
          <h1 className="hover:text-[gray] cursor-pointer  p-[5px] pt-[20px]">
            {t("footer.h3")}
          </h1>
          <Link to={"pravaklienta"}>
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("footer.h4")}
            </h1>
          </Link>
          <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
            {t("footer.h5")}
          </h1>
          <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
            {t("footer.h6")}
          </h1>
          <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
            {t("footer.h7")}
          </h1>
          <Link to={"finansovieotchety"}>
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("footer.h8")}
            </h1>
          </Link>
          <Link to={"rukovodstva"}>
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("footer.h9")}
            </h1>
          </Link>
          <Link to={"istoriya"}>
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("footer.h10")}
            </h1>
          </Link>
        </div>
        <div className="w-[20%] sx:w-[48%] sx:mt-[20px] l:w-[48%] l:mt-[20px] xl:mt-[20px] xl:w-[48%] xxl:w-[48%] xxl:mt-[20px] cs:mt-[20px] cs:w-[48%] cx:w-[48%]">
          <h1 className=" cursor-pointer p-[5px] text-[22px] font-[500]">
            {t("footer.h11")}
          </h1>
          <h1 className="hover:text-[gray] cursor-pointer  p-[5px] pt-[20px]">
            {t("footer.h12")}
          </h1>
          <Link to={"bankovskiekarty"}>
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("footer.h13")}
            </h1>
          </Link>
          <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
            {t("footer.h14")}
          </h1>
          <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
            {t("footer.h15")}
          </h1>
          <Link to={"deposity"}>
            <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
              {t("footer.h16")}
            </h1>
          </Link>
          <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
            {t("footer.h17")}
          </h1>
          <h1 className="hover:text-[gray] cursor-pointer p-[5px]">
            {t("footer.h18")}
          </h1>
        </div>
        <div className="w-[15%] sx:w-[100%] sx:mt-[20px] l:w-[48%] l:mt-[20px] xl:mt-[20px] xl:w-[48%] xxl:mt-[20px] xxl:w-[48%] cs:w-[48%] cs:mt-[20px] cx:w-[48%]">
          <h1 className=" cursor-pointer p-[5px] text-[22px] font-[500]">
            {t("footer.h19")}
          </h1>
          <div className="footer-div-info flex items-center gap-[20px] p-[10px] mt-[10px]">
            <LocalPhoneIcon sx={{ cursor: "pointer" }} />
            <h1 className=" cursor-pointer ">(+992)44 603 07 07</h1>
          </div>
          <div className="footer-div-info flex items-center gap-[20px] p-[10px]">
            <EmailIcon sx={{ cursor: "pointer" }} />
            <h1 className=" cursor-pointer ">info@sanduk.tj</h1>
          </div>
          <div className="footer-div-info flex items-center gap-[20px] p-[10px]">
            <LocalPhoneIcon sx={{ cursor: "pointer" }} />
            <h1 className=" cursor-pointer ">(+992)44 600 15 20</h1>
          </div>
          <div className="flex justify-around  mt-[10px] sx:justify-start sx:gap-[20px]">
            <div className="socsety border-[1.5px] hover:text-[gray]  hover:border-[gray] cursor-pointer p-[5px] rounded-md border-[#EBA707]">
              <EmailIcon
                sx={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            </div>
            <a target="blank" href="https://www.instagram.com/sanduktj">
              <div className="socsety border-[1.5px] hover:text-[gray]  hover:border-[gray] cursor-pointer p-[5px] rounded-md border-[#EBA707]">
                <InstagramIcon
                  sx={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </a>
            <a target="blank" href="https://www.facebook.com/sanduk.tj">
              <div className="socsety border-[1.5px] hover:text-[gray]  hover:border-[gray]  cursor-pointer p-[5px] rounded-md border-[#EBA707]">
                <FacebookIcon
                  sx={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </a>
          </div>
        </div>
        <div></div>
      </div>
      {modal ? (
        <div className="modal-div dark:bg-gray-900 fixed    top-1 ml-[50%] z-30 text-white w-[50%] h-[100vh] bg-[white] p-[20px]">
          <div className="modal-div2 flex justify-between flex-row-reverse items-center pt-[0px] pb-[20px]">
              <IconButton onClick={() => setModal(false)}>
                <CloseIcon
                  sx={{ width: "35px", height: "35px", color: "#EBA707" }}
                />
              </IconButton>
            <div className="flex items-center gap-[40px]">
              <Box
                sx={{
                  minWidth: 115,
                  color: "#EBA707",
                  border: "none",
                  outline: "none",
                  color: "white",
                }}
              >
                <FormControl fullWidth sx={{ border: "none" }}>
                  <InputLabel
                    sx={{ color: "#EBA707", border: "none", outline: "none" }}
                    id="demo-simple-select-label"
                  >
                    Language
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Language"
                    onChange={handleChange}
                    sx={{ border: "none", outline: "none" }}
                    className="dark:bg-gray-900"
                  >
                    <MenuItem
                      sx={{ color: "#EBA707" }}
                      onClick={() => changeLanguage("eng")}
                      value="Eng"
                    >
                      Eng
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "#EBA707" }}
                      onClick={() => changeLanguage("ru")}
                      value="Rus"
                    >
                      Rus
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "#EBA707" }}
                      onClick={() => changeLanguage("tj")}
                      value="Tjk"
                    >
                      Tjk
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="flex items-center text-[#EBA707] gap-[30px] flex-wrap ">
            <Popover
              className="border-none"
              placement="bottom"
              content={content}
            >
              <h1 className="chastnie-lica  text-[#EBA707] hover:text-[gray] sx:text-center sx:w-[100%] sx:m-[auto] cursor-pointer p-[5px]">
                {t("navbar.h1")}
              </h1>
            </Popover>
            <Popover placement="bottom" content={content2}>
              <h1 className="hover:text-[gray] cursor-pointer p-[5px] sx:text-center sx:w-[100%] sx:m-[auto]">
                {t("navbar.h2")}
              </h1>
            </Popover>
            <Popover content={content3} placement="bottom">
              <h1 className="hover:text-[gray] cursor-pointer p-[5px] sx:text-center sx:w-[100%] sx:m-[auto]">
                {t("navbar.h3")}
              </h1>
            </Popover>
            <Popover content={content4} placement="bottom">
              <h1 className="hover:text-[gray] cursor-pointer p-[5px] sx:text-center sx:w-[100%] sx:m-[auto]">
                {t("navbar.h4")}
              </h1>
            </Popover>
            <Popover content={content5} placement="bottom">
              <h1 className="hover:text-[gray] cursor-pointer p-[5px] sx:text-center sx:w-[100%] sx:m-[auto]">
                {t("navbar.h5")}
              </h1>
            </Popover>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Layout;
