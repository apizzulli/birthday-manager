import CalendarTile from "./CalendarTile";
import '../style/calendar_style.css';
import { useState, useContext } from 'react';
import Modal from '@mui/joy/Modal';
import BirthdayModal from "./BirthdayModal";

export default function Calendar(props) {
    const [thirtyOneDays, setThirtyOneDays] = useState(true);
    const[modal, toggleModal] = useState(false);
  
    return(
        <div style={{width:'100%'}}>
            <div style={{width:'100%'}}>
                <br></br><br></br>
                <div class="row1">
                    <CalendarTile month={props.month} date={1} ></CalendarTile>
                    <CalendarTile month={props.month} date={2} ></CalendarTile>
                    <CalendarTile month={props.month} date={3} ></CalendarTile>
                    <CalendarTile month={props.month} date={4} ></CalendarTile>
                    <CalendarTile month={props.month} date={5} ></CalendarTile>
                    <CalendarTile month={props.month} date={6} ></CalendarTile>
                    <CalendarTile month={props.month} date={7} ></CalendarTile>
                    <CalendarTile month={props.month} date={8} ></CalendarTile>
                    <CalendarTile month={props.month} date={9} ></CalendarTile>
                    <CalendarTile month={props.month} date={10} ></CalendarTile>
                    <CalendarTile month={props.month} date={11} ></CalendarTile>
                    <CalendarTile month={props.month} date={12} ></CalendarTile>
                    <CalendarTile month={props.month} date={13} ></CalendarTile>
                    <CalendarTile month={props.month} date={14} ></CalendarTile>
                    <CalendarTile month={props.month} date={15} ></CalendarTile>
                    <CalendarTile month={props.month} date={16} ></CalendarTile>
                    <CalendarTile month={props.month} date={17} ></CalendarTile>
                    <CalendarTile month={props.month} date={18} ></CalendarTile>
                    <CalendarTile month={props.month} date={19} ></CalendarTile>
                    <CalendarTile month={props.month} date={20} ></CalendarTile>
                    <CalendarTile month={props.month} date={21} ></CalendarTile>
                    <CalendarTile month={props.month} date={22} ></CalendarTile>
                    <CalendarTile month={props.month} date={23} ></CalendarTile>
                    <CalendarTile month={props.month} date={24} ></CalendarTile>
                    <CalendarTile month={props.month} date={25} ></CalendarTile>
                    <CalendarTile month={props.month} date={26} ></CalendarTile>
                    <CalendarTile month={props.month} date={28} ></CalendarTile>
                    <CalendarTile month={props.month} date={29} ></CalendarTile>
                    <CalendarTile month={props.month} date={30} ></CalendarTile>
                    <CalendarTile month={props.month} date={31}  ></CalendarTile>
                </div>
            </div> 
        </div>
    )
}