import "../index.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="title-main">
            <h1>Power Up</h1>
            <span>Nutrition</span>
          </div>
          <div className="contacts">
            <a href="tel:+38 096 380 0000">+38 096 380 0010</a>
            <a href="https://www.instagram.com/accounts/emailsignup/">
              <img
                src="./public/icons/instagram-logo.svg"
                alt="instagram logo"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img src="./public/icons/youtube-logo.svg" alt="youtube logo" />
            </a>
            <a href="https://www.tiktok.com/signup">
              <img src="./public/icons/tiktok-logo.svg" alt="tiktok logo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
