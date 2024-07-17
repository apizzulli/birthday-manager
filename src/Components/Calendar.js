import CalendarTile from "./CalendarTile";
import '../style/calendar_style.css';
import { useState, useContext } from 'react';

export default function Calendar({modalToggle, tileSelected}) {
    return(
        <div >
            <div>
                <div style={{float:'left',marginLeft:'8%',display: "block"}}>
                    <h1>Month</h1>
                </div>
                <br></br><br></br>
                <div class="row1">
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={1}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={2}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={3}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={4}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={5}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={6}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={7}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={8}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={9}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={10}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={11}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={12}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={13}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={14}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={15}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={16}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={17}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={18}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={19}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={20}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={21}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={22}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={23}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={24}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={25}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={26}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={27}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={28}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={29}></CalendarTile>
                    <CalendarTile selected={tileSelected} modalToggle={modalToggle} date={30}></CalendarTile>
                </div>
            </div> 
        </div>
    )
}