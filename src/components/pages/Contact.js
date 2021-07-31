import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function Contact() {

    const API_PATH = 'http://rcconsultingmx.com/bootcamp/portfolio-react/emailService.php';
    const [name_msg, setNameMsg] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [submitForm, setSubmitForm] = useState(false);
    const [buttonSubmit, setButtonSubmit] = useState(true);
    const [emailValidation, setEmailValidation] = useState(false);
    const [msgValidation, setMsgValidation] = useState(false);
    const [error, setError] = useState("");
    const validateEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleInput = async (e) => {
        e.preventDefault();
        if(e.target.type ==="textarea"){
            if(e.target.value ===""){
                setError('Error the message cannot be empty!');
                setMsgValidation(false);
            }else{
                setError('');
                setMsgValidation(true);
            }
        }else if(e.target.type ==="email"){
            if(e.target.value ===""){
                setError('Error the email cannot be empty!');
                setEmailValidation(false);
            }else{                           
                if(!validateEmail(e.target.value)){
                    setError('Your email is invalid!');
                    setEmailValidation(false);
                }else{
                    setError('');
                    setEmailValidation(true);
                }
            }
        }
    };


    const handleForm = async (e) => {
        e.preventDefault();
        setSubmitForm(true);
        setNameMsg('');
        setEmail('');
        setMsg('');
        setError('');
        setButtonSubmit(false);
        axios({
            method: 'post',
            url: `${API_PATH}`,
            data:  {
                name: name_msg,
                email: email,
                msg: msg
              }
          })
            .then(result => {
                setSubmitForm(true);
            })
            .catch(error => setError(error.message));
    };

    useEffect(() => {
        
        if(emailValidation && msgValidation){
            setButtonSubmit(false);
        }else{
            setButtonSubmit(true);
        }
      },[emailValidation, msgValidation]);

    return (
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row pt-5 mt-4 pb-5 mb-4">
                    <div className="col-8">
                    <h1 className="textContentH2">Contact</h1>
                        {submitForm && (
                                <div className="col-12 my-3 bg-success text-white p-3">
                                    Email Sent
                                </div>
                        )}
                        <form onSubmit={handleForm}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" onChange={(event) => setNameMsg(event.target.value)} value={name_msg}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={(event) => setEmail(event.target.value)}  onBlur={handleInput} value={email}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" id="msg" rows="3"  onChange={(event) => setMsg(event.target.value)}   onBlur={handleInput} value={msg}></textarea>
                            </div>
                            {error && (
                                <div className="col-12 my-3 bg-danger text-white p-3">
                                    {error}
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary" disabled={buttonSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-4 text-center" style={{alignSelf: "center"}}>                        
                        <img src={process.env.PUBLIC_URL + '/assets/img/contact.svg'} className="img-fluid rouded" alt="German Ramirez"/> <br/>
                        <img src={process.env.PUBLIC_URL + '/assets/img/german_ramirez_qr.png'} className="img-fluid rouded w-50" alt="German Ramirez"/> 
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
