function Header() {
  return (
    <div className="container">
      <div className="item1">
        <a href="#">
          <img src="./assets/logo.jpg" alt="logo" />
        </a>
      </div>
      <div className="item2">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="/About.html">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </div>
      <div className="item3">
        <div>F</div>
        <div>I</div>
        <div>T</div>
      </div>
    </div>
  );
}

export default Header;
