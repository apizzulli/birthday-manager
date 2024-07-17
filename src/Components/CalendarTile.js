import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import '../style/calendar_style.css';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

export default function CalendarTile({modalToggle, date, selected}) {
    const [hovered, setHovered] = useState(false);
    //const [selected, setSelected] = useState(false);

    const handleClick =()=>{
        modalToggle(true);
    }

    return(
        <div class="calendar-tile" onClick={handleClick} onMouseOver={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)}style={{backgroundColor: hovered ? '#D8F8FE' : 'white'}}>
            <StarIcon style={{float:'left',marginRight:'7%',height:'25%', width:'25%', visibility: selected ? 'visible' : 'hidden'}}></StarIcon>
            <h1>{date}</h1>
        </div>
    )
}