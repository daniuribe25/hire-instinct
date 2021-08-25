import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '20%',
        textAlign: 'center',
    },
    accountyTypeLink: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));

export default useStyles;
