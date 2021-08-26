import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        width: '30%'
    },
    child_container: {
        display: 'flex',
        flexDirection: 'column',
    },
    registration: {
        display: 'flex',
        justifyContent: 'space-around',
    }
})

export default useStyle;