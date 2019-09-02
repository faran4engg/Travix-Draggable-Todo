import React from "react";
import { Container, Grid, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import TxHeading from "../../components/ui/Heading/TxHeading";
import TxButton from "../../components/ui/Button/TxButton";

import glasses from "../../assets/img/glasses.png";
import eyes from "../../assets/img/eyes.gif";

const GlassAnimation = keyframes`

20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }

`;

const Figure = styled.figure`
  margin: 0;
  padding: 0 10%;
  position: relative;
  text-align: center;
  z-index: 5;
  animation: ${GlassAnimation} 4.8s infinite;
`;

const Image = styled.img`
  display: inline-block;
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  width: 85%;
`;
const Div = styled.div`
  height: 100%;
  padding-top: 4%;
  left: 0;
  margin-left: 7%;
  margin-right: 7%;
  padding: 0 7%;
  position: absolute;
  top: 0.5em;
  z-index: -1;
`;

const TxHome = () => {
  return (
    <React.Fragment>
      <TxHeading content="Manage Todos" path="/todo-manager" />
      <Container>
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
              <Figure>
                <Image src={glasses} alt="" />
                <Div>
                  <Image alt="" src={eyes} />
                </Div>
              </Figure>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={6}>
              <Header as="h2" icon>
                <Icon name="tag" />
                Drag and Drop Todos
                <Header.Subheader>
                  Plan smarter, collaborate better and securely manage your
                  daily schedules and preferences
                </Header.Subheader>
              </Header>
              <Link to="/todo-manager">
                <TxButton
                  color="black"
                  animated="fade"
                  floated="left"
                  size="huge"
                  content="Todo App"
                  iconName="arrow right"
                  fluid
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default TxHome;
