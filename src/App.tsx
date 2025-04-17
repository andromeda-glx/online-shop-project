import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./pages/MainLayout";
import MainPage from "./pages/MainPage";

const App = () => {
    return (
        <BrowserRouter basename="/online-shop-project/">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
