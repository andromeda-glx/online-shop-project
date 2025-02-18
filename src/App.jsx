import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/Pages/MainLayout'
import Main from './components/Main/Main'

function App() {
    return (
        <BrowserRouter basename='/online-shop-project/'>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
