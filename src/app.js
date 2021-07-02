import Header from "./components/header/header";
import Categories from "./components/categories/categories";
import Products from "./components/products/products";
import Footer from './components/footer/footer';
import Cart from './components/cart/cart';

import 'fontsource-roboto'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Cart />
                <Categories />
                <Products /> 
            </main>
            <Footer />    
        </>
    );
}