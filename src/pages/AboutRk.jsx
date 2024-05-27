import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdRukovodstva } from "../reducers/todolist/todolist";
import "../App.css";
// imports odf accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// imports image in assets
import Dustov from "../assets/DUSTOVSAFARBEK.png"


const AboutRk = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByIdRukovodstva(id));
  }, [dispatch]);
  let byId = useSelector((state) => state.sanduk.byId);
  console.log(byId);
  console.log(id);

  return (
    <div className="div-about p-[50px] sx:p-[10px] sx:h-[auto]">
      <div className="flex justify-between items-center p-[50px] rounded-2xl  sx:flex-wrap sx:flex-row-reverse ">
        <div className="w-[48%] sx:w-[100%]">
          <h1 className="text-[60px] sx:text-[40px] font-[700] text-[orange]">{byId.name}</h1>
          <h1 className="text-[20px] font-[500] pt-[20px] text-[#00000098]">
            {byId.description}
          </h1>
          <h1 className="text-[18px] pt-[30px] font-[500] text-[#00000096]">
            {byId.about}
          </h1>
        </div>
        <div className="w-[48%] sx:w-[100%] sx:pt-[30px]">
          <img
            className="w-[90%] h-[60vh] sx:w-[100%] rounded-3xl object-cover"
            src={Dustov}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutRk;
