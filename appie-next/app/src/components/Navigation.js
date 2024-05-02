import React from 'react';
import Link from "next/link";

function Navigation({ lang = false }) {
    return (
        <>
            {lang ? (
                <span></span>
            ) : (
                <ul>
                    <li>
                        <a href="#">
                            Home <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/">Home 1</Link>
                            </li>
                            <li>
                                <Link href="/home-two">Home 2</Link>
                            </li>
                            <li>
                                <Link href="/home-three">Home 3</Link>
                            </li>
                            <li>
                                <Link href="/home-four">Home 4</Link>
                            </li>
                            <li>
                                <Link href="/home-five">Home 5</Link>
                            </li>
                            <li>
                                <Link href="/home-six">Home 6</Link>
                            </li>
                            <li>
                                <Link href="/home-seven">Home 7</Link>
                            </li>
                            <li>
                                <Link href="/home-eight">Home 8</Link>
                            </li>
                            <li>
                                <Link href="/home-dark">Home Dark</Link>
                            </li>
                            <li>
                                <Link href="/home-rtl">Home Rtl</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <a href="#">
                            Pages <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/about-us">About</Link>
                            </li>
                            <li>
                                <Link href="/about-us-another">About 2</Link>
                            </li>
                            <li>
                                <Link href="/404">Error</Link>
                            </li>
                            <li>
                                <Link href="/shops">Shops</Link>
                            </li>
                            <li>
                                <Link href="/shops/shop-details">Shop details</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            News <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/news">News Page</Link>
                            </li>
                            <li>
                                <Link href="/news/single-news">Single News</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact">Kontakt</Link>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
