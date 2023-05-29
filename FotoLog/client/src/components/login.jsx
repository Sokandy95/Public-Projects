import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <label htmlFor="email">Email: </label>
                <input type="email" value={email} id="email" placeholder="youremail@email.com" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="pw">Password: </label>
                <input type="password" value={pw} id="pw" placeholder="**********" name="pw" nChange={(e) => setPw(e.target.value)} />
                <button type='submit'>Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
        </div>
    )
}