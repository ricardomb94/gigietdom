import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, deepPurple, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: grey[50],
        },
        success: {
            main: deepPurple[900],
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    width: '35%',
                    color: 'white',
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '2em',
                    border: '0.1em solid white',
                    padding: '0.5em',
                    backgroundColor: '#000000',
                    opacity: '0.7',
                    textAlign: 'center'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                outlinedSecondary: {
                    borderRadius: 20,
                },
            },
        },
    },
});

export default responsiveFontSizes(theme);
