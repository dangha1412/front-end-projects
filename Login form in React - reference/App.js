import React from "react"

export default function App() {
    const [dataForm, setDataForm] = React.useState({
        email:"",
        password:"",
        confirm:"",
        toJoin: false
    })
   
    function handleChange(event) {
        const {name, type, value, checked} = event.target
        setDataForm(prevDataForm => {
            return{
                ...prevDataForm,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }
     
    function handleSubmit(event) {
        event.preventDefault()
        if(dataForm.password === dataForm.confirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        } 
        {dataForm.toJoin && console.log("Thanks for signing up for our newsletter!")}
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={dataForm.email}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={dataForm.password}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="confirm"
                    value={dataForm.confirm}
                    required
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="toJoin"
                        checked={dataForm.toJoin}
                            
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
