import "./style.css";

export default function Header() {
  return (
    <header>
      <img src="https://discord.com/assets/28174a34e77bb5e5310ced9f95cb480b.png" />
      <div className="hyperlinks">
        <a href="#!">Download</a>
        <a href="#!">Why Discord?</a>
        <a href="#!">Nitro</a>
        <a href="#!">Satefy</a>
        <a href="#!">Support</a>
      </div>
      <button>Login</button>
    </header>
  );
}
