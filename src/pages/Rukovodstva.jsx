import React from "react";
import Dustov from "../assets/DUSTOVSAFARBEK.png";
import Khalikov from "../assets/KHALIKOVANVAR.png";
import Azizmurodov from "../assets/AZIZMURODOVCODIKJON.png"
import Murodov from "../assets/MURODOVZUURBEK.png"
import Mamadjanov from "../assets/MAMADJANOVZARAFBEK.png"
import Kurbonov from "../assets/KURBONOVUNURBEK.png"
import "../App.css"

const Rukovodstva = () => {
  const data = [
    {
      id: 1,
      avatar: Dustov,
      fullname: "Дустов Сафарбек",
      role: "Председатель наблюдательного ЗАО МДО «Сандук»",
    },
    {
      id: 2,
      avatar: Khalikov,
      fullname: "Халиков Анвар",
      role: "Член  совета ЗАО МДО «Сандук»",
    },
    {
      id: 3,
      avatar: Azizmurodov,
      fullname: "Азизмуродов Содикджон",
      role: "Председатель правления-Директор ЗАО МДО «Сандук»",
    },
    {
      id: 4,
      avatar: Murodov,
      fullname: "Муродов Зуурбек",
      role: " Член совета ЗАО МДО «Сандук»",
    },
    {
      id: 5,
      avatar: Mamadjanov,
      fullname: "Мамаджанов Зафарбек",
      role: "Член совета ЗАО МДО «Сандук»",
    },
    {
      id: 6,
      avatar: Kurbonov,
      fullname: "Қурбонов Урунбек",
      role: " Член совета ЗАО МДО «Сандук»",
    },
  ];
    return (
      <div className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] dark:bg-gray-800 dark:text-[white] sx:p-[10px]">
        <h1 className="text-[30px] font-[600] text-[#EBA707] sx:text-[20px] sx:text-center">
          Наща Руководство
        </h1>
        <div className="flex justify-between items-center flex-wrap  gap-[30px] mt-[20px] sx:flex-wrap ">
          {data.map((elem) => {
            return (
              <div
                key={elem.id}
                className="elem w-[30%] h-[60vh] p-[10px] border-[1px] rounded-md hover:border-[#EBA707] sx:w-[70%] sx:h-[100vh] sx:m-[auto]"
              >
                <img
                  className="rounded-md h-[77%] w-[100%]"
                  src={elem.avatar}
                  alt=""
                />
                <h1 className="text-[28px] text-center font-[500] pt-[5px] hover:text-[#EBA707] sx:text-[20px]">
                  {elem.fullname}
                </h1>
                <h1 className="role text-[18px] text-[#EBA707]  text-center pt-[5px] sx:text-[16px]">
                  {elem.role}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    );
};
export default Rukovodstva;
