import "./style.css";

export default function Header() {
  return (
    <header>
      <img src="https://lh3.googleusercontent.com/proxy/kYhU302r-86aqYPU3zwQ5o8X90_HPYd4CShi8akjzhRi2UaXwqD9vkqlCsPAsOzXr88sHPOjjQOJtSsjLKMot886nw-T1f2uhkfV1Ff6P1V2_ieF4nABektYDAS1Q5w2-zC9Nhh7MXc" />
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
