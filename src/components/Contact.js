import React from 'react';
import { useFormik } from 'formik';
import ReactDOM from 'react-dom';

export default function Contact(){

    const validate = values => {
        const errors = {};
        if (!values.name){
            errors.name = 'This field is required';
        }
        if (!values.email) {
            errors.email = 'This field is required';
        }
        if (!values.message) {
            errors.message = 'This seems empty...'
        }
        return errors;
    }

    const myForm = useFormik({
        initialValues: {
                name: '',
                email: '',
                message:''
        },
            validate,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
        },
    });
    return(
        <div className="contact">
            <div className="container">
            <h3>Are you interested<span className="special">?</span> Let<span className="special">'</span>s have a chat<span className="special">!</span></h3>
        <form onSubmit={myForm.handleSubmit}>
            <ul>
                <li>
                <label htmlFor="name"></label>
                <input
                id="name"
                name="name"
                type="text"
                onChange={myForm.handleChange}
                value={myForm.values.name}
                placeholder="Your name"
                />
                {myForm.errors.name ? <div>{myForm.errors.name}</div> : null}
                </li>
            <li>
            <label htmlFor="email"></label>
            <input
            id="email"
            name="email"
            type="email"
            onChange={myForm.handleChange}
            value={myForm.values.email}
            placeholder="Your email"
            />
            {myForm.errors.email ? <div>{myForm.errors.email}</div> : null}
            </li>
            <li>
            <label htmlFor="message"></label>
            <textarea
            id="message"
            name="message"
            onChange={myForm.handleChange}
            value={myForm.values.message}
            placeholder="Your message"
            />
            {myForm.errors.message ? <div>{myForm.errors.message}</div> : null}
            </li>
            <li>
            <button type="submit">Send</button>
            </li>
            </ul>
        </form>
            </div>
        <footer>
            <p>coded with react <span className="special">&</span> sass by <span className="special">clixs</span></p>
        </footer>
        </div>
    )
}