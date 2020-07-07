import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2005}
              endYear={2010}
              schoolName="Pre Primary CNM School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2010}
              endYear={2020}
              schoolName="Primary & Secondary CNM School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Coding Skills</h2>
            <Skills skill="Java" progress={75} />
            <Skills skill="HTML/CSS" progress={60} />
            <Skills skill="Javascript" progress={40} />
            <Skills skill="Python" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
