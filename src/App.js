import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import NavBar from './components/NavBar/NavBar';
import { ContextProvider } from './context/State';
import Categories from './components/Categories/Categories';

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/add-product" element={<AddProduct />} />
                        <Route
                            path="/edit-product/:id"
                            element={<EditProduct />}
                        />
                        <Route path="/categories" element={<Categories />} />
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
        </div>
    );
}

export default App;
