import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { DocsContent } from './DocsContent';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Docs = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Navbar />
      </Section>
    </Background>
    <DocsContent />
    <Banner />
    <Footer />
  </div>
);
