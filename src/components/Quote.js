import { Link } from "react-router-dom";

const Quote = ({quote, deleteQuote}) => {

    const handleDeleteButton = () => {
        deleteQuote(quote._id)
    }
    
    return ( 
        <div id="individual-quote">
        <article >
            <p>{quote.quoteAuthor}</p>
            <p>{quote.quoteText}</p>
            <button onClick={handleDeleteButton} id="delete-button">Delete</button>
        </article>
        </div>
    );
}
 
export default Quote;