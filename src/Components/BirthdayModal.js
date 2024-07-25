import '../style/birthday_modal_style.css';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext, useState } from 'react';
import CakeIcon from '@mui/icons-material/Cake';

export default function BirthdayModal(props) {
    const [birthdayCreated, setBirthdayCreated] = useState(false);
    const [ displayError, setDisplayError ] = useState(false);
    let ordinals = "";
    

    function handleSubmit(event) {
        const firstName = event.currentTarget.form.name.value;
        if(props.name === "")
            setDisplayError(true);
        else{
            props.setName(firstName);
            props.dateSelected.setSelected(true);    
        }
    }

    return(   
        <div class="new-birthday-wrapper">
            <div style={{width:'100%'}}><CancelIcon onClick={()=>props.closeModal(false)} style={{float:'right', marginRight:'5px',marginTop:'5px'}}></CancelIcon> </div>
            <div style={{display: props.name === null ? 'block': 'none'}}>
                <form class="modal-form">
                    <h1>Fill out information for the birthday</h1>
                    <div class="input-wrapper" > 
                        <Input name="name" sx={{width: 300, marginBottom: '3%'}} placeholder="Name" error={displayError} helperText={"A name is required."} required></Input>
                        <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Note"> </Input>
                        <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Reminder"> </Input>
                        <Button onClick={handleSubmit} sx={{width: 100, marginBottom: '3%', display: props.name === null ? 'block': 'none', marginTop:'6%'}} variant = "plain">Create</Button>
                        <h3 style={{display: props.name === null ? 'none': 'block'}}>Birthday Created!</h3>
                    </div>
                </form>
            </div>
            <div class="birthday-info" style={{display: props.name === null ? 'none': 'flex'}}>
                <h2>{props.month} {props.date}{props.ordinal}</h2>
                <h2>{props.name}'s Birthday</h2>
                <CakeIcon></CakeIcon>
            </div> 
        </div>
    );
}