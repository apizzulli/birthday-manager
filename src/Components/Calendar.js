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
                    <CalendarTile modal={toggleModal} date={1}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={2}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={3}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={4}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={5}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={6}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={7}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={8}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={9}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={10}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={11}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={12}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={13}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={14}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={15}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={16}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={17}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={18}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={19}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={20}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={21}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={22}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={23}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={24}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={25}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={26}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={27}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={28}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={29}></CalendarTile>
                    <CalendarTile modal={toggleModal} date={30}></CalendarTile>
                    <Modal open={modal} close={modal}><BirthdayModal toggle={toggleModal}></BirthdayModal></Modal>
                </div>
            </div> 
        </div>
    )
}