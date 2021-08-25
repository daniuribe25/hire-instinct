import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 0',
    },
    searchAndCategories: {
        paddingBottom: '20px',
    },
    jobsAndDescription: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        border: '1px solid #EBECF1',
    },
    jobs_categories: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
    },
    numberJobs: {
        flex: '1',
    },
    categories: {
        flex: '4',
    },
    containerPosts: {
        display: 'flex',
    },
    posts: {
        flex: '2',
        overflow: 'scroll',
        minHeight: 'calc(100vh - 60px)',
        height: 'calc(100vh - 60px)',
        position: 'sticky',
    },
    descriptionPost: {
        flex: '4',
    }, 
})

export default useStyles;