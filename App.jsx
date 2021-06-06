import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
function App(){
    return(
        <div>
        <Header/>
        <Note className="note"/>
        <Footer/>
        </div>
    );
}
export default App;