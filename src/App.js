import React from 'react';
import './css/App.css';
import { Layout, Button } from 'antd';
import Head from '../src/components/header.jsx'
import Foot from '../src/components/footer'
import SideMenu from '../src/components/sidemenu'
import ContentPage from '../src/components/contentpage'

const { Header, Footer, Content, Sider } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="app_header">
          <Head />
        </Header>
        <br />
        <br />
        <br />
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
            }}
            onCollapse={(collapsed, type) => {
            }}
            className="app_sider"
          >
            <br />
            <br /><SideMenu /> </Sider>
          <Content className="app_content"><br />
            <br />
            <ContentPage />
            {/* Content
          <p></p>
            <Button ghost> Ghost Button </Button>
            <br />
            <Button> Normal Button</Button>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p>
            <p> Random para </p> */}
          </Content>
        </Layout>
        <Footer className="app_footer">
          <Foot />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
