import { Typography } from "@material-ui/core";
import PostCard from "../../components/post/PostCard";
import Search from "../../components/Search"
import useStyles from "./jobsStyles";
import InfoJob from './components/InfoJob';
import { GetStaticProps, GetStaticPaths } from 'next';
import apolloClient from "../../api/gql/apollo-client";
import { getPostsQuery } from "../../api/gql/query";

const JobsSearch = ({ posts, post }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                            image={l.logo}
                            job={l.title}
                            nameCompany={l.company.name}
                            locationJob={l.location}
                            insideDate={l.insertedAt}
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
                        <InfoJob
                            key={post.id}
                            id={post.id}
                            image={post.logo}
                            job={post.title}
                            nameCompany={post.company.name}
                            locationJob={post.location}
                            insideDate={post.insertedAt}
                            salary={post.salaryBase}
                            jobDescription={post.description}
                            aboutCompany={post.company.description}
                        />
                    }
                </div>
            </div>
        </div>
    )
};

export const getStaticProps: GetStaticProps = async context => {
    try {
        const { data } = await apolloClient.query({ query: getPostsQuery });
        console.log(data);

        const jobId = context?.params?.jobId;
        const post = jobId ? data.posts.find(post => post.id === jobId) : data.posts[0];
        if (!post) { return { notFound: true } };

        return {
            props: {
                post: post || {},
                posts: data.posts,
            },
        }
    } catch(err) {
        return { props: { post: {}, posts: [], data: err.message } }
    }
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
})

export default JobsSearch;