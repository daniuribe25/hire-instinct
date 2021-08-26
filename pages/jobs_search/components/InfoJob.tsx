import { Typography } from "@material-ui/core";
import useStyles from "./infoJobStyles";

const InfoJob = (props) => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.infoToJob}>
                    <div className={classes.imageLogo}>
                        <img src={props.image} width={50}/>
                    </div>
                    <div className={classes.applyNow}>
                        <Typography variant="h4">{props.job}</Typography>
                        <Typography variant="h6">{props.nameCompany}</Typography>
                        <button>Apply Now</button>
                    </div>
                    <div className={classes.fav}>
                        <p>Fav</p>
                        <p>Compartir</p>
                    </div>
                </div>

                <div className={classes.locationJob}>
                    <p>{props.locationJob}</p>
                    <p>{props.salary}</p>
                    <p>{props.insideDate}</p>
                </div>

                <div className={classes.jobDescription}>
                    <p>{props.jobDescription}</p>
                    <Typography variant="h6">ABOUT COMPANY</Typography>
                    <p>{props.aboutCompany}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoJob;