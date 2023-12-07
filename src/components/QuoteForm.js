const QuoteForm = ({}) => {


    
    
    
    return ( 
        <form id="quote-form">
            <h3>Add a new quote</h3>
            <label htmlFor="quote-name">Quotes:</label>
            <input 
                id="quote-name"
                name="name"
                type="text"
                placeholder="enter your quote here"
                />
            
            <label htmlFor="author-name">Author Name:</label>
            <input
                id="author-name"
                name="name"
                type="text"
                placeholder="enter the author:"
            />

            <input type="submit" value="Add Quote"/>
            
        </form>
            
     );
}
 
export default QuoteForm;