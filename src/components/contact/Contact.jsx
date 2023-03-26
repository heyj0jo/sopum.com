import React, {useState} from 'react'
import './contact.css'

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    msg: ""
  });

  const {name, email, msg} = inputs;

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
        ...inputs,
        [id]: value
    });
  }

  const handleSubmit = (e) => {

  }

  return (
    <div className='contact'>
        <h1>Contact us here!</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" id='name' value={name} onChange={handleChange} /> 
            </label>
            
            <label>Email: 
                <input type="text" id='email' value={email} onChange={handleChange}/>
            </label>
            <label>Question/Note/etc: </label>
            <textarea id='msg' value={msg} placeholder="Start typing here" onChange={handleChange}
            rows={4} cols={30}/>
            <input type="submit" value="Submit" className='button' />
        </form>

        <div className='socialLinks'>
            <a href="#">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
                <i className="fa-regular fa-store"></i>
            </a>
        </div>
        <p className='copy'>&copy;2023 by Sopum</p>
    </div>
  )
}

export default Contact

/*
constructor(props) {
    super(props);
    this.state = {
        value: "this is an initial value shown in input"
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event) {
    this.setState({value: event.target.value});
}




*/