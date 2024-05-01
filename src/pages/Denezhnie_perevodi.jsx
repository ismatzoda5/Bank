import React, { useRef, useState } from "react";
import "../App.css"
import contact from "../assets/contact.png"
import western from "../assets/western.png"
import unistream from "../assets/unistream.png"
// imports of accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Denezhnie_perevodi = () => {
  const data = [
    {
      id: 1,
      avatar: unistream,
      name: "Юнистрим",
      description:
        "Юнистрим — одна из крупнейших систем денежных переводов в России.При получении посылки получатель должен знать: -КНП из 12 цифр —Имя отправителя -Комиссия за перевод и валюта Позвоните по номеру 808 для получения дополнительной информации",
    },
    {
      id: 2,
      avatar: western,
      name: "Western Union",
      description:"Система международных денежных переводов Western Union работает более чем в 200 странах мира. При получении денежных средств, получатель должен знать: — Код из 10 цифр — Имя отправителя — Комиссия за перевод и валюту Позвоните по номеру 808 для получения дополнительной информации",
    },
    {
      id: 3,
      avatar: contact,
      name: "Contact",
      description:
        "Платёжная система CONTACT является первой российской  системой денежных переводов. При получении посылки получатель должен знать:  КНП от 1 до 16 цифр -ФИО отправителя  — Сумму и валюту денежного перевода Позвоните по номеру 808 для получения дополнительной информации",
    },
  ];
  return (
    <div className=" dark:bg-gray-900  dark:text-white pl-[100px] pr-[100px] pt-[30px] pb-[30px]">
      <div>
        <h1 className="text-[30px] font-[600] text-[#EBA707]">Наши Международные системы переводов</h1>
        <div className="flex justify-between items-center gap-[20px] mt-[30px]">
          {
            data.map((elem) => {
              return (
                <div
                  className="perevody w-[30%] hover:border-[#EBA707] border-[1px] hover:shadow-md p-[20px] rounded-md "
                  key={elem.id}
                >
                  <img
                    className="object-cover rounded-md"
                    src={elem.avatar}
                    alt=""
                  />
                  {/* <h1 className="text-start pt-[10px] text-[#EBA707] text-[22px]">
                    {elem.name}
                  </h1> */}
                  <div className="pt-[20px]">
                    <Accordion
                      className="dark:bg-gray-800"
                      sx={{ boxShadow: "none", border: "none" }}
                      defaultExpanded
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <h1 className="text-[20px]">Узнать больше!</h1>
                      </AccordionSummary>
                      <AccordionDetails>
                        <h1 className="text-[18px] text-[gray]">
                          {elem.description}
                        </h1>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Denezhnie_perevodi;
