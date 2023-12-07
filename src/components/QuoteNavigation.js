import { Link, Outlet } from "react-router-dom";
import "../App.css";

const QuoteNavigation = () => {

   
    return ( 
        <>
        <h1 id="navigation-h1">Get inspired</h1>
        <h2 id="navigation-h2">Find and post inspirational quotes !</h2>
            <nav>
                <div id="navigation">
                    <Link to="/allQuotes">Get All Quotes here</Link>
                    <Link to="/addQuotes">Post a New Quote Here</Link>
                </div>
            </nav>
            <Outlet />
        </>
     );
}
 
export default QuoteNavigation;
