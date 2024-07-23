import CalendarTile from "./CalendarTile";
import '../style/calendar_style.css';
import { useState, useContext } from 'react';
import Modal from '@mui/joy/Modal';
import BirthdayModal from "./BirthdayModal";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Calendar() {
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
        setSelectedMonth(event.currentTarget.innerText);
    }
  
    return(
        <div >
            <div>
                <div style={{float: 'left',marginLeft:"7%"}}>
                    <h1>{selectedMonth}</h1>
                    <ArrowDropDownIcon onClick={handleMenuOpen}></ArrowDropDownIcon>
                    <Menu anchorEl={anchorEl}
                        open={open}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}>   
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>February</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>March</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>April</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>May</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>June</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>July</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>August</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>September</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>October</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>November</MenuItem>
                        <MenuItem onClick={(event)=>handleMonthSelect(event)}>December</MenuItem>
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
                    <CalendarTile date={27}></CalendarTile>
                    <CalendarTile date={28}></CalendarTile>
                    <CalendarTile date={29}></CalendarTile>
                    <CalendarTile date={30}></CalendarTile>
                </div>
            </div> 
        </div>
    )
}