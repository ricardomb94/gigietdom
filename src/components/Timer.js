import { React, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Slide } from 'react-awesome-reveal';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "September 16 2023";
    const datetimes = [days, hours, minutes, seconds,]

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, [])


    return (
        <Slide cascade >
            <Box sx={{ flexGrow: 1 }} mt={3}>
                <Grid container spacing={1} >
                    <Grid xs sx={{ width: '1rem' }}>
                        <Item>{days}: Jrs</Item>
                    </Grid>
                    <Grid xs>
                        <Item>{hours}: Hrs</Item>
                    </Grid>
                    <Grid xs>
                        <Item>{minutes}: mn:</Item>
                    </Grid>
                    <Grid xs>
                        <Item>{seconds}: Sde</Item>
                    </Grid>
                </Grid>
            </Box>
        </Slide>
    )
}

export default Timer