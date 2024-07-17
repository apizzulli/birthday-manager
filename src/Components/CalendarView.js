import { useState, useContext, createContext } from "react";
import Calendar from './Calendar.js';
import BirthdayModal from './BirthdayModal.js';
import Modal from '@mui/joy/Modal';

export default function CalendarView () {
    const [birthdayModalToggle, setBirthdayModalToggle ] = useState(false);
    const [tileSelected, setTileSelected] = useState(false);

    return(
        <div>
            <h3 class="title">Welcome to the Calendar Manager. Here, you can manage all of your birthdays
                in a convenient calendar view.
            </h3>
            <Calendar modalToggle={setBirthdayModalToggle} tileSelected={tileSelected}></Calendar>
            <Modal open={birthdayModalToggle} close={birthdayModalToggle}><BirthdayModal birthdayCreated={setTileSelected} modalToggle={setBirthdayModalToggle}></BirthdayModal></Modal>
        </div>
    );
}