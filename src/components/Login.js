import React,{useState,useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const [credentials, setCredentials] = useState({email:"",password:""});
    const context = useContext(NoteContext);
    const {setAuthToken} = context;
    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                'email':credentials.email,
                'password':credentials.password
            })
        });
        const json =await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('authToken',json.authtoken);
            setAuthToken(json['authtoken']);
            navigate('/');
        }else{
            props.showAlert("danger","Enter Valid Credentials.");
        }
    }

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]:e.target.value});
    }

    return (
        <>
            <div className="container" style={{ marginTop: "80px" }}>
                <form onSubmit={handleSubmit}>
                    <h2>Login to continue to iNotebook:</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
