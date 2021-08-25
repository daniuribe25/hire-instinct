import { Typography } from "@material-ui/core";
import useStyles from "../../styles/postsStyles";
import Link from 'next/link';
import Image from 'next/image';

const PostCard = (props) => {
    const classes = useStyles({ isHome: props.isHome });

    return(
        <div className={classes.root}>
            <Link href={`/jobs_search/${props.id}`} className={classes.container}>
                <div className={classes.post}>
                    <div className={classes.img_logo}>
                        <img src={props.image} alt="logo" width={50} />
                    </div>

                    <div>
                        <div>
                            <Typography variant="h5">{props.nameCompany}</Typography>
                        </div>
                        <div>
                            <div className={classes.job_location}>
                                <p>{props.job}</p>
                                <p>{props.locationJob}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.info_date}>
                            <p>fav</p>
                            <div>
                                <div>
                                    <p>{props.insideDate}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>{props.jobDescription}</p>
                            <p>{props.aboutCompany}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PostCard;