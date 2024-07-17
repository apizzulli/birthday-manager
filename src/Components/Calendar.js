import CalendarTile from "./CalendarTile";
import '../style/calendar_style.css';
import { useState, useContext } from 'react';
import Modal from '@mui/joy/Modal';
import BirthdayModal from "./BirthdayModal";

export default function Calendar() {
    const[modal, toggleModal] = useState(false);
    const handleClick = () =>{
        console.log('hi');
    }
    return(
        <div >
            <div>
                <div style={{float:'left',marginLeft:'8%',display: "block"}}>
                    <h1>Month</h1>
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