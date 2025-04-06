import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Pages/MainLayout'
import MainPage from './Pages/MainPage'

function App() {
    return (
        <BrowserRouter basename='/online-shop-project/'>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
