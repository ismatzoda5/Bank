import { Link, Outlet } from "react-router-dom";
import Switcher from "../components/Swicher";
import "../App.css";

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
import { IconButton } from "@mui/material";
import { color } from "framer-motion";
// imports of popover in ant design 
import { Button, ConfigProvider, Popover } from "antd";
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 80;

const Layout = () => {
  return (
    <div>
      <div className="pl-[80px] dark:bg-gray-900 bg:text-[white] font-[500] text-[19px]  bg-[#0C0C0C] text-[#EBA707]  pr-[80px] pt-[20px] pb-[20px] flex justify-between items-center sx:p-[10px]">
        <div className="w-[16%] h-[100%]">
          <img className="w-[100%] h-[100%]" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-[30px] sx:hidden">
          <Popover placement="bottom" title={text} content={content}>
            <Button>
              <h1 className="chastnie-lica hover:text-[white] cursor-pointer p-[5px]">
                Частным лицам
              </h1>
            </Button>
          </Popover>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">Бизнесу</h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            О компании
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">Новости</h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Контакты
          </h1>
        </div>
        <div className="flex items-center gap-[30px] justify-between">
          <select
            className="w-[80px] bg-[#0C0C0C] rounded-md dark:bg-gray-900 p-[5px] h-[40px] outline-none cursor-pointer"
            name=""
            id=""
          >
            <option value="">
              <h1>TJK</h1>
            </option>
            <option value="">
              <h1>RUS</h1>
            </option>
            <option value="">
              <h1>ENG</h1>
            </option>
          </select>
          <Switcher />
          <IconButton className="hidden">
            <MenuIcon
              sx={{ width: "30px", height: "30px", color: "#EBA707" }}
            />
          </IconButton>
        </div>
      </div>
      <Outlet />
      <div className="p-[80px] flex justify-between items-center bg-[#0C0C0C] dark:bg-gray-900 text-[#EBA707] text-[18px] font-[500] ">
        <div className="w-[35%] h-[100%]">
          <img className="w-[50%] h-[100%]" src={logo} alt="" />
          <h1 className="font-[500] mt-[40px] hover:text-[white]">
            ЗАО МДО «Сандук» выступает в качестве правопреемника ООО МДО «Рушди
            Ориён». ООО МДО «Рушди Ориён», которая была зарегистрирована
            государством на основании протокола участника под №01 от 10 июня
            2014 года, в соответствии с решением учредителей под № 01 от
            22.01.2022 год был преобразован в ЗАО МДО «Сандук».
          </h1>
        </div>
        <div className="w-[20%]">
          <h1 className="hover:text-[white] cursor-pointer p-[5px] text-[25px] font-[500]">
            О компании
          </h1>
          <h1 className="hover:text-[white] cursor-pointer  p-[5px] pt-[20px]">
            Аудиторские отчёты
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Права клиента
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Норматив достаточности капитала
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Инвесторам
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Комплаенсы
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Финансовые отчеты
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Руководство
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">История</h1>
        </div>
        <div className="w-[20%]">
          <h1 className="hover:text-[white] cursor-pointer p-[5px] text-[25px] font-[500]">
            Малому и среднему Бизнесу
          </h1>
          <h1 className="hover:text-[white] cursor-pointer  p-[5px] pt-[20px]">
            Зарплатные проекты
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Банковскые карты
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">Кредиты</h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Паевые инвестиционные фонды
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Депозиты
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">РКО</h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Бизнес-проекты
          </h1>
        </div>
        <div className="w-[15%]">
          <h1 className="hover:text-[white] cursor-pointer p-[5px] text-[25px] font-[500]">
            Контакты
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
          <div className="flex justify-around  mt-[10px]">
            <div className="border-[1.5px] hover:text-[white] hover:border-[white] cursor-pointer p-[5px] rounded-md border-[#EBA707]">
              <TelegramIcon
                sx={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            </div>
            <div className="border-[1.5px] hover:text-[white] hover:border-[white] cursor-pointer p-[5px] rounded-md border-[#EBA707]">
              <InstagramIcon
                sx={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            </div>
            <div className="border-[1.5px] hover:text-[white]  hover:border-[white]  cursor-pointer p-[5px] rounded-md border-[#EBA707]">
              <FacebookIcon
                sx={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal1">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
          aliquam consequuntur. At, ipsam sequi cupiditate eveniet obcaecati aut
          consequatur odit vel eius reprehenderit, reiciendis, tenetur eos illo
          sit exercitationem quisquam!
        </h1>
      </div>
      <ConfigProvider
        button={{
          style: {
            width: buttonWidth,
            margin: 4,
          },
        }}
      >
              </ConfigProvider>
    </div>
  );
};

export default Layout;
