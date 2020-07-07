import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>Face Recognition</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              A Face Recognition App using Clarifai API
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/facerecognition">
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <a href="https://rfacerecognition.netlify.app/">
                <IconButton name="link" />
              </a>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>R Chat</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              A web chat application made using Socket IO, Node.JS
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/rchat">GitHub</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <IconButton name="link" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>Path Visualizer</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              A Path Finder & Visualizer developed using Dijkstra's Algorithm
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/pathvisualizer">
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <a href="https://rpathvisualizer.netlify.app/">
                <IconButton name="link" />
              </a>
            </CardMenu>
          </Card>

          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>Shopping Site</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              Online Shopping Store developed using Hooks, state.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/shopping-site">
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <a href="https://rrrshop.netlify.app/">
                <IconButton name="link" />
              </a>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>Piano Web</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              Virtual Piano
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/pianoweb">GitHub</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <a href="https://rpiano.netlify.app/">
                <IconButton name="link" />
              </a>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>BASICA</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              My own programming language developed using Python.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/basica">GitHub</a>
              </Button>
            </CardActions>
          </Card>

          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>Path Finder</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              A Python Project that finds path out of the given maze using BFS
              and FIFO algorithm (for queue)
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/pathfinder">GitHub</a>
              </Button>
            </CardActions>
          </Card>

          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", borderRadius: "12px" }}
            className="grow"
          >
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: "pink"
              }}
            >
              <strong style={{ fontSize: "40px" }}>R Paint</strong>
            </CardTitle>
            <CardText style={{ fontFamily: "Poppins, sans-serif" }}>
              A Paint Application created using Python & Tkinter.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/RivaanRanawat/rpaint">GitHub</a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1 className="nameResume text-center">None</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>ReactJS</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Python</Tab>
          <Tab>Android Studio</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
