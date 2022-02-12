import react from "react";

function Contact() {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <form action="mailto:mike.pizzica@gmail.com" method="GET" enctype="text/plain">

                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name" required="required"></input><br/>

                <label for="email">Email Address:</label><br/>
                <input type="email" id="mail" name="mail" required="required"></input><br/>

                <label for="message">Message:</label><br/>
                <textarea id="comment" name="comment" rows="10" cols="100" required="required"></textarea><br/>
                
                <input id="submit" type="submit" value="Submit"></input>
            </form>
        </section>
        // OLD contact section
        // <section id="contact">
        //     <h1>Contact</h1>
        //     <a href="tel:610-513-2967">610-513-2967</a>
        //     <a href="mailto:mike.pizzica@gmail.com">mike.pizzica@gmail.com</a>
        //     <a href="https://github.com/mikepizzica" target="_blank">GitHub</a>
        //     <a href="https://www.linkedin.com/in/mikepizzica/" target="_blank">LinkedIn</a>
        //     <a href="https://docs.google.com/document/d/1M-TMOKGjUwbVCfruUq9cRhJBFnJ2jlQV/edit?usp=sharing&ouid=117672538973667414696&rtpof=true&sd=true" target="_blank">Résumé</a>
        // </section>

        // mailto link
        // email service - link to marketing service
    )
};

export default Contact;