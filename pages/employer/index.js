import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

import { useState } from 'react';
import useStyle from './employerStyle';

const Employer = () => {
    const classes = useStyle();

    const [ values, setValues ] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        companyName: '',
        phone: '',
        website: '',
        location: '',
        companyDescription: '',
    });

    const [ checked, setChecked ] = useState(false);

    const handlecheck = () => {
        setChecked(!checked)
    }

    const handleInputChange = (e) => {
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value,
            }
        )
    };

    const handleAdd = (user) => {
        const userCompany = JSON.parse(localStorage.getItem('companies')) || [];
        const newUserCompany = [...userCompany, user];
        const newUserCompanyString = JSON.stringify(newUserCompany);
            if (user) {
                localStorage.setItem('companies', newUserCompanyString);
            }
        handleCleanForm();
    }

    const handleCleanForm = () => {
        setValues({
            email: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            companyName: '',
            phone: '',
            website: '',
            location: '',
            companyDescription: '',
        })
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div>
                    <h1>Create Employer Profile</h1>
                </div>
                <div>
                    <div>
                        <span>I already have an Employer account. Sign me in</span>
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
                    </div>
                    <div>
                        <div>
                            <span>FULL NAME</span>
                            <input
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <span>COMPANY NAME</span>
                            <input
                                name="companyName"
                                value={values.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>PHONE</span>
                            <input
                                name="phone"
                                type="number"
                                value={values.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <span>WEBSITE</span>
                            <input
                                name="website"
                                type="text"
                                value={values.website}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <span>LOCATION</span>
                        <input
                            name="location"
                            type="text"
                            value={values.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <span>LOGO</span>
                        <input type="file"/>
                    </div>
                    <div>
                        <span>COMPANY DESCRIPTION</span>
                        <textarea
                            name="companyDescription"
                            value={values.companyDescription}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                </div>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox
                            checked={checked}
                            onChange={handlecheck}
                            name="checked"
                        />}
                        label="I agree to the terms of use"
                    />
                    </FormGroup>
            <button onClick={() => handleAdd(values)}>Register</button>
            </div>
        </div>
    )
}
export default Employer;