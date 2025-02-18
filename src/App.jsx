import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TopHeader from './components/Header/TopHeader'
import Main from './components/Main/Main'

function App() {
    return (
        <>
            <TopHeader offer={"Get 50% Off on Selected Items"} phoneNumber={"+91 (720) 090 1896"} />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
