import {select} from '../../store/categories'
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Categories = props => {
    return(
        <>
            <div className='nav'>
                <Typography variant='h5'>
                    Browse our Categories
                </Typography>
                {props.categoriesList.map((category, idx) => 
                    <Button
                        key={idx}
                        onClick={()=>{props.select(category.displayName)}}
                    >{category.displayName}</Button>
                )}
            </div>
        </>
    );
}


// add the state and actions to componenets props
const mapStateToProps = state => ({categoriesList: state.categoriesReducer.categories,
    activeCategory: state.categoriesReducer.activeCategory
});

const mapDispatchToProps = {select};

// connect
export default connect(mapStateToProps, mapDispatchToProps)(Categories);