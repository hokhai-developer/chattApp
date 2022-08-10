import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MainLayOut from './layOuts/MainLayOut';
import MessagePage from './pages/MessagePage';
import AppProvider from './Context/AppProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Routes>
                        <Route path="/" exact element={<MainLayOut />}>
                            <Route index element={<HomePage />} /> */
                            <Route path="/message" element={<MessagePage />} />
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
