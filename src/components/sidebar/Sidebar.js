import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../../styles/Sidebar.css'
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page2";
import Page4 from "../pages/Page2";
import Home from "../pages/Home";
import Contact from "../pages/Contact";


const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>Home</div>,
        main: () => <Home/>

    },

    {
        path: "/page1",
        sidebar: () => <div>Page1</div>,
        main: () => <Page1/>
    },

    {
        path: "/page2",
        sidebar: () => <div>Page2</div>,
        main: () => <Page2/>
    },
    {
        path: "/page3",
        sidebar: () => <div>Page3</div>,
        main: () => <Page3/>
    },
    {
        path: "/page4",
        sidebar: () => <div>Page4</div>,
        main: () => <Page4/>
    },
    {
        path: "/contact",
        sidebar: () => <div>Contact</div>,
        main: () => <Contact/>
    }
];

export default function SidebarLeft() {
    return (
        <Router>
            <div className="sidebarOuter">
                <div className="sidebarInner">
                    <ul className="sidebarLinks">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/page1">PAGE1</Link>
                        </li>
                        <li>
                            <Link to="/page2">PAGE2</Link>
                        </li>
                        <li>
                            <Link to="/page3">PAGE3</Link>
                        </li>
                        <li>
                            <Link to="/page4">PAGE4</Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div className="sidebarPages">
                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>


    );

}


