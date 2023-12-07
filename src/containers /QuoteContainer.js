import QuoteForm from "../components/QuoteForm";
import QuoteNavigation from "../components/QuoteNavigation";
import QuoteList from "../components/QuoteList";
import "../App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const QuoteContainer = () => {
    const[quotes, setQuotes]= useState([]);
  

    async function fetchQuotes() {
        const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes", {
          headers: {
            Authorization: 'Token token="bf5f5dfa2eeccf8f78f47ac940a9c406"',
          },
        });
        const data = await response.json();
        setQuotes(data.data);
      }

     const postNewQuote = async (newQuote) => {
        const response = await fetch("https://favqs.com/api/quotes", {
            method: "POST",
            headers: {
                Authorization: 'Token token="bf5f5dfa2eeccf8f78f47ac940a9c406"',
                "Content-Type": "application/json",
              },
            body: JSON.stringify(newQuote)
        }); 
        const savedQuote = await response.json();

        setQuotes([...quotes, savedQuote]);  
     };


    useEffect (()=>{
        fetchQuotes();
    }, [])


    const quoteRoutes = createBrowserRouter ([

        {
            path: "/",
            element: <QuoteNavigation />,
            children: [
                {
                    path: "/addQuotes",
                    element: <QuoteForm 
                            postNewQuote={postNewQuote}
                            />,
                },
                {
                    path: "/allQuotes",
                    element: <QuoteList 
                                quotes={quotes}
                                />
                },
            ]
        }
    ])
    

    return (  
        <>
            <RouterProvider router={quoteRoutes} />
            <div>
            <img id ="image"src ="https://media.wired.co.uk/photos/606d9c5c6ab54fce4fbb1d4f/master/w_1600,c_limit/wired-wellness-9.jpg" alt="Inspirational quote " />
            </div>
        </>
    
    );
};
 
export default QuoteContainer;
    