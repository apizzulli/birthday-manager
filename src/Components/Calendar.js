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
                    <CalendarTile date={1} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={2} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={3} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={4} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={5} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={6} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={7} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={8} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={9} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={10} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={11} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={12} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={13} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={14} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={15} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={16} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={17} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={18} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={19} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={20} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={21} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={22} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={23} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={24} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={25} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={26} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={28} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={29} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={30} month ={selectedMonth}></CalendarTile>
                    <CalendarTile date={31} month ={selectedMonth} ></CalendarTile>
                </div>
            </div> 
        </div>
    )
}