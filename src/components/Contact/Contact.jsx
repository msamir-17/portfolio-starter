import React, { useRef } from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get In Touch</span>
          <span>Contact Me</span>
          <div className="blur s-blur1" 
               style={{ background: "ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form>
          <input type="text" name='user_name' className='user' placeholder='Name' />
          <input type="email" name='user_email' className='user' placeholder='Email' />
          <textarea name="message" className='user' placeholder='Meddage' id=""></textarea>
          <input type="submit" value="Send" className='button' />
          <div className="blur c-blur1"
          style={{ background: "var(--purple) " }}>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;






// backup 
// import React, { useRef } from 'react';
// import './Contact.css';
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// const Contact = () => {
//   const from = useRef();
//   const[done, setDone] = useState(false)
//   const sendEmail = (e) =>{
//     e.preventDefault();

//     emailjs.sendForm()
//     .then((result) => {
//       console.log(result.text);
          // setDone(true);
//     }, (error) =>{
//       console.log(error.text);
//     });
//   };

//   return (
//     <div className="contact-form">
//       <div className="w-left">
//         <div className="awesome">
//           <span>Get In Touch</span>
//           <span>Contact Me</span>
//           <div className="blur s-blur1" 
//                style={{ background: "ABF1FF94" }}
//           ></div>
//         </div>
//       </div>

//       <div className="c-right">
//         <form ref={form} onSubmit={sendEmail} >
//           <input type="text" name='user_name' className='user' placeholder='Name' />
//           <input type="email" name='user_email' className='user' placeholder='Email' />
//           <textarea name="message" className='user' placeholder='Meddage' id=""></textarea>
//           <input type="submit" value="Send" className='button' />
{/* <span> {done && "Thanks For Contacting Me"} </span> */}
//           <div className="blur c-blur1"
//           style={{ background: "var(--purple) " }}>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

