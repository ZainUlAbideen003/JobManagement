import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import '@fontsource/roboto/400.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: "#026ca0"
        },
        secondary: {
            main: '#026ca0',
        },
    },
});

const styles = {

    link: {
        textDecoration: "none",
        color: "black"
    }
};


export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const linkedIn = ()=>{
        window.open("http://localhost:5000/auth/linkedin/callback","_self")
        // console.log(`${process.env.REACT_APP_API_URL}/auth/linkedin/callback`,"_self")
        // console.log(`${process.env.REACT_APP_API_URL}`)
    }
    

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ width: 60, height: 60, m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        {/* <Grid container>
                            <Grid item xs>
                                <Link variant="body2" to="/" style={styles.link}>
                                    Back to home
                                </Link>
                            </Grid>
                        </Grid> */}

                        {/* <Typography variant="h6" textAlign={"center"}>
                            or
                        </Typography> */}

                        <Button onClick={linkedIn}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            LogIn with LinkedIn
                        </Button>

                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}