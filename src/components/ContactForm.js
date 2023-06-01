import { Box, TextField } from "@mui/material"
import { StyledButton } from "./styledComponents/StyledComponents"


export const ContactForm = ({ button }) => {
    return <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} noValidate
        autoComplete="off" >
        <Box sx={{ display: 'flex', gap: '1rem' }} >
            <TextField fullWidth variant="outlined" type="text" name="firstName" label="First Name" size="small" />
            <TextField fullWidth variant="outlined" type="text" name="secondName" label="Second Name" size="small" />
        </Box>
        <TextField fullWidth variant="outlined" type="email" name="email" label="Email" size="small" />
        <TextField fullWidth variant="outlined" type="text" name="message" label="Message" size="small" multiline rows={4} />
        <StyledButton variant="contained" type="submit" fullWidth >{button}</StyledButton>
    </Box>
}