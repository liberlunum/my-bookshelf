import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import Header from "./components/header/Header";
import AddBook from "./components/body/add-book/AddBook";
import Library from "./components/body/library/Library";

function App() {
    return (

            <div className="App">
                <Header/>
              {/*  <NextUIProvider> <AddBook/></NextUIProvider>*/}
                <Library/>
            </div>


    );
}

export default App;
