import React from 'react'
import{Link,useLocation, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';



export default function Navbar(props) {

    const navigate = useNavigate();
    // Useful but At this moment I am using a new type;
    // const handleClick=(event)=>{
    //     let links = document.querySelectorAll('.nav-link');
    //     links.forEach((ele)=>{
    //         ele.classList.remove("active");
    //     })
    //     event.target.classList.add("active");
    // }

    // Instead using useLocation;
    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.heading}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/'?'active':' '}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/about'?'active':' '}`}  to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('authToken')?<form className="d-flex" role="search">
                            <Link className="btn btn-primary mx-2" role="button" to='/login'>Login</Link>
                            <Link className="btn btn-primary mx-2" role="button" to='/signup'>Signup</Link>
                        </form>:
                        <button className='btn btn-primary mx-2' onClick={()=>{localStorage.removeItem('authToken');navigate("/login")}}>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    heading : PropTypes.string
}

Navbar.defaultProps = {
    heading : "Heading"
}
