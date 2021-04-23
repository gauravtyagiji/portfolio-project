import React from 'react';
import Resume from '../resume.png'
import Gaurav_CV from '../Gaurav_CV.docx'

function ContactMe(){
    return(
        <div className="container bg-green-50 min-h-screen p-12 mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
                    Contact Me
                </h1>

            <div className="row">
            <div className="col-md-9 md-md-0 mb-5">
                <form method="post" name="contact me" id="contactform" netlify onSubmit="submit" data-netlify-honeypot="bot-field">
                <div hidden>
                    <input name="bot-field"/>
                </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="hidden" name="form-name" value="contact me"/>
                                <input type="text" id="name" name="name" className="form-control"/>
                                <label htmlFor="name"> Your name </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="email" name="email" className="form-control"/>
                                <label htmlFor="email"> Your Email </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <input type="text" name="subject" className="form-control"/>
                                <label htmlFor="subject">Subject</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form">
                                <textarea name="message" id="message" cols="30" rows="10" className="form-control md-textarea"></textarea>
                                <label htmlFor="message">Your Message</label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-md-left">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                </form>
            </div>
            <div className="col-md-3 text-center text-primary mt-5">
                <ul className="list-unstyled mb-0">
                    <li>
                        <i className="fas fa-map-marker-alt fa-2x"></i>
                        <p className="text-dark">Noida</p>
                    </li>
                    <li>
                        <i className="fas fa-phone mt-4 fa-2x"></i>
                        <p className="text-dark">+918755603303</p>
                    </li>
                    <li>
                        <i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p className="text-dark">gauravt927@gmail.com</p>
                    </li>
                </ul>
            </div>
            </div>
            <div className="col-md-4">
                <div className="card mt-5">
                    <img className="card-img-top" src={Resume} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-lg text-gray-600">Check My Resume</h5>
                        <p className="card-text">Click the button below to download my resume 👇.</p>
                        <a href={Gaurav_CV} download="Gaurav_CV.docx" className="btn btn-primary mt-3">Download resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;