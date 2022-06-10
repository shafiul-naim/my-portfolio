import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9e185hv", "template_2y4rzdh", form.current, "0Xb44FK-JM1Cv48u8")
      .then(
        (result) => {
          toast.success('Your email has sent');
        },
        (error) => {
            toast.error('Send again');
        }
      );
      e.target.reset();
  };
  return (
    <div id="contact" class="hero min-h-screen bg-base-100 lg:px-12 sm:px-2 ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Get in touch</h1>
          <p class="py-6">
            If you want to build a website or have any question feel free to ask
            me
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form ref={form} onSubmit={sendEmail}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Your message"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Send message"
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
