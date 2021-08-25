import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        textAlign: 'center',
    },
    child_container: {
        display: 'flex',
        flexDirection: 'column',
    }
})

export default useStyles;