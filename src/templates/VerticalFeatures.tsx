import { useRouter } from 'next/router';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { List } from './List';

const VerticalFeatures = () => {
  const router = useRouter();
  return (
    <Section
      title="HD Audio Meets a Familiar Platform."
      titleClass="text-4xl text-gray-900 font-bold"
      description={
        <div className="flex flex-wrap items-center flex-row-reverse mb-20">
          <div className="w-full sm:w-2/3 text-center">
            <div className="mt-6 text-xl leading-9">
              Sonatino builds on the power and familiarity of the{' '}
              <strong>ESP32-S3</strong> platform (compatible with{' '}
              <strong>Arduino IDE</strong>) and adds incredible audio
              capabilities &mdash; all in a form factor matching the Raspberry
              Pi Zero.
            </div>
          </div>

          <div className="w-full sm:w-1/3 p-6">
            <img
              src={`${router.basePath}/assets/images/audio_jack.png`}
              alt="Audio Jack"
            />
          </div>
        </div>
      }
    >
      <VerticalFeatureRow
        title="Dedicated DAC and ADC"
        description="High-performance digital-to-analog and analog-to-digital chips deliver 24-bit, 192kHz audio through the built-in 3.5mm audio jack. Simultaneous input/output is possible using a TRRS adapter or headset. The integrated amplifer is capable of driving headphones, and input can be received at line or microphone levels using a built-in microphone preamp."
        image="/assets/images/dac_adc.svg"
        imageAlt="DAC and ADC"
      />
      <VerticalFeatureRow
        title="Built-In Amplifier"
        description="Sonatino features a built-in class D mono amplifier capable of driving a small 4Ω speaker at 2.5W, making it incredibly easy to add audio output to your project with minimal external components."
        image="/assets/images/speaker.svg"
        imageAlt="Speaker"
        reverse
      />
      <VerticalFeatureRow
        title="Wireless and Wired Connectivity"
        description="Interact with your project wirelessly from nearby devices, or over the internet. Sonatino has built-in WiFi and Bluetooth 5 (LE) connectivity, USB-C, and 13 general-purpose I/O (GPIO) pins for connecting additional peripherals. And of course, connect audio devices using the built-in 3.5mm audio jack."
        image="/assets/images/connectivity.svg"
        imageAlt="WiFi and Wired Connectivity"
      />
      <VerticalFeatureRow
        title="Abundant Storage Options"
        description="Need a place to store digital audio files or other project data? No problem! Sonatino's microcontroller includes 16 MB of flash memory, 8 MB of PSRAM (useful for code that needs more working memory), as well as a microSD card slot for additional storage."
        image="/assets/images/microsd_flash.svg"
        imageAlt="Flash and microSD Storage"
        reverse
      />
      <VerticalFeatureRow
        title="Battery-Powered Flexibility"
        description="Sonatino can be powered via USB-C, a 5 volt DC power supply, or a 3.7 volt LiPo/Li-ion battery. The built-in battery charger enables USB-C charging of a connected battery while operating the board, and Sonatino helps protect your battery from overcharging and over-discharging. The microcontroller and audio components can even be put into low-power mode for extended battery life."
        image="/assets/images/battery.svg"
        imageAlt="Battery"
      />
      <div className="mt-24 flex flex-col items-center">
        <div className="sm:w-3/4">
          <h2 className="text-2xl text-center">Sonatino Specifications</h2>
          <List
            title="Microcontroller & Storage"
            items={[
              'Microcontroller: ESP32-S3-WROOM-1 with 16 MB flash and 8 MB PSRAM (previously 2 MB PSRAM)',
              'Additional Storage: microSD card slot with SPI interface',
            ]}
          />
          <List
            title="Audio"
            items={[
              <span key="dac">
                DAC: Cirrus Logic WM8524 &mdash; up to 24-bit 192kHz output
                (stereo)
              </span>,
              <span key="adc">
                ADC: Cirrus Logic WM8782 &mdash; up to 24-bit 192kHz input
                (mono)
              </span>,
              <span key="format">
                Audio format: I<sup>2</sup>S
              </span>,
              <span key="amp">
                Speaker Amp: PAM8302 &mdash; 2.5W @ 4&#8486; (mono) with
                adjustable volume
              </span>,
              'Interface: 3.5mm audio jack supporting input and output (TRRS, CTIA standard)',
              'Stereo Headphone Amp: TPA6132A2',
              'Microphone Preamp: MAX4467',
              'Input Level: Mic or line level',
              'Output Level: Line or headphone level',
              'Speaker Connection: onboard pins, optional screw terminal',
            ]}
          />
          <List
            title="Connectivity"
            items={[
              'WiFi: 802.11 b/g/n',
              'Bluetooth: 5.0 (LE)',
              'GPIO: 13 general-purpose I/O pins',
              'USB-C for programming and data I/O',
            ]}
          />
          <List
            title="Power"
            items={[
              'Power Source: USB-C, 3.7V LiPo/Li-Ion battery, or 5V DC',
              'Battery Charging: Charging circuit with overcharge and over-discharge protection',
              'Low-Power Mode: ESP32-S3 supports deep sleep, and audio components can be put into low-power mode to extend battery life',
              'Battery Connection: onboard pins, optional JST PH 2 battery connector (check polarity before connecting)',
            ]}
          />
          <List
            title="Status and Control"
            items={[
              'Trim pots for adjusting speaker volume and mic gain',
              'Dip switches for selecting mic/line level and line/headphone level',
              'Reset button',
              'User-programmable blue status LED',
              'Power and battery charging status LEDs',
            ]}
          />
          <List
            title="Physical"
            items={[
              'Dimensions: 65 x 30 mm x 7mm (2.6 x 1.2 x 0.3 in)',
              'Weight: 11 g (0.4 oz)',
              'Same size as a Raspberry Pi Zero (not compatible with Pi Zero)',
              'Can be used with some Pi Zero cases (may require case modification)',
            ]}
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-6 mt-10 -mb-20 ml-auto mr-auto">
        <img
          src={`${router.basePath}/assets/images/main.png`}
          alt="Sonatino PCB"
        />
      </div>
    </Section>
  );
};

export { VerticalFeatures };
