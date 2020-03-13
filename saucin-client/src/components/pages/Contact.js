import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { sendMessage } from '../../actions/contact';
import PropTypes from 'prop-types';

const Contact = ({ sendMessage, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    sendMessage({ name, email, message });

    setAlert('Message Sent!', 'bg-green-600 text-white');
    
  };

  return (
    <Fragment>
      <div className="flex justify-center mb-10">
        <form
          id="create-message-form"
          onSubmit={e => onSubmit(e)}
          className="flex-1 w-full max-w-lg"
        >
          <div className="lg:text-4xl md:text-3xl sm:text-xl pacifico text-center mt-4">
            Get in Touch
          </div>
          <div className="lg:text-xl text-center m-4">
            For business inquiries please send a message and i'll respond as
            soon as possible.
          </div>
          <div className="p-8 mt-10 rounded overflow-hidden sm:shadow-none md:shadow-lg lg:shadow-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name *
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-blue-100"
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  placeholder="Full Name"
                  required
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  E-mail *
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-blue-100"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  placeholder="Email Address"
                  required
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Message *
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-blue-100 h-48 resize-none"
                  name="message"
                  value={message}
                  onChange={e => onChange(e)}
                  placeholder="Detailed message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded shadow rounded shadow"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired
};

export default connect(null, { sendMessage, setAlert })(Contact);
