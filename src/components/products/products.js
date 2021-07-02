import { connect } from 'react-redux';
import { addToCart } from '../../store/products';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';


const Products = props => {
    return (
        <>
            <Typography variant='h2'>
                {props.activeCategory.displayName}
            </Typography>
            <Typography variant='h5' className='subtitle'>
                {props.activeCategory.description}
            </Typography>
            <div className='products-container'>
                {props.productsList.map((product, idx) => (
                    <div className='product' key={idx}>
                        <img src={product.img} alt={product.name} />
                        <Typography variant='h4' >
                            {product.name}
                        </Typography>
                        {product.count ? (<Button
                            onClick={() => { props.addToCart(product) }}
                            startIcon={<ShoppingCartIcon />}
                            size='small'
                            variant='contained'
                            color='primary'>
                            ADD TO CART
                        </Button>) : (<Button
                            disabled
                            startIcon={<ShoppingCartIcon />}
                            size='small'
                            variant='contained'
                            color='primary'>
                            Out of Stuck
                        </Button>)}

                        <Button
                            startIcon={<VisibilityIcon />}
                            size='small'
                            variant='contained'
                            color='secondary'>
                            VIEW DETAILS
                        </Button>
                    </div>
                ))}
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    productsList: state.productsReducer.products,
    activeCategory: state.categoriesReducer.activeCategory
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);