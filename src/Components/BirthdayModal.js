import '../style/BirthdayModal.css';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext, useState } from 'react';

export default function BirthdayModal(props) {
    const [birthdayCreated, setBirthdayCreated] = useState(false);
    const [ displayError, setDisplayError ] = useState(false);
    const [ name, setName ] = useState(null);

    function handleSubmit(event) {
        const firstName = event.currentTarget.form.name.value;
        if(name === "")
            setDisplayError(true);
        else{
            setName(firstName);
            props.dateSelected.setSelected(true);    
        }
    }

    return(   
        <div class="modal-wrapper">
            <div style={{width:'100%', overflow:'auto'}}><CancelIcon onClick={()=>props.closeModal(false)} style={{float:'right', marginRight:'5px',marginTop:'5px'}}></CancelIcon> </div>
            <form class="modal-form" style={{visibility: name === null ? 'visible': 'hidden'}}>
                <h1>Fill out information for the birthday</h1>
                <div class="input-wrapper" > 
                    <Input name="name" sx={{width: 300, marginBottom: '3%'}} placeholder="Name" error={displayError} helperText={"A name is required."} required></Input>
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Note"> </Input>
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Reminder"> </Input>
                    <Button onClick={handleSubmit} sx={{width: 100, marginBottom: '3%', display: name === null ? 'block': 'none', marginTop:'6%'}} variant = "plain">Create</Button>
                    <h3 style={{display: name === null ? 'none': 'block'}}>Birthday Created!</h3>
                </div>
            </form>
            <div style={{display: name === null ? 'none': 'block'}}>
                <h1>{name}'s Birthday</h1>
                <h3>{props.month} {props.date}</h3>
            </div> 
        </div>
    );
}