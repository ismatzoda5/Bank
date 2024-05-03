import React from 'react'

import deposit from "../assets/deposit.webp";
import deposit1 from "../assets/deposit1.webp";
import deposit3 from "../assets/deposit3.png";
import deposit4 from "../assets/deposit4.png";
import deposit5 from "../assets/deposit5.png";
import deposit6 from "../assets/deposit6.png";
import deposit7 from "../assets/deposit7.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Deposits = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className=" flex justify-between items-center pt-[40px] pb-[40px] pl-[100px] pr-[100px] sx:p-[10px] sx:flex-wrap">
          <div className="w-[55%] text-gray-800 sx:w-[100%]">
            <h1 className="text-[50px] font-[600] sx:text-[30px]">
              Выберите свой способ получить доход
            </h1>
            <p className="text-[18px] font-[500] mt-[3%] sx:text-[16px]">
              Откройте вклад или накопительный счет, получайте доход, накопите
              на квартиру, отпуск, учебу и другие масштабные цели
            </p>
            <button className="bg-gray-900  dark:bg-gray-800 dark:text-[#fcd450] dark:border-[2px] dark:border-[#fcd450] text-[white] w-[30%] mb-[5%] rounded-[10px] mt-[4%] h-[8.5vh] sx:h-[13vh] sx:w-[40%] text-[16px] font-[500]">
              Оформить депозит
            </button>
          </div>
          <div className="w-[50%] sx:w-[100%]">
            <img className="w-[100%] h-[100%]" src={deposit1} alt="" />
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] dark:text-[white] dark:bg-gray-800 m-auto text-center text-gray-900 sx:w-[80%] sx:m-[auto]">
        <h1 className="text-[45px] font-[600] sx:text-[30px]">
          Открыть вклад легко
        </h1>
      </div>
      <div className=" flex justify-between p-[100px] sx:p-[10px] sx:flex-wrap dark:bg-gray-800">
        <div className="div-deposit bg-slate-100 w-[30%] rounded-md sx:w-[70%] sx:m-[auto] sx:mt-[40px] dark:text-[white]">
          <h1 className="w-[15%] h-[8vh] rounded-[10px] font-serif  text-center pt-[7px] bg-slate-400 text-[white] dark:text-[white] text-[30px] font-[800] ml-[41%] mt-[-6%] sx:h-[15vh] sx:w-[18%]">
            1
          </h1>
          <p className="text-center w-[80%] m-auto text-[18px]  font-[400] mt-[5%] mb-[7%] text-slate-700">
            Заполните онлайн-заявку — посещать банк не нужно
          </p>
        </div>
        <div className="div-deposit bg-slate-100 w-[30%] rounded-md sx:w-[70%] sx:m-[auto] sx:mt-[40px]">
          <h1 className="w-[15%] h-[8vh] rounded-[10px] font-serif pt-[7px]  text-center bg-slate-400 text-[white] text-[30px] font-[800] ml-[41%] mt-[-6%] sx:h-[15vh] sx:w-[18%]">
            2
          </h1>
          <p className="text-center w-[80%] m-auto text-[18px] font-[400] mt-[5%] mb-[7%] text-slate-700">
            Если у вас нет карты Сандук, доставим договор и карту в удобное
            время
          </p>
        </div>
        <div className="div-deposit bg-slate-100 w-[30%] rounded-md sx:w-[70%] sx:m-[auto] sx:mt-[40px] sx:p-[0px] ">
          <h1 className="w-[15%] h-[8vh] rounded-[10px] font-serif pt-[7px]  text-center bg-slate-400 text-[white] text-[30px] font-[800] ml-[41%] mt-[-6%] sx:h-[15vh] sx:w-[18%]">
            3
          </h1>
          <p className="text-center w-[80%] m-auto text-[18px] font-[400] mt-[5%] mb-[7%] text-slate-700">
            Пополните вклад онлайн или наличными без комиссии 24/7
          </p>
        </div>
      </div>

      <div className="pl-[100px] pr-[100px]  dark:bg-gray-800  pt-[30px] pb-[30px] dark:text-white m-auto text-center text-gray-900 sx:w-[80%]">
        <h1 className="text-[45px] font-[600] sx:text-[30px]">Депозиты</h1>
      </div>

      <div className="bg-slate-100">
        <div className="pl-[100px] pr-[100px] m-auto  flex gap-10 flex-wrap dark:bg-gray-800 pt-[5%] pb-[5%] sx:flex-wrap ">
          <div class="div-deposit w-[30%] bg-[white]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit3} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] pt-[4px] sx:h-[8vh] sx:pt-[6px]  rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
              Вклад «Мигрант»
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600] dark:text-white">
              Минимальная сумма вклада:
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
              Подробности <ArrowRightAltIcon />
            </button>
          </div>
          <div class="div-deposit w-[30%] bg-[white]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit4} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] pt-[4px] sx:h-[8vh] sx:pt-[6px]  rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-xl font-bold mb-3 mt-2 text-center">
              Вклад «Кафолат ва даромад»
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600]">
              Минимальная сумма вклада:
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
              Подробности <ArrowRightAltIcon />
            </button>
          </div>
          <div class=" div-deposit w-[30%] bg-[white]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit5} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] sx:h-[8vh] sx:pt-[6px] pt-[4px] rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
              Вклад «Детский»
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600]">
              Минимальная сумма вклада:
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
              Подробности <ArrowRightAltIcon />
            </button>
          </div>
          <div class="div-deposit w-[30%] bg-[white]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit6} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] pt-[4px] sx:h-[8vh] sx:pt-[6px]  rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
              Вклад «Накопительный»
            </h2>
            <p class="text-gray-700 ml-[5%] text-[16px] font-[600]">
              Минимальная сумма вклада:
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
              Подробности <ArrowRightAltIcon />
            </button>
          </div>
          <div class="div-deposit w-[30%] bg-[white]  my-2 rounded-[5px] sx:w-[90%] sx:m-[auto] dark:bg-gray-900 dark:text-white">
            <img className="rounded-[5px_05px_0px_0px]" src={deposit7} alt="" />
            <h1 className="bg-[#0050B2] w-[30%] h-[4vh] sx:h-[8vh] sx:pt-[6px] pt-[4px] rounded-[5px] ml-[10%] mt-[-3%] relative text-center text-[white] font-[500]">
              Deposit
            </h1>
            <h2 class="text-2xl font-bold mb-3 mt-2 text-center">
              Другие виды депозитов
            </h2>

            <ul>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
                ° Периодный депозит «РАМЗ»{" "}
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
                ° Периодный депозит “Даромади доимӣ”
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
                ° Детский депозит “ Тифли Заррин ”
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
                ° Периодный депозит “Ҷамъшаванда”
              </li>
              <li className="text-[14px] font-[600]  mt-[2%] ml-[5%]">
                ° Периодный депозит “Ояндаи нек”
              </li>
            </ul>
            <button className="text-[white] bg-gray-900 w-[50%] sx:h-[10vh] ml-[23%] mb-[5%] h-[7vh] rounded-[5px] mt-[5%] font-[500]">
              Подробности <ArrowRightAltIcon />
            </button>
          </div>
        </div>
      </div>
    </>

  )
}
export default Deposits;