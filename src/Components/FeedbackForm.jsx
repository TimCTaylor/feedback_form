import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    // Use the useState hook to initialize a form object with empty strings
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange = (event) => {
        // Note: target is the DOM element that triggered the event, which should be one of the <input> fields defined below in the return
        const { name, value } = event.target;
        // The following is a common React pattern to update state.
        // SetFormData is a function provided by React's useState hook to update  state variable formData
        // The pattern means:
        // Spread the existing formData object (... = spread) by copying all the key-value pairs. It doesnt change the original and so obeys immutability.
        // Having copied everything as is. Now we make the change we need for this event handler (name: value)
        setFormData({
          ...formData,
          [name]: value
        });
        // Note: the input fields are bound to both the formData object and this event handler inside the <input> elements below
      };
    
    // Note: the submission handler is linked to the form in two ways:
    // The <form> tag binds it with the onSubmit property
    // The button element is type="submit" and so triggers the onSubmit event
    // (a button element inside a <form> is submit type by default, but I like the code clarity)
    const handleSubmit = (event) => {
        event.preventDefault();

        const confirmationMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Feedback: ${formData.feedback}
        `;

        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Submitting feedback:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: ''
            });
            alert('Thank you for your valuable feedback!');
        }
    };
    
    return (
        <>
        <nav>
        Tell Us What You Think
        </nav>
        <form onSubmit={handleSubmit} className="feedback-form">
            <h2>We'd Love to Hear From You!</h2>
            <p>Please share your feedback with us.</p>
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            />
            <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
            ></textarea>

            <button type="submit">Submit Feedback</button>
        </form>
        </>
    );
};

export default FeedbackForm;
