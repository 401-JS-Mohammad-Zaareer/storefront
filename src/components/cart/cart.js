import {useSelector} from "react-redux";

export default function Cart() {

    const state = useSelector((state) => {
        return {
            addedProducts: state.cartReducer
        }
    });

    return(
        <div className="cart-items-container">
            {state.addedProducts.map((product, idx) => 
                <div className='cart-item' key={idx}>
                    {product.name}({product.count})<span>&#x274C;</span>
                </div>
            )}
        </div>
    );
}