import { useState } from "react";

const QuoteForm = ({postNewQuote}) => {
    const [stateQuote, setStateQuote] = useState(
        {
            name: "",
            authorName: ""
        }
    )


    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedQuote = {...stateQuote};
        copiedQuote[propertyName] = event.target.value;
        setStateQuote(copiedQuote);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postNewQuote(stateQuote);
        setStateQuote({
           name: "",
           authorName: "" 
        })
    }



    return ( 
        <form id="quote-form" onSubmit={handleFormSubmit}>
            <h3>Add a new quote</h3>
            <label htmlFor="quote-name">Quotes:</label>
            <input 
                id="quote-name"
                name="name"
                type="text"
                placeholder="enter your quote here"
                onChange={handleChange}
                />
            
            <label htmlFor="author-name">Author Name:</label>
            <input
                id="author-name"
                name="authorName"
                type="text"
                placeholder="enter the author:"
                onChange={handleChange}
            />

            <input type="submit" value="Add Quote"/>
            
        </form>
            
     );
}
 
export default QuoteForm;