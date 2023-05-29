import React, { useState } from 'react';

export const Register = (props) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <form onSubmit={handleSubmit} className='register-form'>
                <label htmlFor="fName">First Name: </label>
                <input type="text" value={fName} id="fName" placeholder="John" name="fName" onChange={(e) => setFName(e.target.value)} />
                <label htmlFor="lName">Last Name: </label>
                <input type="text" value={lName} id="lName" placeholder="Doe" name="lName" onChange={(e) => setLName(e.target.value)} />
                <label htmlFor="email">Email: </label>
                <input type="email" value={email} id="email" placeholder="youremail@email.com" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email">Birthday: </label>
                <input type="date" value={dob} id="dob" name="dob" onChange={(e) => setDob(e.target.value)} />
                <label htmlFor="pw">Password: </label>
                <input type="password" value={pw} id="pw" placeholder="**********" name="pw" nChange={(e) => setPw(e.target.value)} />
                <label htmlFor="ConfirmPw">Confirm Password: </label>
                <input type="password" value={confirmPw} id="confirmPw" placeholder="**********" name="confirmPw" nChange={(e) => setConfirmPw(e.target.value)} />
                <button type='submit'>Register</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!</button>
        </div>
    )
}