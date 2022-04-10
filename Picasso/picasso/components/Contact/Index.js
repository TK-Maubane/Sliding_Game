import React, { useState } from "react";
import { AboutContainer } from "../About/AboutElements";
import Alert from 'react-popup-alert'
import { Button, Input,InputTextarea } from "./ContactElements";

// import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [comment, setComment] = useState("");
  const [h1_Text, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  const [alert, setAlert] = useState({
    type: 'success',
    text: '',
    show: false
  })


  function handle_name_change(event) {
    setName(event.target.value);
  }

  function handle_email_change(event) {
    setEmail(event.target.value);
  }


  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  function handle_click(event) {
    setHeading(name);

    event.preventDefault();
  }

  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }

  function onShowAlert() {
    setAlert({
      type: 'success',
      text: `Thank you for reaching out. Picasso will respond
      to you using the provided email address`,
      show: true,
    })
  }

  
  return (
    <div className="container">
      <h1 style={{color: 'white'}}>Hello {h1_Text} </h1>
      <form onSubmit={handle_click}>
        <div>
        <Input
          onChange={handle_name_change}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        </div>
        
        <div>
        <Input
          onChange={handle_email_change}
          type="email"
          placeholder="Email"
          value={email}
        />
        </div>
        
        <div>
        <InputTextarea
          //onChange={handle_change}
          type="text"
          placeholder="Your comment/complaint here?"
          // value={comment}
        />
        </div>
        
        <div>
          <Button
            style={{ backgroundColor: isMousedOver ? "Green" : "white" }}
            type="submit"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOver}
            onClick={onShowAlert}
          >
            Submit
          </Button>
        </div>
        <Alert
          header={'Message sent successfully'}
          btnText={'Close'}
          text={alert.text}
          type={alert.type}
          show={alert.show}
          onClosePress={onCloseAlert}
          textStyles={{color: "white"}}
        />
        
      </form>
      
    </div>
    
  );
}


const ContactSection = () => {
  return (
    <AboutContainer>
      <div>
      <h1 style={{color: 'white'}}>My Contact Page</h1>
      <Form/>
      </div>
      
    </AboutContainer>
  );
};

export default ContactSection;