import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: '360px',
    },
    container: {
        display: 'flex',
        background: '#0d4a7a',
        justifyContent: 'center',
        color: '#ffffff',
        borderRadius: '16px',
        flexDirection: 'column',
        width: '100%'
    },
    text_h6: {
        marginTop: '25px',
        fontWeight: '100'
    }
})

export default useStyles;