import Quote from "./Quote";

const QuoteList = ({quotes}) => {
    const quoteComponents = quotes.map((quote) => {
        return <Quote key={quote.id} quotes={quote}/>
    })

    return ( 
        <>
            <h2>These are lists of random quotes</h2>
            {quoteComponents}
        </>
     );
}
 
export default QuoteList;