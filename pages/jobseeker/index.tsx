import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { useState } from 'react';
import useStyle from './jobSeekerStyle';

const JobSeeker = () => {
    const classes = useStyle();

    const [ values, setValues ] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        aboutInstinct: '',
        country: '',
    });
    
    const [ checked, setChecked ] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }

    const handleInputChange = (e) => {
        setValues(
            { ...values,
                [e.target.name]: e.target.value,
            }
        )
    }

    const handleAdd = (user) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if(user) {
            const newUsers = [...users, user];
            const newUsersString = JSON.stringify(newUsers);
            localStorage.setItem('users', newUsersString);
        }
        handleCleanForm();
    }

    const handleCleanForm = () => {
        setValues({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            aboutInstinct: '',
            country: '',
        })
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div>
                    <h1>Create Job Seeker Profile</h1>
                </div>

                <div>
                    <div>
                        <span>I already have a Job Seeker account. Sign me in</span>
                    </div>
                    <div>
                        <span>FULL NAME</span>
                        <input
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <span>EMAIL</span>
                        <input
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <span>PASSWORD</span>
                        <input
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <span>CONFIRM PASSWORD</span>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <span>WHATSAPP(NOT REQUIRED-SPEEDS UP APPROVAL TIME!)</span>
                        <input
                            name="phone"
                            type="number"
                            value={values.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <span>HOW DID YOU HEAR ABOUT INSTINCT?</span>
                        <select
                            name="aboutInstinct"
                            value={values.aboutInstinct}
                            onChange={handleInputChange}
                        >
                            <option>Select How did you hear about Instinct?</option>
                            <option>Email</option>
                            <option>LinkedIn Message</option>
                            <option>Instagram</option>
                            <option>Twitter</option>
                            <option>Friend</option>
                            <option>Codeable.la</option>
                        </select>
                    </div>
                    <div>
                        <span>COUNTRY</span>
                        <input
                            name="country"
                            type="text"
                            value={values.country}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox
                            checked={checked}
                            onChange={handleCheck}
                            name="checked"
                        />}
                            label="I agree to the terms of use"
                        />
                    </FormGroup>
                <div>
                    <button onClick={() => handleAdd(values)}>Register</button>
                </div>
            </div>
        </div>
    )
}
export default JobSeeker;