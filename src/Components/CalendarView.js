import { useState, useContext, createContext } from "react";
import Calendar from './Calendar.js';
import BirthdayModal from './BirthdayModal.js';
import Modal from '@mui/joy/Modal';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const MONTHS = {
    JANUARY: "January",
    FEBRUARY : "February",
    MARCH : "March",
    APRIL : "April",
    MAY : "May",
    JUNE : "June",
    JULY : "July",
    AUGUST : "August",
    SEPTEMBER : "September",
    OCTOBER : "October",
    NOVEMBER : "November", 
    DECEMBER : "December"
}

export default function CalendarView () {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(MONTHS.JANUARY);
    let open = Boolean(anchorEl);

    const handleMonthSelect = (event) => {
        let month = event.currentTarget.innerText;
        if( month==="April" || month==="June" || month==="September" || month==="November"){
            //setThirtyOneDays(false);
        }
        setSelectedMonth(month);
        setAnchorEl(null);
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget.innerHTML);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <h3 class="title">Welcome to the Calendar Manager. Here, you can manage all of your birthdays
                in a convenient calendar view.
            </h3>
            <div style={{float: 'left',marginLeft:"7%", display:'flex', alignItems:'center', width:'15%', columnGap:'5%'}}>
                <h1>{selectedMonth}</h1>
                <Menu anchorEl={anchorEl}
                    open={open}
                   >   
                    <MenuItem selected={selectedMonth===MONTHS.JANUARY} onClick={(event)=>handleMonthSelect(event)}>January</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.FEBRUARY} onClick={(event)=>handleMonthSelect(event)}>February</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.MARCH} onClick={(event)=>handleMonthSelect(event)}>March</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.APRIL} onClick={(event)=>handleMonthSelect(event)}>April</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.MAY} onClick={(event)=>handleMonthSelect(event)}>May</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.JUNE} onClick={(event)=>handleMonthSelect(event)}>June</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.JULY} onClick={(event)=>handleMonthSelect(event)}>July</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.AUGUST} onClick={(event)=>handleMonthSelect(event)}>August</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.SEPTEMBER} onClick={(event)=>handleMonthSelect(event)}>September</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.OCTOBER} onClick={(event)=>handleMonthSelect(event)}>October</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.NOVEMBER} onClick={(event)=>handleMonthSelect(event)}>November</MenuItem>
                    <MenuItem selected={selectedMonth===MONTHS.DECEMBER} onClick={(event)=>handleMonthSelect(event)}>December</MenuItem>
                </Menu>
                    <div style={{width:'50%'}}>
                        <ArrowDropDownIcon style={{display:anchorEl ? 'none': 'block'}}onClick={handleMenuOpen}></ArrowDropDownIcon>
                        <ArrowDropUpIcon style={{display:anchorEl ? 'block': 'none'}}onClick={()=>setAnchorEl(null)}></ArrowDropUpIcon>
                    </div>
                </div>
            <div  style={{visible: selectedMonth===MONTHS.JANUARY ? 'visible': 'hidden'}}><Calendar month={MONTHS.JANUARY}></Calendar></div>
            <Calendar style={{visible: selectedMonth===MONTHS.FEBRUARY ? 'visible': 'hidden'}} month={MONTHS.FEBRUARY}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.MARCH ? 'visible': 'hidden'}} month={MONTHS.MARCH}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.APRIL ? 'visible': 'hidden'}} month={MONTHS.APRIL}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.MAY ? 'visible': 'hidden'}}  month={MONTHS.MAY}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.JUNE ? 'visible': 'hidden'}} month={MONTHS.JUNE}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.JULY ? 'visible': 'hidden'}} month={MONTHS.JULY}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.AUGUST ? 'visible': 'hidden'}}  month={MONTHS.AUGUST}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.SEPTEMBER ? 'visible': 'hidden'}} month={MONTHS.SEPTEMBER}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.OCTOBER ? 'visible': 'hidden'}}  month={MONTHS.OCTOBER}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.NOVEMBER ? 'visible': 'hidden'}} month={MONTHS.NOVEMBER}></Calendar>
            <Calendar style={{visible: selectedMonth===MONTHS.DECEMBER ? 'visible': 'hidden'}} month={MONTHS.DECEMBER}></Calendar>
        </div>
    );
}