import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';


export default function Header() {
    const state = useSelector((state) => {
        return {
            addedProducts: state.cartReducer
        }
    })
    return(
        <header>
            <Button>
                <Typography variant='h4'>ASAC STORE</Typography>
            </Button>
            <Button className='cart'>CART({state.addedProducts.length})</Button>
        </header>
    );
}