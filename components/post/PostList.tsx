import { Typography } from "@material-ui/core";
import useStyles from "../../styles/postsStyles";
import PostCard from "./PostCard";
import post from './post';

const PostList = () => {
    const classes = useStyles({isHome: true});

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div>
                    <Typography variant="h4" align="center"><strong>Available Jobs</strong></Typography>
                </div>
                
                <div>
                    {post.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            image={post.image}
                            job={post.job}
                            nameCompany={post.nameCompany}
                            locationJob={post.locationJob}
                            insideDate={post.insideDate}

                            isHome={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostList;