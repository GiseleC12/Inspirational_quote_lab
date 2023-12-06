
const Quote = ({quote}) => {
    
    return ( 
        <article>
            <h4>Quote </h4>
            <p>{quote.data.quoteAuthor}</p>
            <p>{quote.data.quoteText}</p>
            
        </article>
     );
}
 
export default Quote;