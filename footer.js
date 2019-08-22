import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="">Tous les droits reservés</div>
      <div className="newsletter" />
      <div className="socialmedia">
        <div id="sidebar" className="desktop-only" style={{ opacity: 1 }}>
          <div className="socialbox">
            <div class="follow-title">Follow Us</div>
            <div className="social">
              <a
                data-elementtrackid="link-facebook"
                href="https://www.facebook.com"
                id="fs-fb"
              >
                Facebook
              </a>
              <a
                data-elementtrackid="link-twitter"
                href="https://twitter.com"
                id="fs-tw"
              >
                Twitter
              </a>
              <a
                data-elementtrackid="link-linkedIn"
                href="https://www.linkedin.com"
                id="fs-ln"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Footer;
