import QuoteForm from "../components/QuoteForm";
import QuoteNavigation from "../components/QuoteNavigation";
import QuoteList from "../components/QuoteList";



const QuoteContainer = () => {
    return (  
        <>
            <QuoteNavigation />
            <QuoteForm />
            <QuoteList /> 

        </>
        
    );
}
 
export default QuoteContainer;