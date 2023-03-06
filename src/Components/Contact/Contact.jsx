import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export const Contact = () => {

    const formInfo = React.useRef()

    let navigate = useNavigate()

    const grabForm = (e) => {
        e.preventDefault()
        //console.log(formInfo.current)
        const contactForm = new FormData(formInfo.current)
        //console.log(contactForm)
        const contact = Object.fromEntries(contactForm)
        console.log(contact)
        e.target.reset()
        toast('🚀The message probe has been lauched!',  {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        navigate("/")
    }


    return (
        <form onSubmit={grabForm} ref={formInfo} className='container-fluid-contact'>


            <div>
                <img src="../img/mod-2a.png" alt="a modular synth" />
            </div>


            <div className="form-text">

                <h1>Contact Us</h1>
        
                <h4>Send us a note and we’ll get back to you as quickly as possible!</h4>

                <p>Sending multiple requests can sometimes slow down our response time, so please only submit one request per question.</p>

             </div>


            <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name:</label>
                <input type="text" className="form-control" name='Name' />
            </div>


            <div className="mb-3">
                <label htmlFor="Subject" className="form-label">Subject:</label>
                <input type="text" className="form-control" name='Subject' />
            </div>

        
            <div className="mb-3">
                <label htmlFor="E-mail" className="form-label">E-mail address:</label>
                <input type="email" className="form-control" name='E-mail'/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>


            <div className="mb-3">
                <label htmlFor="Message" className="form-label">Message:</label>
                <textarea className="form-control" name='Message' rows={6} defaultValue={""} />
            </div>


            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label" htmlFor="chk-nl">Subscribe to Space Cat Synths newsletter</label>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>

            <div className='margin-top-1'>
                <img src="../img/mod-2b.png" alt="a modular synth" />
            </div>



      </form>
      
    );
}

export default Contact;
