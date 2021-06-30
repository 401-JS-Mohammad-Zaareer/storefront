import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function Header() {
    return(
        <header>
            <Button>
                <Typography variant='h4'>ASAC STORE</Typography>
            </Button>
            <Button className='cart'>CART(0)</Button>
        </header>
    );
}