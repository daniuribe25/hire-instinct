import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {},
    container: {
        padding: '10% 16% 10% 10%',
        display: 'flex',
        flexDirection: 'column',
        width: ''
    },
    infoToJob: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom:  '1px solid #EBECF1',
        paddingBottom: '24px',
        marginBottom: '28px',
    },
    imageLogo: {
        flex: '1',
    },
    applyNow: {
        display: 'flex',
        flexDirection: 'column',
        flex: '3',
    },
    fav: {
        flex: '1',
    },
    locationJob: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jobDescription: {
        width: '100%',
        padding: '20px 12px 0 0',
    }
})

export default useStyles;