import react, { useState } from "react"

const Contact = () => {
    const [contact, setContact] = useState({
        FullName:"",
        Email:"",
        Issue:"",
        Message:""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setContact({...contact,[name]:value})

    }

    const HandleSubmit = () => {
        console.log(contact)
    }
    return (
        <>
            <section className="contact-section">
                <div className="container contact-container">
                    <h2>Contact us</h2>
                    <div className="form-group">
                        <label htmlFor="Full Name">Full Name</label>
                        <input type="text" id="Full Name" onChange={(e) => handleChange(e)} name="FullName" value={contact.FullName} className="form-control" placeholder="Enter your Full Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" id="Email" name="Email" onChange={(e) => handleChange(e)} value={contact.Email} className="form-control" placeholder="Enter your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="issue">issue</label>
                        <select id="issue" name="Issue" value={contact.Issue} onChange={(e) => handleChange(e)} className="form-control">
                            <option value="">Select an issue</option>
                            <option value="cant-login">Can't login</option>
                            <option value="event-start">When is the event going to start?</option>
                            <option value="exclusive-item">How to get exclusive items?</option>
                            <option value="online-location">Is it online or do you have a specific location?</option>
                            <option value="setup">Setup and installation</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Full Name">Message</label>
                        <textarea id="Message" className="form-control" name="Message" onChange={(e) => handleChange(e)} value={contact.Message} placeholder="Enter your message"></textarea>
                    </div>
                    <button onClick={() => HandleSubmit()} className='Generate_Logo' style={{}}>Submit</button>

                </div>

            </section>
        </>
    )
}

export default Contact

