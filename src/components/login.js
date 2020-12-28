import React from 'react'
// import "../styles/login.css"

class Login extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <div className="MainContainer">
                    <div className="headingContainer">
                        <h1>Github Finder</h1>
                    </div>
                    <div className="loginContainer">
                        <div className="email">
                            <input type="text"></input>
                        </div>
                        <div className="password">
                            <input type="text"></input>
                        </div>
                        <div className="submit">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

export default Login