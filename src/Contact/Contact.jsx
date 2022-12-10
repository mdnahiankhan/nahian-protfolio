import React from 'react';
import contact from '../assets/contact me.jpg'

const Contact = () => {
    const HandleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message);
    }
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-900">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-white">Let's talk!</h2>
                        <div className="dark:text-gray-400">Have you agree to work with me please Contact me.</div>
                    </div>
                    <img src={contact} alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form onSubmit={HandleSubmit} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm text-white">Full name</label>
                        <input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label for="email" className="text-sm text-white">Email</label>
                        <input id="email" name='email' type="email" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label for="message" className="text-sm text-white">Message</label>
                        <textarea id="message" name='message' rows="3" className="w-full p-3 rounded dark:bg-gray-300"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;