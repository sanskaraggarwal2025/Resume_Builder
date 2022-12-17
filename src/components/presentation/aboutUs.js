import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

import { NavLink } from "react-router-dom";
const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                        Do you have any comments or questions? I will be happy to assist you. Send me a message.
                    </p>
        
                    <h2 className="email text-large">
                        aggarwalsanskar992@gmail.com
                    </h2>
        
                    <p className="happy-to-help">
                        I am here to answer any questions regarding our resume generator, do not hesitate to contact me for
                        any reason. I will respond in less than 24 hours from receipt of the email. Thanks for trusting me.
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;