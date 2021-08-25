import { Typography } from "@material-ui/core"
import useStyles from "../styles/bannerStyles";

const Banner = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <Typography variant="h3" align="center">Land your next job with Instinct</Typography>
                <Typography className={classes.text_h6} variant="h6" align="center">Instinct helps top LatAm talent find remote roles in the US</Typography>
            </div>
        </div>
    )
}

export default Banner;