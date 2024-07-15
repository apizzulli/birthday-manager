import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import '../style/CalendarTileStyle.css';
import { useState } from 'react';

export default function CalendarTile({date}) {
    const [hovered, setHovered] = useState(false);

    return(
        <div class="calendar-tile" onMouseOver={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)}style={{width: '8%', backgroundColor: hovered ? '#D8F8FE' : 'white'}}>
            <h1>{date}</h1>
        </div>
    )
}