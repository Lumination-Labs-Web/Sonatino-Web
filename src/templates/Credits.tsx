import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const Credits = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Navbar />
      </Section>
    </Background>
    <Section yPadding="py-6 px-8" title="Website Credits">
      <h3 className="text-xl font-semibold mt-6">Website Template</h3>
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      <h3 className="text-xl font-semibold mt-6">Images</h3>
      <p>
        Speaker: <a href="http://www.freepik.com">Designed by Freepik</a>
      </p>
      <p>
        Chip:{' '}
        <a href="http://www.freepik.com">Designed by macrovector / Freepik</a>
      </p>
      <p>
        Wireless Symbol / Headphone cable:{' '}
        <a href="http://www.freepik.com">Designed by vectorpocket / Freepik</a>
      </p>
      <p>
        Headphone Cable:{' '}
        <a href="https://www.freepik.com">Image by macrovector</a> on Freepik
      </p>
      <p>
        Starfield: Image by <a href="https://www.freepik.com">Freepik</a>
      </p>
      <p>
        Audio Jack: <a href="https://www.freepik.com">Image by pongpongching</a>{' '}
        on Freepik
      </p>
      <p>
        microSD:{' '}
        <a
          href="https://www.flaticon.com/free-icons/memory-card"
          title="memory card icons"
        >
          Memory card icons created by DinosoftLabs - Flaticon
        </a>
      </p>
    </Section>
    <div className="p-20" />
    <Footer />
  </div>
);

export { Credits };
