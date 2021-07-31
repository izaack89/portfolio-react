import React from 'react';

export default function Contact() {
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row pt-5 mt-4">
                    <div className="col-8">
                    <h1 className="textContentH2">Contact</h1>
                        <form>
                            <div class="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="msg" className="form-label">Message</label>
                                <textarea class="form-control" id="msg" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-4 align-items-center" style={{alignSelf: "center"}}>                        
                        <img src={process.env.PUBLIC_URL + '/assets/img/contact.svg'} className="img-fluid rouded" alt="German Ramirez"/> 
                    </div>
                </div>
            </div>
        </main>
    );
}
