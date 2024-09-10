import React, { useState } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

const SplineWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`;

const LoadingWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OverlayWrapper = styled.div`
    position: absolute;
    padding: 20px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    pointer-events: none;
`;

// extract AppLayout from root for wrapping the error page in the routes config
// https://stackoverflow.com/questions/76385016/react-router-how-can-i-reuse-my-layout-for-the-errorelement-in-the-root-route
export const AppLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <SplineWrapper>
                {loading && (
                    <LoadingWrapper>
                        <div className="scene-loader"></div>
                    </LoadingWrapper>
                )}
                <Spline
                    onSplineStart={() => setLoading(false)}
                    scene="https://prod.spline.design/FXhQ3RrUyzK8vVF5/scene.splinecode"
                />
            </SplineWrapper>
            <OverlayWrapper>{children ?? <Outlet />}</OverlayWrapper>
        </>
    );
};

const Root = () => {
    return <AppLayout />;
};

export default Root;
