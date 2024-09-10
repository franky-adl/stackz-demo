import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/MenuIcon";
import CrossIcon from "../assets/CrossIcon";

const Container = styled.header`
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    height: ${(props) => props.theme.headerHeight};
    padding: 0px ${(props) => props.theme.sitePad};
    border-bottom: 1px solid ${(props) => props.theme.dark};
    background-color: ${(props) => props.theme.snowWhite};
    @media screen and (max-width: 768px) {
        height: ${(props) => props.theme.mHeaderHeight};
    }
`;

const InnerContainer = styled.div`
    max-width: ${(props) => props.theme.siteWidth};
    margin: 0px auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const MenuDiv = styled.div`
    display: none;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const CrossDiv = styled.div`
    cursor: pointer;
`;

const Menu = styled.div`
    display: none;
    gap: 40px;
    @media screen and (min-width: 769px) {
        display: flex;
    }
`;

const MenuFullScreen = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    padding: 0px ${(props) => props.theme.sitePad};
    background-color: ${(props) => props.theme.snowWhite};
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    /* pointer-events: none; */
`;

const MobileMenuTopBar = styled.div`
    width: 100%;
    height: ${(props) => props.theme.mHeaderHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    & > span {
        font-size: 1.5rem;
    }
`;

const MobileMenuItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & > span {
        font-size: 4rem;
        /* font-style: italic; */
    }
`;

const BrandDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    & > svg {
        scale: 75%;
    }
`;

const Header = () => {
    const menuFS = useRef();

    const handleMenuToggle = () => {
        const opacity = menuFS.current.style.opacity;
        if (opacity == 0) {
            menuFS.current.style.left = 0;
            menuFS.current.style.opacity = 1;
        } else {
            menuFS.current.style.opacity = 0;
            setTimeout(() => {
                menuFS.current.style.left = "-100vw";
            }, 350);
        }
    };

    return (
        <>
            <MenuFullScreen ref={menuFS}>
                <MobileMenuTopBar>
                    <CrossDiv onClick={handleMenuToggle}>
                        <CrossIcon />
                    </CrossDiv>
                    <span className="serif">BRAND.</span>
                </MobileMenuTopBar>
                <MobileMenuItems>
                    <span className="serif">About</span>
                    <span className="serif">News</span>
                    <span className="serif">Media</span>
                </MobileMenuItems>
            </MenuFullScreen>
            <Container>
                <InnerContainer>
                    <MenuDiv onClick={handleMenuToggle}>
                        <MenuIcon />
                    </MenuDiv>
                    <Menu>
                        <span>About</span>
                        <span>News</span>
                        <span>Media</span>
                    </Menu>
                    <BrandDiv>
                        <Link to={"/"}>BRAND</Link>
                    </BrandDiv>
                    <Menu>
                        <Link to={"contact-us"}>Contact Us</Link>
                        <span>CTA</span>
                    </Menu>
                </InnerContainer>
            </Container>
        </>
    );
};

export default Header;
