import React, { useState } from 'react';

const HookForm = () => {
const [lastName, setLastName] = useState('');
const [firstName, setFirstName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');


const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
});


const updateFormData = () => {
    setFormData({firstName, lastName, email, password, confirmPassword,});
};

return (
    <div>
    <form>
        <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value); 
        updateFormData(); }}/>
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => {
            setLastName(e.target.value);
            updateFormData();
            }}/>
        </div>

        <div>
        <label>Email:</label> 
        <input type="email" value={email} onChange={(e) => {
            setEmail(e.target.value);
            updateFormData();
            }}/>
        </div>

        <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.value);
            updateFormData();
            }}/>
        </div>

        <div>
        <label>Confirm Password:</label>
        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
            setConfirmPassword(e.target.value);
            updateFormData();
            }}
        />
        </div>
    </form>

    <div>
        <p> Your Form Data:</p>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
    </div>
    </div>
);
};

export default HookForm;
