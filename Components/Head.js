import React from "react"
// import email from './images/Email.png';
// import linkedIn from './images/LinkedIn.png';
// import email from "./images/Email.png"
// import linkedIn from "./images/LinkedIn.png"

 
export default function ProfHead(){
     return(
         <div>
         <img src="./images/img.png"/>
         <h2>Lame Jackson</h2>
         <h3>Developer</h3>
         <h4>developer.website</h4>              
          <img src="./images/Email.png" className="email-button" alt="Email Button" />
          <img src="./images/LinkedIn.png" className="linkedIn-button" alt="LinkedIn Button" />
        </div>
     )
 }