import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

export const Contact = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <ContactForm />
    <Footer />
  </div>
);
