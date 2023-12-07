const Quote = ({quote, deleteQuote}) => {

    const handleDeleteButton = () => {
        deleteQuote(quote._id)
    }
    
    return ( 
        <div id="individual-quote">
        <article >
            <h4>Quote </h4>
            <p>{quote.quoteAuthor}</p>
            <p>{quote.quoteText}</p>
            <button onClick={handleDeleteButton}>Delete</button>
        </article>
        </div>
     );
}
 
export default Quote;