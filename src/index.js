import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/';
import App from './app';
import './index.scss';

function Main() {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));