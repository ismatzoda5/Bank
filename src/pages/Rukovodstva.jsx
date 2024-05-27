import React, { useEffect } from "react";
import Dustov from "../assets/DUSTOVSAFARBEK.png";
import Khalikov from "../assets/KHALIKOVANVAR.png";
import Azizmurodov from "../assets/AZIZMURODOVCODIKJON.png"
import Murodov from "../assets/MURODOVZUURBEK.png"
import Mamadjanov from "../assets/MAMADJANOVZARAFBEK.png"
import Kurbonov from "../assets/KURBONOVUNURBEK.png"
import "../App.css"
import { useDispatch, useSelector } from "react-redux";
import { getRukovodstva } from "../reducers/todolist/todolist";
import { Link } from "react-router-dom";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRukovodstva());
  }, [dispatch]);
  const rukovodstva = useSelector((state) => state.sanduk.data)
  console.log(rukovodstva);
  
    return (
      <div className="rukovodstva-glav-div pl-[100px] pr-[100px] pt-[30px] pb-[30px] dark:bg-gray-800 dark:text-[white] sx:p-[10px]">
        <h1 className="text-[30px] font-[600] text-[#EBA707] sx:text-[30px] sx:text-center">
          Наща Руководство
        </h1>
        <div className="flex justify-between items-center flex-wrap  gap-[30px] mt-[20px] sx:flex-wrap ">
          {rukovodstva.map((elem) => {
            return (
              <div
                key={elem.id}
                className="elem w-[48%] h-[33vh] p-[0px]  flex justify-between  items-center bg-[white]   dark:bg-gray-900 dark:border-none border-[1px] rounded-3xl  sx:w-[90%] sx:h-[100vh] sx:flex-wrap sx:m-[auto]"
              >
                <Link to={`/rukovodstva/${elem.id}`}>
                  <div
                    className="flex justify-between p-[30px]  items-center bg-[white]    dark:bg-gray-900 dark:border-none  rounded-3xl  sx:w-[90%] sx:h-[100vh] sx:flex-wrap sx:m-[auto]"
                  >
                    <div className="div-image-rukovod w-[48%] sx:w-[100%]">
                      <Link to={`/rukovodstva/${elem.id}`}>
                        <img
                          className="rounded-3xl h-[80%] object-cover w-[80%] filter-shadow-[10px] sx:w-[100%] "
                          src={Dustov}
                          alt="avatar"
                        />
                      </Link>
                    </div>
                    <div className="w-[58%] sx:w-[100%]">
                      <h1 className="text-[30px]   font-[500] pt-[5px]  sx:text-[30px]">
                        {elem.name}
                      </h1>
                      <h1 className="role text-[18px] text-[#EBA707]   pt-[15px] sx:text-[16px]">
                        {elem.description}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
};
export default Rukovodstva;
