import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    }
})

export default useStyle;