import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: '0 15%',
    },
    post: {
        borderBottom: '1px solid #EBECF1',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '33px 15px 33px',
        cursor: 'pointer',
    },
    info_job: {
        display: 'flex',
        flexDirection: 'column',
    },
    job_location: {
        display: 'flex',
        flexDirection: 'row',
    },
})

export default useStyles;

// container: ({isHome}) => ({
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     width: isHome ? '100%' : '50%',
//     padding: '0 15%',
// }),