import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f7c11250-4109-11ed-a06d-cdea678ac864";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div class="form-group">
                <input type="text" placeholder="Your name" name="name" required  class="form-control"/>
            </div>
            <div class="form-group">
                <input type="email" placeholder="Email" name="email" required  class="form-control"/>
            </div>
            <div class="form-group">
                <textarea placeholder="Your message" name="message" required  class="form-control" rows="3"/>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary"> Send a message </button>
            </div>
        </form>
    );
};

export default ContactForm;