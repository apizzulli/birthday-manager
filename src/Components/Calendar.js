import CalendarTile from "./CalendarTile";
import '../style/calendar_style.css';
import { useState, useContext } from 'react';
import Modal from '@mui/joy/Modal';
import BirthdayModal from "./BirthdayModal";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function Calendar() {
    const [thirtyOneDays, setThirtyOneDays] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState("January");
    const[modal, toggleModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    let open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget.innerHTML);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleMonthSelect = (event) => {
        let month = event.currentTarget.innerText;
        if( month==="April" || month==="June" || month==="September" || month==="November"){
            setThirtyOneDays(false);
        }
        setSelectedMonth(month);
        setAnchorEl(null);
    }
  
    return(
        <div style={{width:'100%'}}>
            <div style={{width:'100%'}}>
                <div style={{float: 'left',marginLeft:"7%", display:'flex', alignItems:'center', width:'15%', columnGap:'10%'}}>
                    <h1 style={{width:'50%'}}>{selectedMonth}</h1>
                    <div style={{width:'50%'}}>
                        <ArrowDropDownIcon style={{display:anchorEl ? 'none': 'block'}}onClick={handleMenuOpen}></ArrowDropDownIcon>
                        <ArrowDropUpIcon style={{display:anchorEl ? 'block': 'none'}}onClick={()=>setAnchorEl(null)}></ArrowDropUpIcon>
                    </div>
                    <Menu anchorEl={anchorEl}
                        open={open}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}>   
                        <MenuItem selected={selectedMonth==="January"} onClick={(event)=>handleMonthSelect(event)}>January</MenuItem>
                        <MenuItem selected={selectedMonth==="February"} onClick={(event)=>handleMonthSelect(event)}>February</MenuItem>
                        <MenuItem selected={selectedMonth==="March"} onClick={(event)=>handleMonthSelect(event)}>March</MenuItem>
                        <MenuItem selected={selectedMonth==="April"} onClick={(event)=>handleMonthSelect(event)}>April</MenuItem>
                        <MenuItem selected={selectedMonth==="May"} onClick={(event)=>handleMonthSelect(event)}>May</MenuItem>
                        <MenuItem selected={selectedMonth==="June"} onClick={(event)=>handleMonthSelect(event)}>June</MenuItem>
                        <MenuItem selected={selectedMonth==="July"} onClick={(event)=>handleMonthSelect(event)}>July</MenuItem>
                        <MenuItem selected={selectedMonth==="August"} onClick={(event)=>handleMonthSelect(event)}>August</MenuItem>
                        <MenuItem selected={selectedMonth==="September"} onClick={(event)=>handleMonthSelect(event)}>September</MenuItem>
                        <MenuItem selected={selectedMonth==="October"} onClick={(event)=>handleMonthSelect(event)}>October</MenuItem>
                        <MenuItem selected={selectedMonth==="November"} onClick={(event)=>handleMonthSelect(event)}>November</MenuItem>
                        <MenuItem selected={selectedMonth==="December"} onClick={(event)=>handleMonthSelect(event)}>December</MenuItem>
                    </Menu>
                </div>
                <br></br><br></br>
                <div class="row1">
                    <CalendarTile date={1}></CalendarTile>
                    <CalendarTile date={2}></CalendarTile>
                    <CalendarTile date={3}></CalendarTile>
                    <CalendarTile date={4}></CalendarTile>
                    <CalendarTile date={5}></CalendarTile>
                    <CalendarTile date={6}></CalendarTile>
                    <CalendarTile date={7}></CalendarTile>
                    <CalendarTile date={8}></CalendarTile>
                    <CalendarTile date={9}></CalendarTile>
                    <CalendarTile date={10}></CalendarTile>
                    <CalendarTile date={11}></CalendarTile>
                    <CalendarTile date={12}></CalendarTile>
                    <CalendarTile date={13}></CalendarTile>
                    <CalendarTile date={14}></CalendarTile>
                    <CalendarTile date={15}></CalendarTile>
                    <CalendarTile date={16}></CalendarTile>
                    <CalendarTile date={17}></CalendarTile>
                    <CalendarTile date={18}></CalendarTile>
                    <CalendarTile date={19}></CalendarTile>
                    <CalendarTile date={20}></CalendarTile>
                    <CalendarTile date={21}></CalendarTile>
                    <CalendarTile date={22}></CalendarTile>
                    <CalendarTile date={23}></CalendarTile>
                    <CalendarTile date={24}></CalendarTile>
                    <CalendarTile date={25}></CalendarTile>
                    <CalendarTile date={26}></CalendarTile>
                    <CalendarTile date={28}></CalendarTile>
                    <CalendarTile date={29}></CalendarTile>
                    <CalendarTile date={30}></CalendarTile>
                    <CalendarTile date={31} month ={selectedMonth} ></CalendarTile>
                </div>
            </div> 
        </div>
    )
}