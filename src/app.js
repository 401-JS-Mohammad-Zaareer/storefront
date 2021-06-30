import Header from "./components/header/header";
import Categories from "./components/categories/categories";
import Products from "./components/products/products";
import Footer from './components/footer/footer';
import 'fontsource-roboto'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Categories />
                <Products /> 
            </main>
            <Footer />    
        </>
    );
}