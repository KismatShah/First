import React, { useState } from 'react'
import axios from 'axios'

function Signup() {
    const [username, setusername] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/signup", { username })
            alert('User Signup successfully')
        } catch (error) {
            console.log(error)
            alert('Error')
        }
    }

    return (
        <>
            <style>
                {`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .signup-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    max-width: 400px;
                    width: 100%;
                }

                .signup-container h2 {
                    margin-bottom: 20px;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                }

                .form-group {
                    margin-bottom: 15px;
                }

                .form-group label {
                    font-weight: bold;
                }

                .form-group input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                }

                .form-group button {
                    background-color: #007BFF;
                    color: #fff;
                    border: none;
                    padding: 10px;
                    border-radius: 3px;
                    cursor: pointer;
                    font-weight: bold;
                }
                `}
            </style>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form className="signup-form" onSubmit={handleSignup} method="post">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup
