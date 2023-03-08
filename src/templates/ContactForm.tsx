import { useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Section } from '../layout/Section';
import { Navbar } from './Navbar';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Navbar />
      </Section>

      <Section yPadding="pb-32">
        <form
          name="sonatino-contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="subject"
        >
          <div className="w-full sm:w-1/2 p-4 ml-auto mr-auto">
            <h1 className="text-2xl font-bold text-center mb-2 text-gray-700">
              Contact Us
            </h1>
            <p>Feedback or questions? We&apos;d love to hear from you.</p>
            <input type="hidden" name="form-name" value="early-access" />
            <span className="invisible">
              <input type="text" name="subject" />
            </span>
            <Input
              name="name"
              placeholder="Your name"
              inputClass="w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your email address"
              inputClass="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              textarea
              name="message"
              placeholder="Your message..."
              inputClass="w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
            <div className="mt-4 text-center">
              <Button
                submit
                disabled={
                  !(
                    email &&
                    email.match(/^[^\s@]+@(\w+\.\w+)+$/) &&
                    message &&
                    message.length > 3
                  )
                }
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Section>
    </Background>
  );
};

export { ContactForm };
