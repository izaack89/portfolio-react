import React from 'react';

export default function About() {
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row pt-5 mt-4">
                    <div className="col-4">
                        <img src={process.env.PUBLIC_URL + '/assets/img/german_ramirez.jpg'} className="img-fluid rouded" alt="German Ramirez"/> 
                    </div>
                    <div className="col-8">
                    <h1 className="mt-5 mb-5 textContentH2">Hi, Im German Ramirez</h1>
                        <p className="lead">
                        I'm 32 years old and Im living currently on Mexico City.

                        On my free time I like to watch animes, read manga and when the season of the NFL starts I like to watch the games.
                        My favorite team is the Patriots of New England even that Brady is not there Im still a fan of them. And for the
                        soccer my team is the America.

                        Other thing that I like to do is to learn new languages of programming and thanks for that I'm able to work with PHP,
                        Java, React, and many others
                        </p>
                    </div>
                </div>                
            </div>
        </main>
    );
}
