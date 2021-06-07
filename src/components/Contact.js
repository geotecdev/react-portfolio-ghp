import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
    return (
        <div>
            <Header />
            <br></br><br></br>
            <h1>Contact</h1>
            <br></br>
            <section className="sectionContainer">
                <header className="sectionHeading">Geotecdev</header>
                <p className="sectionText">Mike Ruane</p>
                <p className="sectionText">mruane@menardgroupusa.com</p>
                <p className="sectionText">412.667.1587</p>
            </section>

            <section className="row sectionContainer">
                <header className="sectionHeading">Contact</header>
                <div className="form">
                    <figure className="form-group contactInput">
                        <label>Name</label>
                        <input className="form-control" placeholder="Your full name"></input>
                    </figure>

                    <figure className="form-group contactInput">
                        <label>Message Subject</label>
                        <input className="form-control" placeholder="RE: What's up?"></input>
                    </figure>

                    <figure className="form-group contactInput">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com"></input>
                    </figure>

                    <figure className="form-group contactInput">
                        <label>Message</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </figure>

                    <figure className="contactInput buttonCard">
                        <button type="submit" className="btn btn-primary submitBtn">Submit</button>
                    </figure>   
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;
