import Quote from "./Quote";

const QuoteList = ({quotes}) => {
    const quoteComponents = quotes.map((quote) => {
        return <Quote key={quote._id} quote={quote}/>
    })
   
    return ( 
        <>
            <h2 id="list-header">These are lists of random quotes</h2>
            {quoteComponents}
        </>
     );
}
 
export default QuoteList;