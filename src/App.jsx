import Hero from "./Hero";
import About from "./About";
import Products from "./sections/products/Products";

function App() {
    return (
        <>
            <div className="appContainer min-h-screen bg-five">
                <Hero />

                <About />

                <Products />
            </div>
        </>
    );
}

export default App;
