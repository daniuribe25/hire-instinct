import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    screenRoot: {
        padding: '0 2.5rem',
    },
    headerRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '2rem 0',
        margin: '20px 0',
    },
    buttons_menu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
    },
    button_menu: {
        display: 'flex',
        margin: '0 20px',
        border: 'none',
        backgroundColor: 'white',
    },
    nameCompany: {
        fontSize: '25px',
        letterSpacing: '1px',
        fontWeight: '800'
    }
});

export default useStyles;