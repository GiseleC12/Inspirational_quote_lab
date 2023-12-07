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

     const deleteQuote = async (quoteId) => {
        await fetch(`https://favqs.com/api/quotes/${quoteId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        setQuotes(quotes.filter((quote) => quote.id !== quoteId))
     }


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
                                deleteQuote={deleteQuote}
                                />
                },
            ]
        }
    ])
    

    return (  
        <>
            <RouterProvider router={quoteRoutes} />
            <div>
            <img id ="image"src ="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1080/MTkzMDEwNDIzOTkyMTY1NTk3/inspirational-quote.webp" alt="Inspirational quote " />
            </div>
        </>
    
    );
};
 
export default QuoteContainer;
    