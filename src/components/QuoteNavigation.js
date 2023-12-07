import { Link, Outlet } from "react-router-dom";

const QuoteNavigation = () => {
    return ( 
        <>
            <nav>
                <ul>
                    <li><Link to="/api/quotes">Link to All Quotes</Link></li>
                    <li><Link to="/api/quotes">Post a New Quote Here</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
     );
}
 
export default QuoteNavigation;
