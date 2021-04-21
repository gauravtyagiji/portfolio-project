import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { SocialIcon } from 'react-social-icons';
import {
    faLinkedin,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <>
            <div className="container-fluid page-footer">
                <div className="row">

                    <div className="col-md-12 py-4 d-flex justify-content-center social_icon">
                        <h3 className="mr-4">Social Follow</h3>
                        <a href="https://www.instagram.com/ambiguousphotography/"
                            className="mr-4 instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://twitter.com/gauravt16160191"
                            className="mr-4 twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/gaurav-tyagi-5a3559114/"
                            className="mr-4 linkedin social">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="#"> CodeFreak.com</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer