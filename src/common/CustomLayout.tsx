import React from "react";
import { AppBar, UserMenu, MenuItemLink, Layout } from "react-admin";
import PublishIcon from "@material-ui/icons/Publish";

const MyUserMenu = (props: React.ReactNode) => (
  <UserMenu {...props}>
    <MenuItemLink to="/upload" primaryText="Upload" leftIcon={<PublishIcon />} sidebarIsOpen={true} />
  </UserMenu>
);

const MyAppBar = (props: React.ReactNode) => <AppBar {...props} userMenu={<MyUserMenu />} />;

const CustomLayout = (props: React.ReactNode) => <Layout {...props} appBar={MyAppBar} />;

export default CustomLayout;
