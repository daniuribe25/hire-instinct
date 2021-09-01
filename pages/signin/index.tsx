import { Checkbox, FormControlLabel, FormGroup, Link } from "@material-ui/core";
import { useState } from "react";
import useStyle from "./signInStyles";
import { useMutation } from "@apollo/client";
import { signInMutation } from "../../api/gql/mutations";
import storage, { AUTH_TOKEN } from "../../utils/storage";

const SignIn = () => {
    const classes = useStyle();
    const [ values, setValues ] = useState({ email: '', password: '' });
    const [ checked, setChecked ] = useState(false);
    const [signInGQL, { loading, error }] = useMutation(signInMutation);

    const handlecheck = () => {
        setChecked(!checked);
    }

    const handleSignIn = async () => {
        if (!values.email || !values.password) {
            alert("All fields are required");
            return;
        }
        try {
            const { data } = await signInGQL({
                variables: { credentials: values }
            });

            if (data.authenticate.token) {
                storage.save(AUTH_TOKEN, data.authenticate.token, !checked);
            }
        } catch(error) {
            alert(error);
        }
    }

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
                    <h1>Sign in</h1>
                </div>
                <div className={classes.child_container}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox
                                checked={checked}
                                onChange={handlecheck}
                                name="checked"
                            />}
                            label=" Keep me signed in"
                        />
                    </FormGroup>
                    <button onClick={handleSignIn}>Sign In</button>
                    <Link href="/rememberpassword">Forgot Your Password?</Link>
                </div>
                <div className={classes.registration}>
                    <Link href="employer">Employer Registration</Link>
                    <Link href="jobseeker">Job Seeker Registration</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;