import React from 'react';
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>

          
            <section>
                <form action="https://formspree.io/f/xzbkwdpa" method="post">
                    <input required type="text" name="name" class="form-control" placeholder="Name" />
                    <br/>
                    <input required type="email" name="email" class="form-control" placeholder="email@example.com" />
                    <br/>
                    <input required type="number" name="number" class="form-control" placeholder="Number"/>
                    <br/>
                    <textarea rows="6" placeholder="Your Message" className="form-control"></textarea>
                    <br/>
                    <button type="submit" class="btn btn-danger" id="submit">Submit</button>
                </form>  
            </section>

            <aside>

                {/* <img src="./Assets/images/contact.jpg" className="pic"> */}
                <div className="details">

                <a href="https://www.google.com/maps/place/46+Stewart+St,+Ermington+NSW+2115/@-33.7991569,151.0566512,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12a46ffd439a11:0x4397c294d4379e5e!8m2!3d-33.7991614!4d151.0588399"><i className="fas fa-map-marked-alt fa-lg"></i></a>
                <p>46 Stewart Street, Ermington, NSW 2115</p>

                <a href="mailto: cel_agdeppa@yahoo.com"><i className="fas fa-envelope-open-text fa-lg"></i></a>
                <p>cel_agdeppa@yahoo.com</p>
            
                <a href="tel:0424091537"><i className="fas fa-mobile-alt fa-lg"></i></a>
                <p>0424 091 537</p>

                </div>

        </aside>

        </div>
    )
}

export default Contact
