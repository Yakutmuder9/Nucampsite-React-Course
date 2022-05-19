import './App.css';
import CampsitesList from './features/campsites/CampsitesList.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
             <Header />
            <CampsitesList campsite={CampsitesList[0]}/>
            <Footer />
        </div>
    );
}

export default App;
