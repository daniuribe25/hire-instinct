import Link from 'next/link';
import useStyles from '../styles/layoutStyles';

function Layout({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.screenRoot}>
            <div className={classes.headerRoot}>
                <div className={classes.nameCompany}>
                    <Link href="/">Instinct</Link>
                </div>
                <div className={classes.buttons_menu}>
                    <Link href="/jobs_search" className={classes.button_menu}>Search Jobs</Link>
                    <button className={classes.button_menu}>Pricing</button>
                    <button className={classes.button_menu}>For Employers</button>
                    <button className={classes.button_menu}>About Near</button>
                </div>
                <div>
                    <Link href="/signin">Sign in</Link>
                    <Link href="/signup">Sign up</Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Layout;
