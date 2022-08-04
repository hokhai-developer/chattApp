import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MainLayOut from './LayOuts/MainLayOut';
import MessagePage from './pages/MessagePage';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" exact element={<MainLayOut />}>
                        <Route index element={<HomePage />} />
                        <Route path="/message" element={<MessagePage />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
