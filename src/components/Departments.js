import { Box } from "@mui/material"
import { ImageMasonry } from "./Masonary"
import styled from "@emotion/styled"
import { Reveal } from "./Reveal"

export const Departments = () => {

    const StyledTypography = styled('h3')(({ theme }) => ({
        fontWeight: 'bold',
        fontSize: '3rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        }
    }))

    return <Box>
        <Reveal>
            <StyledTypography variant="h3">Who We Serve</StyledTypography>
        </Reveal>
        <Reveal>
            <ImageMasonry />
        </Reveal>

    </Box>
}