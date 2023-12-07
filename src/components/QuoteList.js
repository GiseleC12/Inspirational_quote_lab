import Quote from "./Quote";

const QuoteList = ({quotes, deleteQuote}) => {
    const quoteComponents = quotes.map((quote) => {
        return <Quote key={quote._id} quote={quote} deleteQuote={deleteQuote}/>
    })
   
    return ( 
        <>
            <h2 id="list-header">List of Random Quotes</h2>
            {quoteComponents}
        </>
     );
}
 
export default QuoteList;