import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

import { Card, Button, Form, Input } from 'reactstrap';

// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/LoginForm.scss';

import Logo from '../images/FishFriendsLogo.svg';

const CreateAccount = (props) => {

    const [register, setRegister] = useState({
        email: '',
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post(`https://fish-friends.herokuapp.com/authRoute/register`, register)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/dashboard');
            })
            .catch(err => {
                console.log('There was an error!', err.message)
            });

        setRegister({
            email: '',
            username: '',
            password: '',
        })
    }

    return (
        <Card className="login-card">
            <img src={Logo} alt="Fish Friends Logo" className="login-logo" id="logo" />
            <Form className="login-form" onSubmit={handleRegister} >
                <Input
                    type="email"
                    name="email"
                    value={register.email}
                    onChange={handleChange}
                    className="login-input"
                    placeholder="Email Address"
                />

                <Input
                    type="text"
                    name="username"
                    value={register.username}
                    onChange={handleChange}
                    className="login-input"
                    placeholder="User Name"
                />

                <Input
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}
                    className="login-input"
                    placeholder="Password"
                />
                <Button className="login-button" onSubmit={handleRegister} block>Create Account</Button>
            </Form>
        </Card>

    )
}

let body = document.querySelector('body');
body.addEventListener('copy', function () {
    alert("Don't steal!");
})


export default CreateAccount;