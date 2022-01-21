import React, {useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import API from "./API";
// import LoadButton from "./LoadButton";
// import {Wrapper} from "./Login.styles";
import {Context} from "./context";
import './Login.css'
import NavBar from "./NavBar/NavBar";
import BackgroundImage from './IN-en-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();
    console.log('User...', user)

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            console.log('SessionId', sessionId)
            setUser({sessionId: sessionId.session_id, username});
            navigate('/');
        } catch (error) {
            setError(true)
        }

    };

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    return (
        <div className='wholePage'>
            <div>
                {/*<img src={BackgroundImage} className='backgroundImg' alt='background'/>*/}
            </div>
            <div>
                {/*<NavBar/>*/}
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                     className='navbar_logo'
                     alt='Logo'/>
            </div>
            <div className='backgroundCss'>
                <div className='container'>
                    <label style={{fontWeight: 'bold'}}>Username:</label>
                    <input
                        type='text'
                        value={username}
                        name='username'
                        onChange={handleInput}
                        className='textbox'
                        placeholder="Enter Username"
                    />
                    <label style={{fontWeight: 'bold'}}>Password:</label>
                    <input
                        type='password'
                        value={password}
                        name='password'
                        onChange={handleInput}
                        className='textbox'
                        placeholder="Enter Password"
                    />
                    <button onClick={handleSubmit} className='btn'>Login</button>
                    {error && <div className='error'
                                   style={{color: 'red', fontSize: 14, paddingTop: 10, textAlign: 'center'}}>Please
                        check username and password again..!!</div>}
                </div>
            </div>
        </div>
    );
};

export default Login;