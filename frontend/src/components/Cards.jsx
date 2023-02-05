import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '@mui/joy/Grid';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import AspectRatio from '@mui/joy/AspectRatio';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import Navbar from './Navbar';
import axios from 'axios';
const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  // textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const styles = {
  cardContainer: {
    backgroundImage: `url(${"https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
    backgroundSize: "100%"

  },
  ourCard: {
    background: "rgba(255, 255, 255, 0.7)"
  }
};
export default function BasicCard() {
  return (
    <>
      <Navbar />
      <Grid style={styles.cardContainer} container rowSpacing={1}
        sx={{ width: '100%' }}>{
          Array.from(Array(6)).map(() => (
            <Grid xs={4} >
              <Item>
                <Card style={styles.ourCard}>
                  <CardContent>

                    <Typography variant="h5" component="div">
                      Remote Job
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} variant="h4" component="div">
                      EDI Developer
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} >
                      Location: Texas, Dallas, United States
                    </Typography>

                    <Typography sx={{ mb: 0.5 }} variant="h5">
                      Skills:
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} >
                          3+ years in IBM sterling Integrator. <br />
                          C++, Java, SQL, BPML, Mapping experience. <br />
                          Good understanding of SFTP, AS2, FTP connection.
                      </Typography>
                    {/* <Grid container justifyContent="space-between">
                      <Typography >
                          Skills: <br />
                          3+ years in IBM sterling Integrator <br />
                          C++, Java, SQL, BPML, Mapping experience. <br />
                          Good understanding of SFTP, AS2, FTP connection.
                      </Typography>
                      <AspectRatio ratio="1" sx={{ minWidth: 115 }}>
                        <img
                    src={`https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png`}
                    srcSet={`https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png`}
                    alt={"item.title"}
                  />
                      </AspectRatio>
                    </Grid> */}
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card></Item>
            </Grid>
          ))}
      </Grid>
    </>
  );
}