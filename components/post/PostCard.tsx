import { Typography } from "@material-ui/core";
import useStyles from "../../styles/postsStyles";
import Link from 'next/link';
import Image from 'next/image';

const PostCard = (props) => {
    const classes = useStyles({ isHome: props.isHome });

    return(
        <div className={classes.root}>
            <Link href={`/jobs_search/${props.id}`} passHref>
                <div className={classes.post}>
                    <div>
                        <Image src={props.image} width={50} height={50} alt="Post logo" />
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
                        <div>
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