import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import '../style/calendar_style.css';
import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Modal from '@mui/joy/Modal';
import BirthdayModal from './BirthdayModal';
import { MONTHS } from './CalendarView';

export default function CalendarTile({date, month}) {
    const[ name, setName ] = useState(null);
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(false);
    const[modalVisible, setModalVisible] = useState(false);
    let help = false;
    const handleCloseModal = () => {
        setModalVisible(false);
        help = true;
    }

    return(
        <div onMouseDown={()=> setModalVisible(true)}class="calendar-tile" onMouseOut={()=>setHovered(false)}onMouseMove={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)}
            style={{backgroundColor: hovered ? '#D8F8FE' : 'white', 
                    display: ((month==MONTHS.APRIL || month==MONTHS.JUNE || month==MONTHS.SEPTEMBER || month==MONTHS.NOVEMBER)&& date==31) ? 'none' : 'flex'
                }}
            >
            <StarIcon style={{float:'left',marginRight:'7%',height:'25%', width:'25%', visibility: name != null ? 'visible' : 'hidden'}}></StarIcon>
            <h1 >{date}</h1>
            <Modal open={modalVisible}><BirthdayModal name={name} setName={setName} month={month} date={date} dateSelected={{selected, setSelected}} closeModal={setModalVisible}></BirthdayModal></Modal>
        </div>
    )
}