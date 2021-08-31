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
            <a href="home"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" class="svg-inline--fa fa-angle-double-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#f2e8e3" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path></svg></a>
        <footer>
            <p>coded with react <span className="special">&</span> sass by <span className="special">clixs</span></p>
        </footer>
        </div>
    )
}