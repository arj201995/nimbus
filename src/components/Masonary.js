import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { departments } from '../utils/departments';
import { Card, CardMedia, Grid, Typography } from '@mui/material';


// --> TODO
// const Label = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     fontFamily: 'Titan One',
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     [theme.breakpoints.down('sm')]: {
//         fontSize: '0.9rem !important',
//         ...theme.typography.body2,
//         fontWeight: 'bold'

//     },
// }));

const Label = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h6,
    fontFamily: 'Titan One',
    padding: theme.spacing(1),
    textAlign: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem !important',
        ...theme.typography.body2,
        fontWeight: 'bold'

    },
}));

// export const ImageMasonry = () => {
//     return (
//         <Box sx={{ width: '100%', minHeight: 829 }}>
//             <Masonry columns={window.innerWidth < 430 ? 3 : 5} spacing={3}  >
//                 {departments.map((item, index) => (
//                     <div key={`${item.imgUrl}-${index}`}>
//                         <img
//                             src={`${item.imgUrl}`}
//                             srcSet={`${item.imgUrl}`}
//                             alt={item.title}
//                             loading="lazy"
//                             style={{
//                                 borderBottomLeftRadius: 4,
//                                 borderBottomRightRadius: 4,
//                                 display: 'block',
//                                 width: '100%',
//                                 height: '90%'
//                             }}
//                         />
//                         <Label>{item.title}</Label>
//                     </div>
//                 ))}w
//             </Masonry>
//         </Box>
//     );
// }


export const ImageMasonry = () => {
    return <Grid container spacing={2} my={2}>
        {
            departments.map((department, index) => <Grid item key={`${department.imgUrl}#-${index}`} md={3} xs={4}>
                <Card sx={{ maxWidth: 340 }}>
                    <CardMedia
                        sx={{ height: { md: 200, xs: 100 } }}
                        image={department.imgUrl}
                        title={department.title}
                        loading="lazy"
                    />
                    <Label gutterBottom variant="h5" component="div">
                        {department.title}
                    </Label>
                </Card>
            </Grid>)
        }
    </Grid>
}