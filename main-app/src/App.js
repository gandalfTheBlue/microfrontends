import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import eventBus from './utils/eventBus';
import 'antd/dist/antd.css';
import logo from './static/img/react.svg';
import './App.css';

const { Header, Sider, Content } = Layout;
const navigateTo = url => window.history.pushState(null, null, url);

// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pathname : window.location.pathname
//         }
//     }

//     handleMenuClick = () => {
//         this.setState(() => ({pathname : window.location.pathname}));
//     };

//     render() {
//         return (
//             <div className="Menu" onClick={this.handleMenuClick}>
//                 {this.props.children(this.state.pathname)}
//             </div>
//         )
//     }
// }

// const MenuItem = ({link, children, pathname}) => {
//     const classes = ['Menu-Item'];
//     if (pathname === link) {
//         classes.push('Menu-Item--Selected')
//     }
//     return (
//         <div className={classes.join(' ')} onClick={() => navigateTo(link)}>
//             {children}
//         </div>
//     );
// };

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React 15 Portal</h1>
//         </header>
//         <div className="App-content">
//           <Menu>
//             {pathname => (
//               <div>
//                 <MenuItem pathname={pathname} link="/">
//                   All applications
//                 </MenuItem>
//                 <MenuItem pathname={pathname} link="/react">
//                   React 16 application
//                 </MenuItem>
//                 <MenuItem pathname={pathname} link="/angular">
//                   Angular 5 application
//                 </MenuItem>
//               </div>
//             )}
//           </Menu>
//           <div className="App-container">
//             <div id="react-app" />
//             <div id="angular-app" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>Home</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
          <img src={logo} className="reactLogo" alt="logo" />
          <h1 className="App-title">Welcome to React Portal</h1>
        </Header>
        <Content className="content">
          {/* <Bubble eventBus={eventBus} />
          <Pies eventBus={eventBus} /> */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
