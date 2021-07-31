import React, { useState,useEffect } from 'react';

export default function Contact() {

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
                console.log("validae:",validateEmail(e.target.value))     
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
    useEffect(() => {
        
        if(emailValidation && msgValidation){
            setButtonSubmit(false);
        }else{
            setButtonSubmit(true);
        }
      });

    return (
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row pt-5 mt-4">
                    <div className="col-8">
                    <h1 className="textContentH2">Contact</h1>
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onBlur={handleInput} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="msg" className="form-label">Message</label>
                                <textarea class="form-control" id="msg" rows="3" onBlur={handleInput} ></textarea>
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
