import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { departments } from '../utils/departments';
import Logo from '../assets/logo.png'

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h6,
    fontFamily: 'Titan One',
    padding: theme.spacing(0.5),
    textAlign: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem !important',
        ...theme.typography.body2,
        fontWeight: 'bold'

    }
}));

export const ImageMasonry = () => {
    return (
        <Box sx={{ width: '100%', minHeight: 829 }}>
            <Masonry columns={3} spacing={2}>
                {departments.map((item, index) => (
                    <div key={`${item.imgUrl}-${index}`}>
                        <img
                            src={`${item.imgUrl}?w=162&auto=format`}
                            srcSet={`${item.imgUrl}?w=162&auto=format&dpr=2 2x`}
                            placeholderSrc={Logo}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                        <Label>{item.title}</Label>
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}
