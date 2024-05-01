import React from 'react'

// Images
import cards from "../assets/cards.svg"

// Icons
import SecurityIcon from '@mui/icons-material/Security';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


import '../App.css';

const BankCard = () => {
  return (
    <>
   <div className="card ">
       <div className="w-[90%] m-auto flex justify-between items-center">
       <div className="w-[55%] text-gray-800">
            <h1 className='text-[60px] font-[900]'>Кредитная карта, какой она должна быть.</h1>
            <p className='text-[21px] font-[700] font-serif mt-[3%]'>Без аннуитета вы получаете кэшбэк на все ваши покупки и доступ к месяцам без процентов.</p>
            <button className='bg-[#fcd450] w-[30%] mb-[5%] rounded-[10px] mt-[4%] h-[10vh] text-[18px] font-[700]'>Оформить карту</button>
        </div>
        <div className="w-[40%]">
           <img src={cards} alt="" />
        </div>
       </div>
   </div>
   <div className=" w-[65%] mt-[5%] m-auto text-center text-gray-900 ">
    <h1 className='text-[45px] font-[800]'>Банковские карты</h1>
    <p className='text-[16px] mt-[3%] font-[500]'>Банковская карта — это платежный инструмент, позволяющий оплачивать покупки в онлайн и офлайн магазинах, снимать наличные, пополнять свой счет в банке, переводить деньги друзьям и совершать другие виды операций с деньгами.</p>
   </div>
   <div className="w-[90%] m-auto flex justify-between mt-[10%] ">
      <div className="bg-slate-100 w-[20%] rounded-[5px]">
          <h1 className='w-[45%] h-[17vh] rounded-[50%] pt-[10px] text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]'><SecurityIcon sx={{fontSize:"80px"}} /></h1>
          <p className='text-center text-[16px] font-[700] mt-[5%] mb-[7%]'>Безопасное хранение
денежных средств</p>
      </div>
      <div className="bg-slate-100 w-[20%] rounded-[5px]">
          <h1 className='w-[45%] h-[17vh] rounded-[50%] pt-[10px] text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]'><PhoneIphoneIcon sx={{fontSize:"80px"}} /></h1>
          <p className='text-center text-[16px] font-[700] mt-[5%] mb-[7%]'>Онлайн платежи c помощью
мобильного кошелька</p>
      </div>
      <div className="bg-slate-100 w-[20%] rounded-[5px]">
          <h1 className='w-[45%] h-[17vh] rounded-[50%] pt-[10px] text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]'><CreditCardIcon sx={{fontSize:"80px"}} /></h1>
          <p className='text-center text-[16px] font-[700] mt-[5%] mb-[7%]'>Доступ к деньгам
24/7</p>
      </div>
      <div className="bg-slate-100 w-[20%] rounded-[5px]">
          <h1 className='w-[45%] h-[17vh] rounded-[50%] pt-[10px] text-center bg-[#fcd450] hover:text-[white] text-gray-800 ml-[27%] mt-[-20%]'><DescriptionIcon sx={{fontSize:"80px"}} /></h1>
          <p className='text-center text-[16px] font-[700] mt-[5%] mb-[7%]'>Контроль
расходов</p>
      </div>
   </div>

   <div className="w-[90%] m-auto mt-[8%]  bg-slate-100 rounded-[20px] ">
<div className="w-[90%] m-auto flex justify-between ">
<div className="w-[45%] mt-[3%]">
   <h1 className='text-[40px] font-[700]'>Банковские карты</h1>
   <p className='text-[16px] leading-6 mt-[4%] font-[400]'>Банковская карта — это платежный инструмент, позволяющий оплачивать покупки в онлайн и офлайн магазинах, снимать наличные, пополнять свой счет в банке, переводить деньги друзьям и совершать другие виды операций с деньгами.</p>
   <button className='bg-[#fcd450] w-[40%] mb-[5%] rounded-[10px] mt-[7%] h-[10vh] text-[18px] font-[700]'>Хочу сейчас <ArrowRightAltIcon/></button>
   
</div>
<img className='w-[50%] h-[45vh] mb-[5%] mt-[5%]' src={cards} alt="" />
</div>
</div>

   <div className="w-[90%] m-auto flex justify-between items-center mt-[10%]">
    <div className="w-[30%]">
    <img src={cards} alt="" />
    </div>
    <div className="w-[50%]">
    <p className='text-[18px] font-[500] font-serif '>Имея банковскую карту от ЗАО МДО «Сандук», вы можете не носить с собой большие суммы наличности, но в то же время всегда иметь возможность совершить необходимые покупки и получать денежные средства наличностью через банкоматы и филиальную сеть ЗАО МДО «Сандук».</p>
    <p className='text-[18px] font-[500] font-serif  mt-[5%] '>  С помощью банковской карты ЗАО МДО «Сандук» вы имеете круглосуточный доступ к своим финансам благодаря большой сети банкоматов и POS-терминалов по Республике Таджикистан которые принимают карты «Корти милли». </p>
    
    </div>
   </div>
    </>
  )
}

export default BankCard