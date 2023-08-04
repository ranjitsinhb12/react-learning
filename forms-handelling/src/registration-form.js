import React from 'react'
import './style.css'

export default function Registration() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        wantNewsletter: false
    })
    function handleChange(event) {
        const { name, value, type, checked } = event.target
         setFormData(prevFormData => ({           
                 ...prevFormData,
             [name]: type === "checkbox" ? checked : value
         }))
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password != formData.confirmPassword) {
            console.log("Password does not match!")
        } else {
            formData.wantNewsletter ?
                console.log("Thanks for signing up for our newsletter!") :
                console.log("Sucessfully signed up")
        }
           
            
       
    }

    return (
        <main className="container">
            <div className="box">
                <h2 className="register"> Newsletter Registration </h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        placeholder="Email"
                        className="form-textbox"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <input
                        placeholder="Password"
                        className="form-textbox"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                    <input
                        placeholder="Confirm Password"
                        className="form-textbox"
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={formData.confirmPassword}
                    />
                    <input
                        className="form-checkbox"
                        type="checkbox"
                        id="newsletter"
                        checked={formData.wantNewsletter}
                        name="wantNewsletter"
                        onChange={handleChange}
                    />
                    <label htmlFor="newsletter">
                        
                        I want to join the newsletter</label>

                    <button className="subscribeButton">Subscribe</button>
                </form>
            </div>            
        </main>
        )
}