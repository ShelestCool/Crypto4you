import React from "react";
import { useEffect, useState } from "react";
import { BsFillCapslockFill } from "react-icons/bs";

import "./scrolltop.css";

function ScrollTop() {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect (() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        })
    })

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
  return (
    <div id="scrollTop">
        {scrollTop && (
            <BsFillCapslockFill onClick={backToTop}/>
        )}
    </div>
  );
};
export default ScrollTop;
