import './style/CalendarTileStyle.css';
import { useState } from 'react';

export default function CalendarTile({date}) {
    const [hovered, setHovered] = useState(false);

    function handleHover() {
        setHovered(!hovered);
    }

    return(
        <div onMouseOver={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}style={{width: '12%', backgroundColor: hovered ? '#D8F8FE' : 'white'}}>
            <h1>{date}</h1>
        </div>
    )
}