import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Grid, Cell} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import logo from './components/img/logo8.jpg';




class App extends Component {
  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
    <div>
      <Grid className="main-grid">
        <Cell col={4}>
          <Link to="/"><img src={logo} className="logo-img" alt="logo" /></Link>
        </Cell>
        <Cell col={4}><div className="main-title"><h3>Natural Beauty Salon</h3></div></Cell>
      </Grid>
        <Layout>
            <Header className="header-color" scroll>
                <Navigation>
                    <Link to="/"><h6>Home</h6></Link>
                    <Link to="/about"><h6>About</h6></Link>
                    <Link to="/services"><h6>Services</h6></Link>
                    <Link to="/book"><h6>Book</h6></Link>
                </Navigation>
            </Header>
            <Drawer title="Natural Beauty Salon">
              <Navigation>
                    <Link to="/"><h6>Home</h6></Link>
                    <Link to="/about"><h6>About</h6></Link>
                    <Link to="/services"><h6>Services</h6></Link>
                    <Link to="/book"><h6>Book</h6></Link>
              </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main></Main>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;