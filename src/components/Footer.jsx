import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <Logo />
      </div>
      <div className="social">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </footer>
  );
}
