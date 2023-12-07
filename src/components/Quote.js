
const Quote = ({quote}) => {
    
    return ( 
        <div id="individual-quote">
        <article >
            <h4>Quote </h4>
            <p>{quote.quoteAuthor}</p>
            <p>{quote.quoteText}</p>
        </article>
        </div>
     );
}
 
export default Quote;