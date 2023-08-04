import React from 'react'

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })
   
    function handleChange(event) {

        const { name, value, type, checked } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
                }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return (
        <main className="main">
            <h2 className="main__heading"> Forms </h2>
            <form  onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                  
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                  
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  
                />
                <textarea
                    placeholder="Comment"
                    name="comment"
                    onChange={handleChange}
                    value={formData.comment}
                />
                
                <input
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                    className="checkbox"
                />
                <label htmlFor="isFriendly"> Are you friendly? </label>
                <br />
                <br />
                <br />
                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value = "unemployed"
                        checked={formData.employment === "unemployed"}
                            onChange = { handleChange }
                            />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input 
                        type="radio"
                        id="part-time" 
                        name="employment"
                        value = "part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    <input 
                        type="radio"
                        id="full-time" 
                        name="employment"
                        value = "full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />
                <label htmlFor="favColor"> What is you favorite color? </label>
                <br />
                <select
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">-- choose --</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="maroon">Maroon</option>
                </select>
                <br />
                <br />              
                <button className="main__submit-button">Submit</button>
            </form>
           
        </main>
    )
}