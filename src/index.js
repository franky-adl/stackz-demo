import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import siteTheme from "./theme";
import GlobalStyle from "./globalCss";
import { CookiesProvider } from "react-cookie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { AppLayout } from "./pages/root";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: (
            <AppLayout>
                <Error />
            </AppLayout>
        ),
        children: [
            {
                errorElement: <Error />,
                children: [
                    { index: true, element: <Home /> },
                    {
                        path: "contact-us",
                        element: <Contact />,
                    },
                ],
            },
        ],
    },
]);

const Container = () => {
    // sample usage for Html and Loader: https://drei.pmnd.rs/?path=/docs/misc-useprogress--docs
    // Suspense detects any suspense-enabled children, e.g. https://docs.pmnd.rs/react-three-fiber/api/hooks#useloader
    return (
        <StrictMode>
            <ThemeProvider theme={siteTheme}>
                <CookiesProvider defaultSetOptions={{ path: "/" }}>
                    <GlobalStyle />
                    <RouterProvider router={router} />
                </CookiesProvider>
            </ThemeProvider>
        </StrictMode>
    );
};

root.render(<Container />);
