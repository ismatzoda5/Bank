import { Link, Outlet } from "react-router-dom";
import Switcher from "../components/Swicher";

// imports of Assets Image
import logo from "../assets/logo.png";

// imports of select mui
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const Layout = () => {
  // functions on select
  const [age, setAge] = useState("");
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  return (
    <div>
      <div className="pl-[80px] dark:bg-gray-900 bg:text-[white] text-[19px]  bg-[#0C0C0C] text-[#EBA707]  pr-[80px] pt-[20px] pb-[20px] flex justify-between items-center">
        <div className="w-[100%] h-[100%]">
          <img className="w-[100%] h-[100%]" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-[30px]">
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Частным лицам
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">Бизнесу</h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            О компании
          </h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">Новости</h1>
          <h1 className="hover:text-[white] cursor-pointer p-[5px]">
            Контакты
          </h1>
        </div>
        <div className="flex items-center gap-[30px]">
          <div>
            <Box sx={{ minWidth: 70, outline: "none" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}></MenuItem>
                  <MenuItem value={20}></MenuItem>
                  <MenuItem value={30}></MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <Switcher />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
