import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import '../style/calendar_style.css';
import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Modal from '@mui/joy/Modal';
import BirthdayModal from './BirthdayModal';

export default function CalendarTile({date}) {
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(false);
    const[modalVisible, setModalVisible] = useState(false);
    let help = false;
    const handleCloseModal = () => {
        setModalVisible(false);
        help = true;
    }

    // useEffect(()=>{
    //     if(help)
    //         setModalVisible(false);
    //     console.log("modalVisible = "+modalVisible);
    // });

    return(
        <div class="calendar-tile" onMouseOver={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)}style={{backgroundColor: hovered ? '#D8F8FE' : 'white'}}>
            <StarIcon style={{float:'left',marginRight:'7%',height:'25%', width:'25%', visibility: selected ? 'visible' : 'hidden'}}></StarIcon>
            <h1 onClick={()=> setModalVisible(true)}>{date}</h1>
            <Modal open={modalVisible}><BirthdayModal closeModal={setModalVisible}></BirthdayModal></Modal>
        </div>
    )
}