import { Box } from "@mui/material"
import { ImageMasonry } from "./Masonary"
import styled from "@emotion/styled"

export const Departments = () => {

    const StyledTypography = styled('h3')({
        fontWeight: 'bold',
        fontSize: '3rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
    })

    return <Box>
        <StyledTypography variant="h3">Who We Serve</StyledTypography>
        <ImageMasonry />
    </Box>
}