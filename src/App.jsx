import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Feature from './pages/Feature';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import Nav from './pages/Nav';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path='/feature' element={<Feature />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
