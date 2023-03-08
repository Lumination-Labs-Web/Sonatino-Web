import Link from 'next/link';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © {new Date().getFullYear()} Lumination Labs, Inc.
    <br />
    Not affiliated with Arduino, Espressif, or Raspberry Pi.
    <br />
    <Link href="/credits">
      <a>Website Credits</a>
    </Link>
    <style jsx>
      {`
        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
