import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { List } from './List';
import { Table } from './Table';

const DocsContent = () => {
  const router = useRouter();

  return (
    <div className="docs">
      <Background color="bg-gray-900">
        <Section yPadding="py-6 px-8">
          <h1 className="text-center text-4xl font-semibold text-gray-300 mb-4">
            Documentation
          </h1>
          <h1 className="text-2xl font-semibold text-gray-100">Contents</h1>
          <ul className="mt-2 mb-6 text-gray-400 text-xl">
            <li>
              <Link href="#start">
                <a>&#8226; Getting Started</a>
              </Link>
            </li>
            <li>
              <Link href="#overview">
                <a>&#8226; Board Overview</a>
              </Link>
            </li>
            <li>
              <Link href="#pins">
                <a>&#8226; Pinout</a>
              </Link>
            </li>
            <li>
              <Link href="#usage">
                <a>&#8226; Technical Details</a>
              </Link>
            </li>
            <li>
              <Link href="#datasheets">
                <a>&#8226; Datasheets</a>
              </Link>
            </li>
            <li>
              <Link href="#resources">
                <a>&#8226; Resources</a>
              </Link>
            </li>
          </ul>
        </Section>
      </Background>

      <Section yPadding="pt-8 pb-10 px-8" title="Getting Started" id="start">
        <p className="py-2">
          So you&apos;ve got your Sonatino &mdash; now what? Let&apos;s make
          some sound!
        </p>
        <p className="py-2">
          The easiest way to get up and running with Sonatino is to install the
          Arduino IDE and flash an example sketch to the board. To do that,
          follow the steps below:
        </p>
        <List
          numbered
          items={[
            <span key="ide">
              Download and install the{' '}
              <a
                href="https://www.arduino.cc/en/software"
                target="_blank"
                rel="noreferrer"
              >
                Arduino IDE
              </a>{' '}
              (version 2.0 or above).
            </span>,
            <span key="board">
              Install Arduino-ESP32 by referring to{' '}
              <a
                href="https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide"
                target="_blank"
                rel="noreferrer"
              >
                these instructions
              </a>
              . Essentially, you need to add the following to &quot;Additional
              boards manager URLs&quot; (in Preferences):
              <span className="block font-bold py-2 break-words">
                https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
              </span>
              After adding the URL, open the Boards Manager, search for
              &quot;esp32&quot;, and install &quot;
              <span className="font-bold">esp32 by Espressif Systems</span>
              &quot;.
            </span>,
            <span key="esp8266audio">
              Install the <span className="font-bold">ESP8266Audio</span>{' '}
              library in the Arduino IDE (using the Library Manager or manually
              from{' '}
              <a
                href="https://github.com/earlephilhower/ESP8266Audio"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              ). This library is required for the example sketch to work.
            </span>,
            <span key="sketch">
              Download the{' '}
              <a href={AppConfig.github_link} target="_blank" rel="noreferrer">
                Sonatino Examples
              </a>{' '}
              and open{' '}
              <span className="font-bold">audio-playback-example.ino</span> with
              the Arduino IDE.
            </span>,
            'Make sure both level selection DIP switches on the board are set to the "ON" position (positioned to the right when the board is oriented as shown in the images in this documentation). They should be set to "ON" by default, but can be changed using a small screwdriver or paperclip.',
            'Plug Sonatino into your computer using a USB-C cable. If a green LED does not light up on the board, try a different USB port or cable.',
            <span key="port">
              Within the Arduino IDE, select the port corresponding to the
              Sonatino board (will vary based on your system), and make sure the
              board is set to &quot;
              <span className="font-bold">ESP32S3 Dev Module</span>
              &quot;. For the serial monitor to work, you&apos;ll also need to
              set &quot;USB CDC on Boot&quot; to &quot;Enabled&quot;.
            </span>,
            <span key="upload">
              Click the &quot;Upload&quot; button to compile the sketch and
              flash it to Sonatino.
            </span>,
          ]}
        />
        <p className="pt-4 pb-10">
          If everything went well, you should see the blue LED begin to flash on
          the board, and if you plug in a pair of headphones you should hear
          music playing.
        </p>
      </Section>

      <Background color="bg-gray-200">
        <Section
          yPadding="py-8 px-8"
          title="Board Overview"
          titleNoMargin
          id="overview"
        >
          <h3 className="p-4 text-center text-2xl -mb-6">MAIN COMPONENTS</h3>
          <div className="w-full sm:w-3/4 p-6 ml-auto mr-auto">
            <img
              src={`${router.basePath}/assets/images/components.png`}
              alt="Board Components"
            />
          </div>

          <h3 className="p-4 text-center text-2xl -mb-6">
            CONTROLS &amp; INDICATORS
          </h3>
          <div className="w-full sm:w-3/4 p-6 ml-auto mr-auto">
            <img
              src={`${router.basePath}/assets/images/controls.png`}
              alt="Board Controls"
            />
          </div>
          <h3 className="p-4 text-center text-2xl -mb-6">
            OPTIONAL COMPONENTS
          </h3>
          <div className="w-1/2 sm:w-1/4 p-6 ml-auto mr-auto -mb-6">
            <img
              src={`${router.basePath}/assets/images/extras.png`}
              alt="Extra Components"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 ml-auto mr-auto">
            <List
              items={[
                'The JST PH 2 connector (left) can soldered to the bottom of the board for battery connections.',
                'The terminal block (right) can be soldered to the SPKR pins for speaker wire connections.',
                '(not included) 2.54mm headers can be soldered to the GPIO + power pins for easy prototyping.',
              ]}
            />
          </div>

          <Table
            headerCols={['Component', 'Function']}
            data={[
              ['ESP32-S3', 'Microcontroller with WiFi and BLE'],
              ['GPIO', 'General Purpose Input/Output'],
              ['ADC', 'Analog-to-Digital Converter (audio input)'],
              ['DAC', 'Digital-to-Analog Converter (audio output)'],
              ['Battery Charging', 'Supports 3.7V LiPo/Li-Ion batteries'],
              ['USB-C', 'Interface for power and programming'],
              [
                'Audio In/Out Jack',
                'Accepts a 3.5mm TRRS cable (mono in, stereo out)',
              ],
              [
                'Speaker Amp',
                'Can drive a small 4Ω speaker connected to SPKR pins (or optional terminal block)',
              ],
              [
                'microSD Card Slot',
                'Read/write access to microSD card using SPI interface',
              ],
              ['Reset Button', 'Resets the ESP32-S3 microcontroller'],
              ['Power LED', 'Green LED indicates the board has power'],
              ['Programmable LED', 'Blue LED can be controlled by software'],
              [
                'Charge Status LED',
                'Red LED indicates battery charging status',
              ],
              ['Mic Preamp Gain', 'Clockwise rotation increases mic gain'],
              [
                'Level Selection',
                <span key="level_selection">
                  Switch #1: Input Level (OFF=Line, ON=Mic)
                  <br />
                  Switch #2: Output Level (OFF=Line, ON=Headphone)
                </span>,
              ],
              ['Speaker Volume', 'Clockwise rotation increases speaker volume'],
            ]}
          />
          <div className="w-full sm:w-1/2 p-6 ml-auto mr-auto bg-white rounded-lg shadow">
            <div className="w-full ml-auto mr-auto">
              <img
                src={`${router.basePath}/assets/images/levels.png`}
                alt="Level Adjustment Controls"
              />
            </div>
            <List
              items={[
                'Use a small screwdriver or paperclip to carefully adjust the level selection DIP switches as needed.',
                'The speaker volume and mic gain controls are adjustable with a small phillips or flat head screwdriver. Do not turn with excessive force; the trimpots are fragile and only have 250° of rotation from minimum to maximum.',
              ]}
            />
          </div>
        </Section>
      </Background>

      <Section yPadding="py-8 px-8" title="Pinout" titleNoMargin id="pins">
        <div className="w-full sm:w-3/4 p-6 ml-auto mr-auto">
          <a
            href={`${router.basePath}/assets/images/pins.png`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${router.basePath}/assets/images/pins.png`}
              alt="Sonatino Pins"
            />
          </a>
        </div>
        <Table
          headerCols={['Pin', 'Component', 'Function']}
          data={[
            [
              'VIN',
              'Power',
              <span key="vin_power">
                Power Input Positive (+) 3.3V - 5V (<a href="#vin">note</a>)
              </span>,
            ],
            [
              '3V3',
              'Power',
              <span key="3v3_power">
                3.3V Output (Regulated) (<a href="#3v3">note</a>)
              </span>,
            ],
            ['Battery-', 'Power', 'Battery Negative (-)'],
            ['Battery+', 'Power', 'Battery Positive (+) 5V Max'],
            ['GND', 'Power', 'Ground'],
            ['GPIO 0', 'Boot / MCLK', 'Boot / MCLK'],
            ['GPIO 1-13', 'GPIO', 'General Purpose I/O'],
            ['GPIO 14', 'DAC', 'Mute (Active LOW)'],
            ['GPIO 15', 'DAC', 'BCLK / SCK'],
            ['GPIO 16', 'DAC', 'LRCLK / WS'],
            ['GPIO 17', 'DAC', 'Data (Out)'],
            [
              'GPIO 18',
              'ADC',
              <span key="sample_rate">
                Sample Rate (<a href="#adc_pins">note</a>)
              </span>,
            ],
            [
              'GPIO 21',
              'ADC',
              <span key="sample_rate">
                Bit Depth (<a href="#adc_pins">note</a>)
              </span>,
            ],
            ['GPIO 38', 'ADC', 'BCLK / SCK'],
            ['GPIO 39', 'ADC', 'LRCLK / WS'],
            ['GPIO 40', 'ADC', 'Data (In)'],
            ['GPIO 41', 'microSD (SPI)', 'D3 / CS / SS'],
            ['GPIO 42', 'microSD (SPI)', 'CLK / SCK'],
            ['GPIO 43', 'microSD (SPI)', 'CMD / SI / MOSI'],
            ['GPIO 44', 'microSD (SPI)', 'D0 / SO / MISO'],
            ['GPIO 45', 'LED', 'Blue LED'],
            ['GPIO 46', 'All Amps', 'Amp Shutdown (Active LOW)'],
            [
              'GPIO 47',
              'Headphone Amp',
              <span key="sample_rate">
                Gain 0 (<a href="#hp_gain">note</a>)
              </span>,
            ],
            [
              'GPIO 48',
              'Headphone Amp',
              <span key="sample_rate">
                Gain 1 (<a href="#hp_gain">note</a>)
              </span>,
            ],
            ['SPKR +', '2.5W Amp', 'Speaker Positive (+)'],
            ['SPKR -', '2.5W Amp', 'Speaker Negative (-)'],
          ]}
        />
      </Section>
      <Background color="bg-gray-200">
        <Section
          yPadding="pt-8 pb-20 px-8"
          title="Technical Details"
          id="usage"
        >
          <h3 className="text-xl font-bold">Power</h3>
          <List
            items={[
              <span key="3v3" id="3v3">
                <span className="font-bold">
                  Do not attempt to power the board using the 3V3 output pin.
                </span>{' '}
                This pin is intended for powering 3.3V peripherals (generally
                around 400mA max) using Sonatino&apos;s onboard regulator.
                Connecting a power source to this pin may damage the board.
              </span>,
              <span key="vin" id="vin">
                <span className="font-bold">
                  If you power Sonatino using the VIN pin, DO NOT connect a
                  battery or USB-C to the board.
                </span>{' '}
                Charging only works with USB-C, and VIN should never be used
                with another power source connected at the same time.
              </span>,
              'Sonatino can draw significant current at times (depending on usage; can be 1A or more). If your power source cannot supply enough current, you may experience unexpected behavior.',
              'The charging circuit is configured to deliver up to 500mA of current to a battery. Please check that your battery can handle this charging rate, especially for batteries with less than 500mAh of capacity.',
              <span key="battery">
                A few ways to reduce power consumption and extend battery life:
                <br />
                <List
                  items={[
                    'Turn off wireless functions on the ESP32-S3 when not in use.',
                    'Configure the ESP32-S3 to use a lower CPU frequency or dynamic frequency scaling (DFS).',
                    'Set GPIO 46 to LOW: this shuts down the 2.5W amp, headphone amp, and microphone preamp.',
                    'Set GPIO 14 to LOW to mute the DAC.',
                    <span key="mclk">
                      Stop outputting a MCLK signal on the ESP32-S3&apos;s GPIO
                      0 (may require calling{' '}
                      <span className="font-mono">i2s_stop()</span>). This will
                      power down the ADC and DAC.
                    </span>,
                    <span key="sleep">
                      Put the ESP32-S3 into light sleep or deep sleep (
                      <span className="font-mono">esp_light_sleep_start()</span>{' '}
                      or{' '}
                      <span className="font-mono">esp_deep_sleep_start()</span>
                      ). If you&apos;ve shut down the amps by setting GPIO 46 to
                      LOW, don&apos;t forget to call{' '}
                      <span className="font-mono">
                        gpio_deep_sleep_hold_en()
                      </span>{' '}
                      before sleeping to keep the pin held low.
                    </span>,
                    "Remove any microSD card if you aren't using it.",
                    'You can disable the green power LED by carefully cutting the trace between the two jumper pads of JP1 on the underside of the board.',
                  ]}
                />
              </span>,
            ]}
          />
          <h3 className="text-xl font-bold">Programming</h3>
          <List
            items={[
              <span key="tools">
                Sonatino can be programmed using a number of different software
                tools. While{' '}
                <a
                  href="https://platformio.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Arduino IDE
                </a>{' '}
                is probably the easiest for getting started,{' '}
                <a
                  href="https://platformio.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  PlatformIO
                </a>{' '}
                and{' '}
                <a
                  href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  ESP-IDF
                </a>{' '}
                offer some additional benefits for more advanced projects.
              </span>,
              "When uploading code, Arduino IDE will usually take care of putting the board into flashing mode and then resetting the board when the upload is complete. If that doesn't work, check that the correct port and board is selected, then try again. Some development tools don't handle the flashing process correctly by default, so you may need to adjust your software's board settings.",
              'In rare cases, you may need to manually put the board into flashing mode by temporarily shorting (e.g., with a short length of wire) the "MCLK/0" pad on the underside of the board with GND. While doing that, press and release the reset button ("RST") on the front and remove the wire.',
            ]}
          />
          <h3 className="text-xl font-bold">Audio</h3>
          <List
            items={[
              <span key="i2s_ports">
                Sonatino uses separate bit clock (BCLK) and word clock (LRCLK)
                lines for the DAC and ADC &mdash; as noted in the pinout. The
                ESP32-S3 supports two I<sup>2</sup>S ports, so you can configure
                and use the DAC and ADC simultaneously (technically they could
                share those lines, but Sonatino wires them separately for added
                flexibility).
              </span>,
              <span key="adc_pins" id="adc_pins">
                GPIO 18 and GPIO 21 are connected to FSAMPEN and IWL pins of the
                WM8782 (ADC), respectively. These pins are used to configure the
                ADC&apos;s sample rate and word length. See the{' '}
                <a
                  href="/assets/datasheets/WM8782_v4.8.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  WM8782 datasheet
                </a>{' '}
                for more information.
              </span>,
              <span key="hp_gain" id="hp_gain">
                GPIO 47 and GPIO 48 are connected to GAIN0 and GAIN1 of the
                TPA6132A2 (Headphone Amp), respectively. The default state
                corresponds to 0 dB gain (GAIN0 is pulled HIGH and GAIN1 is
                pulled LOW), but can be set to -6 dB, 0dB, 3dB, or 6 dB based on
                pin state. See section 7.4.1 of the{' '}
                <a
                  href="/assets/datasheets/tpa6132a2.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  TPA6132A2 datasheet
                </a>{' '}
                for more information.
              </span>,
              'The 2.5W mono amplifier is connected to the left output channel.',
              'Without properly setting volume/gain (in software and hardware), audio output from Sonatino can be very loud! It can also become distorted if the volume is set too high. Please protect your ears and be careful when testing audio output!',
              'Crackling, stuttering, or choppy audio is most often caused by misconfigured settings (sample rate, word length, master clock, DMA buffer, etc.) or by delays in the audio processing pipeline. Double-check that all your settings are correct and that no time-consuming tasks are blocking the delivery of audio samples. You may need to use RTOS programming to take advantage of both cores of the ESP32-S3.',
            ]}
          />
          <h3 className="text-xl font-bold">Cases / Enclosures</h3>
          <List
            items={[
              "Sonatino will fit into some cases designed for the Raspberry Pi Zero, but not all. Cases that are open around the edges of the board generally work without modification, but those with cutouts for ports on the Raspberry Pi Zero (including the official case sold by Raspberry Pi) won't match the ports on Sonatino. Often, those cases can be modified by expanding or cutting out new holes for Sonatino's ports.",
            ]}
          />
        </Section>
      </Background>
      <Section yPadding="pt-8 pb-20 px-8" title="Datasheets" id="datasheets">
        <h3 className="text-xl font-bold mt-2">Microcontroller</h3>
        <p>
          <a
            href="/assets/datasheets/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf"
            target="_blank"
            rel="noreferrer"
          >
            ESP32-S3-WROOM-1 Datasheet
          </a>
        </p>

        <h3 className="text-xl font-bold mt-2">DAC</h3>
        <p>
          <a
            href="/assets/datasheets/WM8524_v4.1.pdf"
            target="_blank"
            rel="noreferrer"
          >
            WM8524 Datasheet
          </a>
        </p>

        <h3 className="text-xl font-bold mt-2">ADC</h3>
        <p>
          <a
            href="/assets/datasheets/WM8782_v4.8.pdf"
            target="_blank"
            rel="noreferrer"
          >
            WM8782 Datasheet
          </a>
        </p>

        <h3 className="text-xl font-bold mt-2">Stereo Headphone Amplifier</h3>
        <p>
          <a
            href="/assets/datasheets/tpa6132a2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            TPA6132A2 Datasheet
          </a>
        </p>

        <h3 className="text-xl font-bold mt-2">2.5W Amplifier</h3>
        <p>
          <a
            href="/assets/datasheets/PAM8302A.pdf"
            target="_blank"
            rel="noreferrer"
          >
            PAM8302A Datasheet
          </a>
        </p>

        <h3 className="text-xl font-bold mt-2">Microphone Preamplifier</h3>
        <p>
          <a
            href="/assets/datasheets/MAX4467.pdf"
            target="_blank"
            rel="noreferrer"
          >
            MAX4467 Datasheet
          </a>
        </p>

        <h3 className="text-xl font-bold mt-2">Battery Charger</h3>
        <p>
          <a
            href="/assets/datasheets/tp4056.pdf"
            target="_blank"
            rel="noreferrer"
          >
            TP4056 Datasheet
          </a>
        </p>
      </Section>
      <Background color="bg-gray-200">
        <Section
          yPadding="pt-8 pb-20 px-8"
          title="Additional Resources"
          id="resources"
        >
          <p>
            <a
              href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/api-reference/peripherals/i2s.html"
              target="_blank"
              rel="noreferrer"
            >
              Inter-IC Sound (I2S)
            </a>{' '}
            &mdash; Espressif API reference for I<sup>2</sup>S audio on ESP32-S3
          </p>
          <p>
            <a
              href="https://github.com/espressif/esp-adf"
              target="_blank"
              rel="noreferrer"
            >
              ESP-ADF
            </a>{' '}
            &mdash; Espressif Audio Development Framework
          </p>
          <p>
            <a
              href="https://www.espressif.com/en/solutions/audio-solutions/esp-skainet/overview"
              target="_blank"
              rel="noreferrer"
            >
              ESP-Skainet
            </a>{' '}
            &mdash; Voice assistant / speech recognition for ESP32-S3
          </p>
          <p>
            <a
              href="https://github.com/earlephilhower/ESP8266Audio"
              target="_blank"
              rel="noreferrer"
            >
              ESP8266Audio
            </a>{' '}
            &mdash; Arduino library for playing audio on ESP8266 and ESP32
          </p>
          <p>
            <a
              href="https://github.com/pschatzmann/arduino-audio-tools"
              target="_blank"
              rel="noreferrer"
            >
              pschatzmann/arduino-audio-tools
            </a>{' '}
            &mdash; Arduino Audio Tools
          </p>
          <p>
            <a
              href="https://github.com/marcel-licence/esp32_basic_synth"
              target="_blank"
              rel="noreferrer"
            >
              esp32_basic_synth
            </a>{' '}
            &mdash; ESP32 based simple synthesizer project
          </p>
          <hr className="h-px my-8 border-0 dark:bg-gray-500" />
          <div className="text-center">
            <h3 className="mt-4 text-2xl font-light">
              Did you make something cool with Sonatino?
            </h3>
            <p>
              <Link href="/contact">
                <a className="text-lg font-semibold">
                  We want to hear about it!
                </a>
              </Link>
            </p>
          </div>
        </Section>
      </Background>
      <style jsx>
        {`
          .docs :global(a) {
            @apply text-primary-500;
          }
        `}
      </style>
    </div>
  );
};

export { DocsContent };
