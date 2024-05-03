import React, { useEffect, useRef, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css"
import { Button, Slider } from '@mui/material';


const Credits = () => {


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
    setSlideLoanrValue(parseInt(e.target.value))
  };
  const handleLoanClick = (amount) => {
    setLoancredit(amount);
    setSlideLoanrValue(amount);
  };

  const [interestRate, setInterestRate] = useState(1);
  const [sliderInterestValue, setSliderInterestValue] = useState(1)
  const handleSliderChange3 = (e) => {
    setInterestRate(parseInt(e.target.value));
    setSliderInterestValue(parseInt(e.target.value))
  };
  const handleInterestClick = (amount) => {
    setInterestRate(amount);
    setSliderInterestValue(amount);
  }

  useEffect(() => {
    AOS.init()
  }, [])


  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numPayments = loancredit;
    const loanAmountWithInterest = creditAmount * (1 + monthlyInterestRate) ** numPayments;
    const monthlyPayment = loanAmountWithInterest / numPayments;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };


  return (
    <div className='pt-[5%]'>

      <div className='flex flex-col gap-[30px] p-[0px_30px]'>
        <div className='flex gap-[5px] items-center ml-[7%]'>
          <div className='flex gap-[5px] items-center '>
            <Link to={"/"}>
              <HomeIcon className='text-[#746D66]' />
              /
            </Link>
          </div>
          <h1 className='text-[#222222]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Кредиты</h1>
        </div>
        <div data-aos="zoom-in-down" className='w-[90%] m-auto bg-[#F9E5A6] shadow-lg rounded-[40px] justify-evenly flex items-center'>
          <div className='flex flex-col gap-[10px] w-[480px]'>
            <h1 className='text-[40px] font-[700] ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Кредиты для вас</h1>
            <p className='text-[19px] font-[400] '>МДО "Сандук" предлагает широкий спектр кредитных продуктов. Выберете кредит, который наилучшим образом соответствует вашим потребностям и требованиям</p>
          </div>
          <div>
            <img className='relative top-[3.25rem] left-[8.25rem] drop-shadow-2xl' src="src/assets/headerPages.5e298fba.png.svg" alt="" />
          </div>
        </div>
      </div>

<div className='p-[88px_100px] m-auto flex flex-col gap-[60px] mt-[5%]'>
        <div className='bg-[#F9E5A6] flex items-start h-[260px] rounded-[30px] p-[30px] border-[2px] border-solid border-[rgb(208,210,213)] translate-[translate(0px,0px)] cursor-pointer relative transition-all hover:border-[#000000] hover:shadow-xl duration-500 ease-in-out delay-200 hover:-translate-y-2'>
          <div>
            <img className='relative drop-shadow-2xl right-[3.5rem] bottom-[3.5rem]' src="src/assets/consumer.f42193c7.png.svg" alt="" />
          </div>
          <div className='w-[60%] flex flex-col gap-[10px]'>
            <h1 className='text-[28px] font-[600] font-["Open_Sans",_sans-serif] text-[#222]'>Потребительский кредит</h1>
            <p className='text-[18px] text-[#746d66] font-["Open_Sans",_sans-serif] leading-[28px]'>Это кредит, который предоставляется для удовлетворения социальных нужд,
              граждан страны</p>
          </div>
        </div>
        <div className='bg-[#F9E5A6] flex items-start h-[260px] rounded-[30px] p-[30px] border-[2px] border-solid border-[rgb(208,210,213)] translate-[translate(0px,0px)] cursor-pointer relative transition-all hover:border-[#000000] hover:shadow-xl duration-500 ease-in-out delay-200 hover:-translate-y-2'>
          <div>
            <img className='relative drop-shadow-2xl right-[3.5rem] bottom-[3.5rem] w-[330px]' src="src/assets/Remove-bg.ai_1714404921849.png" alt="" />
          </div>
          <div className='w-[60%] flex flex-col gap-[10px]'>
            <h1 className='text-[28px] font-[600] font-["Open_Sans",_sans-serif] text-[#222]'>Бизнес кредит для частных предпринимателей</h1>
            <p className='text-[18px] text-[#746d66] font-["Open_Sans",_sans-serif] leading-[28px]'>Это финансирование, которое банк предоставляет на предпринимательскую деятельность, чтобы закупить партию товара</p>
          </div>
        </div>
        <div className='bg-[#F9E5A6] flex items-start h-[260px] rounded-[30px] p-[30px] border-[2px] border-solid border-[rgb(208,210,213)] translate-[translate(0px,0px)] cursor-pointer relative transition-all hover:border-[#000000] hover:shadow-xl duration-500 ease-in-out delay-200 hover:-translate-y-2'>
          <div>
            <img className='relative right-[3.5rem] drop-shadow-2xl rounded-[30px] bottom-[3.5rem] w-[330px]' src="src/assets/Rynok-zerna-01-860.jpg" alt="" />
          </div>
          <div className='w-[60%] flex flex-col gap-[10px]'>
            <h1 className='text-[28px] font-[600] font-["Open_Sans",_sans-serif] text-[#222]'>Кредит «Рушди Деҳот»</h1>
            <p className='text-[18px] text-[#746d66] font-["Open_Sans",_sans-serif] leading-[28px]'>Это предпринимательские кредиты (Внутренние туристические сервисные компании)</p>
          </div>
        </div>
        <div className='bg-[#F9E5A6] flex items-start h-[260px] rounded-[30px] p-[30px] border-[2px] border-solid border-[rgb(208,210,213)] translate-[translate(0px,0px)] cursor-pointer relative transition-all hover:border-[#000000] hover:shadow-xl duration-500 ease-in-out delay-200 hover:-translate-y-2'>
          <div>
            <img className='relative right-[5.5rem] drop-shadow-2xl rounded-[30px] bottom-[8.2rem] w-[330px]' src="src/assets/Remove-bg.ai_1714405794133.png" alt="" />
          </div>
          <div className='w-[60%] flex flex-col gap-[10px]'>
            <h1 className='text-[28px] font-[600] font-["Open_Sans",_sans-serif] text-[#222]'>Кредит «Сабз»</h1>
            <p className='text-[18px] text-[#746d66] font-["Open_Sans",_sans-serif] leading-[28px]'>Это предпринимательские кредиты (Внутренние туристические сервисные компании)</p>
          </div>
        </div>
      </div>

<div className='p-[88px_100px] bg-[#F9E5A6] flex flex-col gap-[60px]'>
        <h1 className='text-[50px] font-[400]'>Калькулятор потребительского кредита</h1>
        <div className='bg-white w-[100%] rounded-[48px] p-[48px] flex items-start gap-[50px]'>
          <div className='flex flex-col gap-[40px]'>
            <div>
              <div className='p-[33px_27px_0px] w-[92.5%] border-[#FFB700] border-t border-r border-l rounded-[8px]'>
                <div className='flex flex-col gap-[5px]'>
                  <label htmlFor="">Какая сумма вас интересует</label>
                  <div className=''>
                    <input className='outline-none text-[#FFB700] text-[25px] w-[13.6%]' value={creditAmount.toLocaleString()} /> <span>сомони</span>
                  </div>
                </div>
                <Slider value={sliderValue} sx={{ position: "relative", top: "1.3rem", width: "610px", left: "-1.6rem", borderRadius: "0px 0px 10px 10px", color: "#FFB700" }} onChange={handleSliderChange} min={1000} max={50000} />
              </div>
              <div className='mt-[2%] flex gap-[160px]'>
                <span className='cursor-pointer' onClick={() => handleAmountClick(1000)}>1000 сомони</span>
                <span className='cursor-pointer' onClick={() => handleAmountClick(25000)}>25тыс сомони</span>
                <span className='cursor-pointer' onClick={() => handleAmountClick(50000)}>50тыс сомони</span>
              </div>
            </div>
            <div>
              <div className='p-[33px_27px_0px] w-[92.5%] border-[#FFB700] border-t border-r border-l rounded-[8px]'>
                <div className='flex flex-col gap-[5px]'>
                  <label htmlFor="">На какой срок хотите взять кредит</label>
                  <div className=''>
                    <input className='outline-none text-[#FFB700] text-[25px] w-[5%]' value={loancredit.toLocaleString()} /> <span>мес.</span>
                  </div>
                </div>
                <Slider value={sliderloanValue} sx={{ position: "relative", top: "1.3rem", width: "610px", left: "-1.6rem", borderRadius: "0px 0px 10px 10px", color: "#FFB700" }} onChange={handleSliderChange2} min={3} max={36} />
              </div>
              <div className='mt-[2%] flex gap-[230px]'>
                <span className='cursor-pointer' onClick={() => handleLoanClick(3)}>3 мес.</span>
                <span className='cursor-pointer' onClick={() => handleLoanClick(20)}>20 мес.</span>
                <span className='cursor-pointer' onClick={() => handleLoanClick(36)}>36 мес.</span>
              </div>
            </div>
            <div>
              <div className='p-[33px_27px_0px] w-[92.5%] border-[#FFB700] border-t border-r border-l rounded-[8px]'>
                <div className='flex flex-col gap-[5px]'>
                  <label htmlFor="">Процентная ставка</label>
                  <div className=''>
                    <input className='outline-none text-[#FFB700] text-[25px] w-[5%]' value={interestRate.toLocaleString()} /> <span>%</span>
                  </div>
                </div>
                <Slider value={sliderInterestValue} sx={{ position: "relative", top: "1.3rem", width: "610px", left: "-1.6rem", borderRadius: "0px 0px 10px 10px", color: "#FFB700" }} onChange={handleSliderChange3} min={1} max={30} />
              </div>
              <div className='mt-[2%] flex gap-[260px]'>
                <span className='cursor-pointer' onClick={() => handleInterestClick(1)}>1%</span>
                <span className='cursor-pointer' onClick={() => handleInterestClick(15)}>15%</span>
                <span className='cursor-pointer' onClick={() => handleInterestClick(30)}>30%</span>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='w-[500px] p-[50px] rounded-[15px] shadow-[0_0_5px_#FFB700] flex items-end gap-[120px]'>
              <div>
                <h1>Ежемесячный платеж</h1>
                <h1 className='text-[#FFB700] text-[28px]'>{monthlyPayment}</h1>
              </div>

<button className='bg-[#FFB700] p-[10px_20px] rounded-[5px] text-[#FFF] outline-none' onClick={calculateMonthlyPayment}>Contained</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits