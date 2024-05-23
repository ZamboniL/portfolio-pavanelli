import Link from './Link';

export default function Footer() {
  return (
    <footer className="flex max-w-8xl flex-col items-center gap-5 py-8 text-white/50 md:w-full md:flex-row md:justify-between md:pt-24">
      <p>Lucas Pavanelli © 2024.</p>
      <ul className="flex justify-center gap-8">
        <li>
          <Link href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
            <img src="/icon/linkedin.png" alt="x" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/lucaspavanelli/">
            <img src="/icon/instagram.png" alt="x" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
