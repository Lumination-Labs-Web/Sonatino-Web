import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { List } from '../templates/List';
import { Table } from '../templates/Table';
import { AppConfig } from '../utils/AppConfig';

const DocsContent = () => {
  const router = useRouter();

  return (
    <div className="docs">
      <Background color="bg-gray-900">
        <Section yPadding="py-6 px-8">
          <h1 className="text-center text-4xl font-semibold text-gray-300">
            Documentation
          </h1>
          <h2 className="text-center text-2xl text-gray-400">
            Board Revision: 3.1.x (Latest)
          </h2>
          <p className="text-center text-gray-400 mb-4">
            (boards shipped in 2024)
          </p>
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
            'Make sure both level selection DIP switches on the board are set to the "ON" position (positioned to the right when the board is oriented as shown in the images in this documentation). They should be set to "ON" by default, but can be changed using a small toothpick or paperclip.',
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
        <p className="pt-4 pb-2">
          Congratulations! If everything went well, you should see the RGB LED
          begin to flash on the board, and if you plug in a pair of headphones
          you should hear music playing. Go ahead and try any of the other
          example sketches or start writing your own code to do something
          amazing!
        </p>
        <p className="pt-4 pb-10">
          Antenna Note: The &quot;audio-playback-example&quot; sketch does not
          use any wireless features, so the antenna can be left disconnected. If
          you want to use WiFi or BLE in another sketch, don&apos;t forget to
          carefully connect the external antenna to the{' '}
          <a href="#pins">U.FL connector</a> on the board. Follow{' '}
          <a
            href="https://www.digikey.com/en/maker/projects/three-quick-tips-about-using-u.fl/f1c192acf52d4aedacdb7a73b1258f87"
            target="_blank"
            rel="noreferrer"
          >
            these tips
          </a>{' '}
          for properly connecting and disconnecting the antenna.
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
              src={`${router.basePath}/assets/images/v3.1/components.png`}
              alt="Board Components"
            />
          </div>

          <h3 className="p-4 text-center text-2xl -mb-6">
            CONTROLS &amp; INDICATORS
          </h3>
          <div className="w-full sm:w-3/4 p-6 ml-auto mr-auto">
            <img
              src={`${router.basePath}/assets/images/v3.1/controls.png`}
              alt="Board Controls"
            />
          </div>
          <h3 className="p-4 text-center text-2xl -mb-6">ANTENNA</h3>
          <div className="w-3/4 sm:w-2/4 p-6 ml-auto mr-auto -mb-6">
            <img
              src={`${router.basePath}/assets/images/v3.1/antenna.png`}
              alt="Antenna"
            />
          </div>
          <h3 className="p-4 text-center text-2xl -mb-6">ANTENNA CONNECTION</h3>
          <div className="w-1/2 sm:w-2/5 p-6 ml-auto mr-auto">
            <img
              src={`${router.basePath}/assets/images/v3.1/antenna-placement.png`}
              alt="Antenna Placement"
            />
          </div>
          <h3 className="p-4 text-center text-2xl -mb-6">
            OPTIONAL COMPONENTS
          </h3>
          <div className="w-1/2 sm:w-1/4 p-6 ml-auto mr-auto -mb-6">
            <img
              src={`${router.basePath}/assets/images/v3.1/extras.png`}
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
              ['Boot Button', 'Forces the ESP32-S3 into flashing mode'],
              ['Power LED', 'Green LED indicates the board has power'],
              ['RGB LED', 'Programmable RGB Status LED'],
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
            ]}
          />
          <div className="w-full sm:w-1/2 p-6 ml-auto mr-auto bg-white rounded-lg shadow">
            <div className="w-full ml-auto mr-auto">
              <img
                src={`${router.basePath}/assets/images/v3.1/levels.png`}
                alt="Level Adjustment Controls"
              />
            </div>
            <List
              items={[
                'Use a small toothpick or paperclip to carefully adjust the level selection DIP switches as needed.',
                'The mic gain control is adjustable with a small phillips or flat head screwdriver. Do not turn with excessive force; the trimpot is fragile and only has 250° of rotation from minimum to maximum.',
                <span key="speaker_gain">
                  For adjusting gain of the speaker amp or to select a different
                  channel mode (default is left/2 + right/2), refer to the{' '}
                  <a
                    href="/assets/datasheets/max98357a-max98357b.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MAX98357A datasheet
                  </a>
                  . See <a href="#pins">pinout</a> for details.
                </span>,
              ]}
            />
          </div>
        </Section>
      </Background>

      <Section yPadding="py-8 px-8" title="Pinout" titleNoMargin id="pins">
        <div className="w-full sm:w-3/4 p-6 ml-auto mr-auto">
          <a
            href={`${router.basePath}/assets/images/v3.1/pins-white.png`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${router.basePath}/assets/images/v3.1/pins.png`}
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
                Power Input Positive (+) 5V (<a href="#vin">note</a>)
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
            [
              'PWR OFF',
              'Power',
              <span key="pwr_off_pin">
                Power Off (Active LOW) (<a href="#pwr_off">note</a>)
              </span>,
            ],
            ['GPIO 0', 'Boot / MCLK', 'Boot / MCLK'],
            ['GPIO 1-13', 'GPIO', 'General Purpose I/O'],
            ['GPIO 14', 'DAC', 'Mute (Active LOW) (audio jack only)'],
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
            ['GPIO 45', 'RGB LED', 'Programmable RGB LED (WS2812B)'],
            [
              'GPIO 46',
              'Headphone Amp',
              <span key="sample_rate">
                Gain 1 (<a href="#hp_gain">note</a>)
              </span>,
            ],
            [
              'GPIO 47',
              'Headphone Amp',
              <span key="hp_gain">
                Gain 0 (<a href="#hp_gain">note</a>)
              </span>,
            ],
            ['GPIO 48', 'All Amps', 'Amp Shutdown (Active LOW)'],
            [
              'GAIN',
              'Speaker Amp',
              <span key="gain_selection">
                Gain (<a href="#amp_gain">note</a>)
              </span>,
            ],
            [
              'SD / CHNL_SEL',
              'Speaker Amp',
              <span key="channel_selection">
                Shutdown and Channel Selection (<a href="#ch_sel">note</a>)
              </span>,
            ],
            ['SPKR +', 'Speaker Amp', 'Speaker Positive (+)'],
            ['SPKR -', 'Speaker Amp', 'Speaker Negative (-)'],
            [
              'AUDIO JACK',
              '3.5mm TRRS (CTIA)',
              <span key="audio_jack_pinout">
                Tip: Left Out
                <br />
                Ring 1: Right Out
                <br />
                Ring 2: Ground
                <br />
                Sleeve: Mic In
              </span>,
            ],
            [
              'ANTENNA',
              'Antenna Connector',
              'WiFi/Bluetooth Antenna (U.FL/IPX)',
            ],
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
              'The board can be powered from USB-C, DC power (VIN), or a 3.7V lithium battery. If USB-C and VIN are both connected (with VIN at 5V), the board will draw power from VIN. If a battery is also connected, USB-C or VIN will charge the battery while powering the board.',
              <span key="vin" id="vin">
                VIN should normally be 5V. Due to some voltage drop in the
                board&apos;s power protection circuitry and tolerance of the
                regulators, you can supply 3.6V up to 6V, but please be careful
                not to exceed 6V as it is likely to damage to the board.
              </span>,
              'Sonatino can draw significant current at times (depending on usage; can be 1A or more). If your power source cannot supply enough current, you may experience unexpected behavior.',
            ]}
          />
          <h3 className="text-xl font-bold">Battery</h3>
          <List
            items={[
              'The charging circuit is configured to deliver up to 500mA of current to a rechargeable lithium battery. Please check that your battery can handle this charging rate, especially for batteries with less than 500mAh of capacity.',
              'When connecting a battery for the first time, you may need to briefly short the negative (-) battery pin to ground (GND) to enable operation. This is a known behavior of the battery protection chip. The battery charge status LED may also remain illuminated when no battery is connected; this is normal and does not indicate a problem with the board.',
              <span key="battery_voltage">
                Battery voltage can be monitored using GPIO 10. To enable this
                feature, solder the jumper pad labeled &quot;JP2&quot; on the
                bottom of the board (after doing that, GPIO 10 can only be used
                for battery monitoring). With JP2 bridged, GPIO 10 is connected
                to the battery through a voltage divider (a 150kΩ resistor to
                the battery and a 470kΩ resistor to ground). Using 12-bit ADC
                values from GPIO 10 (values 0-4095), battery voltage can be
                estimated using this formula:
                <br />
                <span className="font-mono">
                  V<sub>bat</sub> = ADC_READING &#247; 941
                </span>
                <br />
                For best accuracy, use the average from multiple readings.
              </span>,
              <span key="pwr_off" id="pwr_off">
                The PWR OFF pin (near the USB-C connector) can be used to shut
                down the board while still allowing the battery to charge. To
                shut down the board, connect the PWR OFF pin to ground (GND)
                using a jumper wire or a switch.
              </span>,
              <span key="battery">
                A few ways to reduce power consumption and extend battery life:
                <br />
                <List
                  items={[
                    'Turn off wireless functions on the ESP32-S3 when not in use.',
                    'Configure the ESP32-S3 to use a lower CPU frequency or dynamic frequency scaling (DFS).',
                    'Set GPIO 48 to LOW: this shuts down the speaker amp, headphone amp, and microphone preamp.',
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
                      ). If you&apos;ve shut down the amps by setting GPIO 48 to
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
              'In rare cases, you may need to manually put the board into flashing mode. This can be done by holding down the boot button while pressing the reset button, then releasing both buttons.',
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
              <span key="amp_dac">
                The 3.2W speaker amp has its own independent DAC and shares the
                same I<sup>2</sup>S lines as the main DAC. The speaker
                amp&apos;s DAC can operate up to 96kHz, so only the main DAC
                (via the 3.5mm jack) will work for higher sample rates (up to
                192kHz).
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
                GPIO 46 and GPIO 47 are connected to GAIN1 and GAIN0 of the
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
              <span key="ch_sel" id="ch_sel">
                The SD pin (next to the speaker output) is connected with a
                680kΩ resistor to GPIO 48 (amp shutdown), which in turn is
                normally pulled HIGH (to 3.3V) by a 10kΩ resistor. By default,
                this means the speaker amp is enabled and in{' '}
                <span className="font-mono">left/2 + right/2</span> mode (it
                outputs an average of both stereo channels). When GPIO 48 is set
                to LOW (in software), this amp &mdash; along with the other amps
                &mdash; will be shut down. If you wish to ouput only the right
                channel, pull up the SD pin to 3.3V through a 330kΩ resistor.
                For the left channel only, connect it directly to 3.3V.
              </span>,
              <span key="amp_gain" id="amp_gain">
                The GAIN pin (next to the speaker output) is normally
                unconnected, corresponding to 9 dB of gain. Different levels of
                speaker gain can be selected by connecting the GAIN pin as
                described in the{' '}
                <a
                  href="/assets/datasheets/max98357a-max98357b.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  MAX98357A datasheet
                </a>
                .
              </span>,
              'Without properly setting volume/gain (in software and hardware), audio output from Sonatino can be very loud! It can also become distorted if the volume is set too high. Please protect your ears and be careful when testing audio output!',
              <span key="noise">
                Noise in the audio can be caused by a number of factors
                including noisy power supplies, antennas that are too close,
                interference from other devices, and ground loops. If you
                encounter noise, try to isolate the source of the problem by
                testing different configurations and settings. USB-C power from
                a computer can often introduce noise, so try using a different
                power source if you suspect this is the issue. If noise is only
                present during wireless communication, try moving the antenna,
                using a different antenna (or adding shielding between the
                antenna and board), or lowering the transmit power (
                <span className="font-mono">esp_wifi_set_max_tx_power()</span>{' '}
                or <span className="font-mono">esp_ble_tx_power_set()</span>).
              </span>,
              'Crackling, stuttering, or choppy audio is most often caused by misconfigured settings (sample rate, word length, master clock, DMA buffer, etc.) or by delays in the audio processing pipeline. Double-check that all your settings are correct and that no time-consuming tasks are blocking the delivery of audio samples. You may need to use RTOS programming to take advantage of both cores of the ESP32-S3.',
            ]}
          />
          <h3 className="text-xl font-bold">Cases / Enclosures</h3>
          <List
            items={[
              "Sonatino will fit into some cases designed for the Raspberry Pi Zero, but not all. Cases that are open around the edges of the board generally work without modification, but those with cutouts for ports on the Raspberry Pi Zero (including the official case sold by Raspberry Pi) won't match the ports on Sonatino. Those cases can sometimes be modified by expanding or cutting out new holes for Sonatino's ports.",
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

        <h3 className="text-xl font-bold mt-2">3.2W Amplifier</h3>
        <p>
          <a
            href="/assets/datasheets/max98357a-max98357b.pdf"
            target="_blank"
            rel="noreferrer"
          >
            MAX98357A Datasheet
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

        <h3 className="text-xl font-bold mt-2">RGB LED</h3>
        <p>
          <a
            href="/assets/datasheets/XL-1615RGBC-WS2812B.pdf"
            target="_blank"
            rel="noreferrer"
          >
            XL-1615RGBC-WS2812B Datasheet
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
                <a className="text-lg font-semibold">Share your experience!</a>
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
