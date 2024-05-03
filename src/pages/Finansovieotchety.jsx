import React from "react";
// imports on assets image
import otchet1 from "../assets/otchet.pdf";
import otchet2 from "../assets/otchet2.pdf";

const Finansovieotchety = () => {
  return (
    <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sx:p-[10px] dark:bg-gray-800 dark:text-[white]">
      <h1 className="text-[30px] text-center mb-[30px] font-[500] text-[#EBA707] sx:text-[20px]">
        Нащи Финансовые Отчеты{" "}
      </h1>
      <div className="flex justify-between items-center h-[330vh] flex-wrap gap-[30px]">
        <div className="w-[100%] h-[50%]">
          <embed
            className="w-[100%] h-[100%]"
            src={otchet1}
            type="application/pdf"
          />
        </div>
        <div className="w-[100%] h-[50%]">
          <embed
            className="w-[100%] h-[90%]"
            src={otchet2}
            type="application/pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Finansovieotchety;