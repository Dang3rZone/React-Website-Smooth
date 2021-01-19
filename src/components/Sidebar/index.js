import React from 'react';
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="discover">Discover</SideBarLink>
          <SideBarLink to="services">Services</SideBarLink>
          <SideBarLink to="signup">Sign Up</SideBarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/singin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
