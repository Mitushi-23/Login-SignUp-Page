import React, { useState } from 'react'
import {  useHistory } from "react-router-dom";
import '../../App.css'
import axios from './Axios'




export default function SignInPage() {

    let history = useHistory();
    

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        await axios.post("/api/token/",
            {
                email,
                password
            });
        history.push("/home");
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" onChange={onChange} required />
                </p>
                <p>
                    <label>Password</label>
                   
                    <br />
                    <input type="password" name="password" onChange={onChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            
        </div>
    )
}
