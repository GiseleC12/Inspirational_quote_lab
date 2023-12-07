import QuoteForm from "../components/QuoteForm";
import QuoteNavigation from "../components/QuoteNavigation";
import QuoteList from "../components/QuoteList";
import { useState, useEffect } from "react";

const QuoteContainer = () => {

    const[quotes, setQuotes]= useState([])
  

    async function fetchQuotes() {
        const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes", {
          headers: {
            Authorization: 'Token token="bf5f5dfa2eeccf8f78f47ac940a9c406"',
          },
        });

    const postNewQuote = async (newQuote) => {
        const response = await fetch("https://favqs.com/api/quotes", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newQuote)
        }) 
        const savedQuote = await response.json();
        setQuotes([...quotes, savedQuote])  
     }
   

      
        const data = await response.json();
        setQuotes(data.data);
      }

    


    useEffect (()=>{
        fetchQuotes();
    }, [])
    
    
    return (  
        <>
            <QuoteNavigation />
            <QuoteForm postNewQuote={postNewQuote}/>
            <QuoteList quotes={quotes}/> 
        </>
    
    );
}
 
export default QuoteContainer;