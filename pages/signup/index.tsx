import useStyles from './signupStyles';

import Link from 'next/link';

const SignUp = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div>
                    <h1>Create an account</h1>
                </div>
                <div>
                    <div>
                        <h5>Choose account type:</h5>
                    </div>
                    <div className={classes.accountyTypeLink}>
                        <div>
                            <Link href="/jobseeker">Job Seeker</Link>
                        </div>
                        <div>
                            <Link href="/employer">Employer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp;