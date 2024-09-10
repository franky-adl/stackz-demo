import React from "react";
import styled from "styled-components";
import Logo from "../assets/Brand.png";
import Arrow from "../assets/Arrow.png";
import Menu from "../assets/Menu.png";

const Navbar = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    height: 120px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    .card-item {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 14px 16px;
        gap: 40px;
        background: rgba(255, 255, 255, 0.01);
        border: 1px solid #575757;
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border-radius: 10px;
        .menu-logo {
            height: 32px;
            display: none;
        }
        img.brand-logo {
            height: 30px;
        }
        img.arrow {
            height: 12px;
        }
        .row {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .manrope {
                font-size: 12px;
                line-height: 12px;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        height: auto;
        .menu-item {
            display: none;
        }
        .card-item .menu-logo {
            display: inline-block;
        }
    }
`;

const HeroCopy = styled.div`
    position: relative;
    top: 60px;
    .byline {
        font-size: clamp(16px, 13.3333px + 0.7407vw, 24px);
    }
    .main-heading {
        font-size: clamp(52px, 22.6667px + 8.1481vw, 140px);
        line-height: 100%;
        margin-bottom: 24px;
    }
    .cta {
        padding: 12px 18px;
        width: 300px;
        background: rgba(0, 71, 255, 0.25);
        border: 1px solid #575757;
        backdrop-filter: blur(30px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        img {
            height: 12px;
        }
    }
`;

const Home = () => {
    return (
        <>
            <Navbar>
                <div className="card-item">
                    <div className="row">
                        <div
                            className="flex justify-center items-center gap-2"
                            style={{ fontSize: "24px" }}
                        >
                            <img
                                src={Logo}
                                className="brand-logo"
                                alt="brand logo"
                            />
                            STACKZ
                        </div>
                        <img
                            src={Menu}
                            className="menu-logo"
                            alt="hamburger icon"
                        />
                    </div>
                </div>
                <div className="card-item menu-item">
                    <div className="row">
                        <span>ABOUT</span>
                        <span>01</span>
                    </div>
                    <div className="row">
                        <span className="manrope">Company Introduction</span>
                        <img src={Arrow} className="arrow" />
                    </div>
                </div>
                <div className="card-item menu-item">
                    <div className="row">
                        <span>PROJECTS</span>
                        <span>02</span>
                    </div>
                    <div className="row">
                        <span className="manrope">32 past projects</span>
                        <img src={Arrow} className="arrow" />
                    </div>
                </div>
                <div className="card-item menu-item">
                    <div className="row">
                        <span>NEWS</span>
                        <span>03</span>
                    </div>
                    <div className="row">
                        <span className="manrope">Last updated on 26/08</span>
                        <img src={Arrow} className="arrow" />
                    </div>
                </div>
                <div className="card-item menu-item">
                    <div className="row">
                        <span>CONTACT</span>
                        <span>04</span>
                    </div>
                    <div className="row">
                        <span className="manrope">inquiry@stackz.com</span>
                        <img src={Arrow} className="arrow" />
                    </div>
                </div>
            </Navbar>
            <HeroCopy>
                <p className="byline">DIGITAL REVOLUTION</p>
                <h1 className="main-heading">
                    EXPAND YOUR
                    <br />
                    ONLINE PRESENCE
                </h1>
                <button className="cta">
                    <span className="manrope">Learn about the process</span>
                    <img src={Arrow} />
                </button>
            </HeroCopy>
        </>
    );
};

export default Home;
