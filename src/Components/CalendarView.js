import { useState, useContext, createContext } from "react";
import Calendar from './Calendar.js';
import BirthdayModal from './BirthdayModal.js';
import Modal from '@mui/joy/Modal';

export default function CalendarView () {
    const [birthdayModalToggle, setBirthdayModalToggle ] = useState(false);
    return(
        <div>
            <Calendar modalToggle={setBirthdayModalToggle}></Calendar>
            <Modal open={birthdayModalToggle} close={birthdayModalToggle}><BirthdayModal modalToggle={setBirthdayModalToggle}></BirthdayModal></Modal>
        </div>
    );
}