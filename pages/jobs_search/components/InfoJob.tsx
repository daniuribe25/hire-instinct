import { Typography } from "@material-ui/core";
import Image from "next/image";
import useStyles from "./infoJobStyles";

interface InfoJobProps {
    id: number;
    image: string;
    job: string;
    nameCompany: string;
    locationJob: string;
    salary: number;
    insideDate: number;
    jobDescription: string;
    aboutCompany: string;
}

const InfoJob = (props: InfoJobProps) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.infoToJob}>
                    <div className={classes.imageLogo}>
                        <Image src={props.image} width={50} height={50} alt="Post logo" />
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