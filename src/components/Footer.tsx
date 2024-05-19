export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 text-white/50 items-center pb-8 pt-24">
      <p>Lucas Pavanelli © 2024.</p>
      <ul className="flex justify-center gap-8 opacity-50">
        <li>
          <a href="">
            <img src="icon/x.png" alt="x" width={20} height={20} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="icon/linkedin.png" alt="x" width={20} height={20} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="icon/instagram.png" alt="x" width={20} height={20} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="icon/behance.png" alt="x" width={20} height={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
