import React from "react";
function Footer(){
    var currYear=new Date().getFullYear();
    return(
        <Footer>
        <p>copyright @ {currYear}</p>
        </Footer>
    );
}
export default Footer;