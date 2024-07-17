import '../style/BirthdayModal.css';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext, useState } from 'react';

export default function BirthdayModal({props}) {
    const [birthdayCreated, setBirthdayCreated] = useState(false);
    return(   
        <div class="modal-wrapper">
            <div style={{width:'100%', overflow:'auto'}}><CancelIcon onClick={()=> props.toggle(false)} style={{float:'right', marginRight:'5px',marginTop:'5px'}}></CancelIcon> </div>
            <div class="birthday-modal">
                <h1>Fill out information for the birthday</h1>
                <div class="input-wrapper">
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Name" required></Input>
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Note"> </Input>
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Reminder"> </Input>
                    <Button onClick={()=> {setBirthdayCreated(true)}} sx={{width: 100, marginBottom: '3%', display: birthdayCreated ? 'none': 'block', marginTop:'6%'}} variant = "plain" type="submit">Create</Button>
                    <h3 style={{display: birthdayCreated ? 'block': 'none'}}>Birthday Created!</h3>
                </div>
            </div> 
        </div>
    );
}