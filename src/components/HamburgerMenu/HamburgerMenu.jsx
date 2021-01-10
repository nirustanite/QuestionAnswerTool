import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Icon, Menu } from "semantic-ui-react";
import { useRouteMatch } from "react-router-dom";
import routes from 'Pages/routes';

const HamburgerMenu = (props) => {

    const [visible, setVisible] = useState(false);

    const matchHome = useRouteMatch({
        path: "/",
        exact: true
    });
  
    const handlePusher = () => {
        if (visible) setVisible(false);
    };
  
    const handleToggle = () => setVisible(!visible);

    return (
        <React.Fragment>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        visible={visible}
                        vertical
                        width='thin'
                    >
                        <Menu.Item as="span">
                               Q/A Tool
                        </Menu.Item>
                       <Menu.Item
                         name="HOME"
                         // icon="building outline"
                         active={!!matchHome}
                         as={Link}
                         to={routes.HOME}
                       >
                         Home
                       </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher
                        dimmed={visible}
                        onClick={handlePusher}
                        style={{ minHeight: "100vh" }}
                    >
                        <Menu fixed="top" borderless>
                            <Menu.Item onClick={handleToggle}>
                                <Icon name="sidebar" />
                            </Menu.Item>
                            <Menu.Item as="span">
                               Q/A Tool
                            </Menu.Item>
                        </Menu>
                       {props.child}
                    </Sidebar.Pusher>
                </Sidebar.Pushable> 
        </React.Fragment>
    );
};

export default HamburgerMenu;
