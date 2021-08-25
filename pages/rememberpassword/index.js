import { Link } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./rememberStyle"

const RememberPassword = () => {
    const classes = useStyles();

    const [ values, setValues ] = useState({
        email: ''
    })

    const handleInputChange = (e) => {
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value,
            }
        )
    }

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div>
                    <h1>Forgot Your Password?</h1>
                </div>
                <div className={classes.child_container}>
                    <p>Please enter your email address and we'll send you a link to reset your password right away!</p>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <button>Reset My Password</button>
                    <Link href="/signin">Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default RememberPassword;