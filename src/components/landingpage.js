import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Logo from "../logo.jpeg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Logo} alt="avatar" className="avatar-img grow" />

            <div className="banner-text">
              <h1 className="itsme">Android & Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | React | NodeJS | Express | FirebaseDB |
                Android Studio
              </p>

              <div className="social-links">
                {/* Instagram */}
                <a
                  className="grow"
                  href="http://instagram.com/optimumsetups"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  className="grow"
                  href="http://github.com/rivaanranawat"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a
                  className="grow"
                  href="http://twitter.com/rivaanranawat"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>

                <a
                  className="grow"
                  href="http://github.com/rivaanranawat"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
