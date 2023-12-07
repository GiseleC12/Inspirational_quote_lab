
const Quote = ({quote}) => {
    
    return ( 
        <article>
            <h4>Quote </h4>
            <p>{quote.quoteAuthor}</p>
            <p>{quote.quoteText}</p>
            <button>Delete quote </button>
        </article>
     );
}
 
export default Quote;