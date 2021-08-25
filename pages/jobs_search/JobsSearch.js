import { Typography } from "@material-ui/core";
import PostCard from "../../components/post/PostCard";
import Search from "../../components/Search"
import useStyles from "./jobsStyles";
import postsDB from '../../components/post/post';
import InfoJob from './components/InfoJob';

export const getStaticProps = async context => {
    const jobId = context?.params?.jobId;
    const post = jobId ? postsDB.find(post => post.id === +jobId) : postsDB[0];
    if (!post) { return { notFound: true } };

    return {
        props: {
            post: post || {},
            posts: postsDB
        },
    }
}

export const getStaticPaths = async () => ({
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
})

const JobsSearch = ({ posts, post }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.searchAndCategories}>
                    <div>
                        <div>
                            <Search/>
                        </div>
                    </div>
                    <div className={classes.jobs_categories}>
                        <div className={classes.numberJobs}>
                            <Typography variant="h5">jobs found</Typography>
                        </div>
                        <div className={classes.categories}>
                            <button>Categories</button>
                            <button>Job type</button>
                            <button>Salary Range</button>
                        </div>
                    </div>
                </div>

                <div className={classes.jobsAndDescription}>
                    <div className={classes.posts}>
                        {posts && posts.map(l => (
                            <PostCard className={classes.containerPosts}
                                key={l.id}
                                id={l.id}
                                image={l.image}
                                job={l.job}
                                nameCompany={l.nameCompany}
                                locationJob={l.locationJob}
                                insideDate={l.insideDate}

                                isHome={false}
                            />
                        ))}
                    </div>

                    <div>
                        <div>

                        </div>
                    </div>

                    <div className={classes.descriptionPost}>
                        {post && post.id && 
                            <InfoJob className={classes.containerPosts}
                                key={post.id}
                                id={post.id}
                                image={post.image}
                                job={post.job}
                                nameCompany={post.nameCompany}
                                locationJob={post.locationJob}
                                insideDate={post.insideDate}
                                salary={post.salary}
                                jobDescription={post.jobDescription}
                                aboutCompany={post.aboutCompany}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsSearch;