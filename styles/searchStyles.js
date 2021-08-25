import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
	    boxShadow: '-3px 10px 35px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        top: '-60px',
        display: 'flex',
        flexDirection: 'row',
        borderBottomRightRadius: '12px',
    },
    keywords: {
        width: '350px',
        height: '99px',
        borderTopLeftRadius: '12px',
        border: 'none',
        borderRight: 'solid 1px #A0A19F',
        paddingLeft: '7%',
        fontWeight: '600'
    },
    location: {
        width: '350px',
        height: '99px',
        border: 'none',
        paddingLeft: '7%',
        fontWeight: '600'
    },
    container_findJobs: {
        width: '150px',
        height: '99px',
        border: 'none',
        backgroundColor: 'white',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_findJobs: {
        padding: '9px 16px',
        borderRadius: '14px',
        width: '135px',
        height: '67px',
        fontSize: '16px',
        color: '#fff',
        fontWeight: '600',
        background: '#20746f',
        border: 'none',
        borderColor: '#2b9c95',
        cursor: 'pointer',
        marginRight: '20px'
    }
})

export default useStyles;