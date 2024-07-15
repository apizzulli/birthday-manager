import '../style/BirthdayModal.css';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import CancelIcon from '@mui/icons-material/Cancel';

export default function BirthdayModal() {
    return(   
        <div class="modal-wrapper">
            <div style={{width:'100%', overflow:'auto'}}><CancelIcon style={{float:'right', marginRight:'5px',marginTop:'5px'}}></CancelIcon> </div>
            <div class="birthday-modal">
                <h1>Fill out information for the birthday</h1>
                <div>
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Name" required></Input>
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Note"> </Input>
                    <Input sx={{width: 300, marginBottom: '3%'}} placeholder="Reminder"> </Input>
                    <Button sx={{width: 100, marginBottom: '3%', marginLeft:'auto', marginRight: 'auto'}} variant = "plain" type="submit">Create</Button>
                </div>
            </div> 
        </div>
    );
}