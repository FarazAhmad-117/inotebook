import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [user, setUser] = useState({ name: "", email: "", password: "",cpassword:""});

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(user.password!==user.cpassword){
            props.showAlert("danger","Passwords do not match.");
            return;
        }
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': user.name,
                'email': user.email,
                'password': user.password
            })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('authToken', json.authtoken);
            console.log(json.authtoken);
            props.showAlert("success","User registered Successfully.");
            navigate("/login");
        }else{
            props.showAlert("danger","User is already registered.");
        }
    }

    return (
        <>
            <div className="conainer mt-5">
                <h2>Enter your information:</h2>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" name='name' value={user.name} onChange={handleChange} aria-describedby="emailHelp" required/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" name='email' value={user.email} onChange={handleChange} aria-describedby="emailHelp" required/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" value={user.password} onChange={handleChange} name='password' required/>
                    </div>
                    <div class="mb-3">
                        <label for="cpassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="cpassword" value={user.cpassword} onChange={handleChange} name='cpassword' required/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
