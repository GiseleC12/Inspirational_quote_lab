import QuoteForm from "../components/QuoteForm";
import QuoteNavigation from "../components/QuoteNavigation";
import QuoteList from "../components/QuoteList";
import { useState, useEffect } from "react";

const QuoteContainer = () => {

    const[quotes, setQuotes]= useState([])
    
    
    const fetchQuotes = async ()=> {
        const response = await fetch ("https://quote-garden.onrender.com/api/v3/quotes")
        const data = await response.json();
        setQuotes(data);
    }

    useEffect (()=>{
        fetchQuotes();
    }, [])
    
    
    return (  
        <>
            <QuoteNavigation />
            <QuoteForm />
            <QuoteList quotes={quotes}/> 
        </>
    
    );
}
 
export default QuoteContainer;