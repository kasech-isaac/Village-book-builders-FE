import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import ProgramHome from './ProgramHome';
import StudentSearch from '../Student/StudentSearch';
import StudentProfileForm from '../Student/StudentProfileForm';
import StudentForm from '../Student/StudentForm';
import ProgramProfile from './ProgramProfile';
import ProgramProfileForm from './ProgramProfileForm';
import { fetchProgramProfile } from '../../../state/actions';
import Logout from '../../Logout.js';
import { Layout, Menu, PageHeader, Button, Avatar } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  FormOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const ProgramDashboard = props => {
  const { profile } = props;

  useEffect(() => {
    props.fetchProgramProfile(1); // change this later with login
  }, [props]);
  // console.log(profile);

  const { Content, Sider } = Layout;

  return (
    <div>
      <Layout>
        <Sider
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu mode="inline" defaultSelectedKeys={['4']}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem 1rem',
              }}
            >
              <Avatar style={{ color: '#FF914D' }} icon={<UserOutlined />} />
              <div style={{ fontSize: '.75rem', padding: '1rem' }}>
                {profile.name}
              </div>
            </div>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <NavLink to="/dashboard">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <NavLink to="/profile">Profile</NavLink>
            </Menu.Item>
            <Menu.Item key="6" icon={<FormOutlined />}>
              <NavLink to="/student-search">Student Registration</NavLink>
            </Menu.Item>
            <Menu.Item key="7" icon={<LogoutOutlined />}>
              <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
          <div>
            <img
              style={{ padding: '2rem 1rem' }}
              src="/images/vbb-full-logo.png"
              alt="VBB logo"
              width="150"
            ></img>
          </div>
        </Sider>
        <Layout>
          <PageHeader
            title={`Hello, ${profile.name}`}
            extra={[
              <Button key="2" type="primary">
                <a href="/logout">Logout</a>
              </Button>,
            ]}
          ></PageHeader>
          <Content style={{ padding: '2rem', backgroundColor: 'white' }}>
            <Switch>
              <Route path="/dashboard" component={ProgramHome} />
              <Route exact path="/profile" component={ProgramProfile} />
              <Route path="/profile/edit/:id" component={ProgramProfileForm} />
              <Route
                path="/student/profile/edit/:id"
                component={StudentProfileForm}
              />
              <Route path="/student-search" component={StudentSearch} />
              <Route path="/studentregistration" component={StudentForm} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
    profile: state.programReducer.programProfile,
  };
};

export default connect(mapStateToProps, { fetchProgramProfile })(
  ProgramDashboard
);
