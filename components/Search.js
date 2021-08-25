import useStyles from "../styles/searchStyles";


const Search = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <input className={classes.keywords} placeholder="Keywords"/>
                <input className={classes.location} placeholder="Location"/>
                <div className={classes.container_findJobs}>
                    <button className={classes.button_findJobs}>Find Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default Search;