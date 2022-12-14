import React from 'react';
import contact from '../assets/contact me.jpg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { FaSearchLocation, FaPhone, FaMailBulk } from 'react-icons/fa'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xspbpyo', 'template_62p43lu', form.current, 'Vm0eHU7OEx5jAouOF')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    toast.success('Your Email Sent Successfully.')
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-900" data-aos="zoom-in-down"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="2000">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-white">Let's talk!</h2>
                        <div className="dark:text-gray-400">Find me On</div>
                        <div>
                            <h className='text-white mb-4'><span className=' font-bold'><FaSearchLocation className='inline text-xl' /> Address: </span> Jamalpur,2000 Dhaka, Bangladesh. </h>
                        </div>
                        <div className='mt-5'>
                            <h className='text-white mt-4'><span className=' font-bold'><FaPhone className='inline text-xl' /> Phone: </span>+8801753471022</h>
                        </div>
                        <div className='mt-5'>
                            <h className='text-white mt-4'><span className=' font-bold'><FaMailBulk className='inline text-xl' /> Email: </span>nahianmd925@gmail.com</h>
                        </div>

                    </div>
                    <img src={contact} alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form ref={form} onSubmit={sendEmail} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm text-white">Full name</label>
                        <input id="name" name='user_name' type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-300" required />
                    </div>
                    <div>
                        <label for="email" className="text-sm text-white">Email</label>
                        <input id="email" name='user_email' type="email" className="w-full p-3 rounded dark:bg-gray-300" required />
                    </div>
                    <div>
                        <label for="message" className="text-sm text-white">Message</label>
                        <textarea id="message" required name='message' rows="3" className="w-full p-3 rounded dark:bg-gray-300"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;