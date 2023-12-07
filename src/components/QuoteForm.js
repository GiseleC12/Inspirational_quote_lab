import { useState } from "react";
import "../App.css";

const QuoteForm = ({postNewQuote}) => {
    const [stateQuote, setStateQuote] = useState({
            quote: {
                 body: "",
                 author: ""
        }
        })


    // const handleChange = (event) => {
    //     let propertyName = event.target.value;
    //     console.log(propertyName);
    //     let copiedQuote = {...stateQuote};
    //     copiedQuote[propertyName] = event.target.value;
    //     setStateQuote(copiedQuote);
    // }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const inputBody = event.target["body"].value;
        const inputAuthor = event.target["author"].value;
        const submitQuote = {
            quote: {
                 body: inputBody,
                 author: inputAuthor
        }
        }
        console.log(submitQuote);
        postNewQuote(submitQuote);
        setStateQuote({
           body: "",
           author: "" 
        })
    }

    return ( 
        <div id="whole-form">
        <form id="quote-form" onSubmit={handleFormSubmit}>
            <h3 id="form-header">Add a new quote ✏️</h3>
            <label htmlFor="quote-name" id="quote-name">Quote:</label>
            <input 
                id="body"
                type="text"
                placeholder="enter quote here"
                // onChange={handleChange}
                />
            
            <label htmlFor="author-name" id="author-name">Author's Name:</label>
            <input
                id="author"
                type="text"
                placeholder="enter name here"
                // onChange={handleChange}
            />

            <input type="submit" value="Add Quote" id ="button"/>
            
        </form>
        </div>
            
     );
}
 
export default QuoteForm;