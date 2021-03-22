import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import {Switch, Route} from 'react-router-dom';
import Description from "./pages/Description/Description";

function App() {

    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/description' component={Description}/>
            </Switch>
        </div>
    );
}

export default App;
