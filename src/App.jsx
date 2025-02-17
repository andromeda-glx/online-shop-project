import Header from './components/Header/Header'
import TopHeader from './components/Header/TopHeader'
import Main from './components/Main'

function App() {
    return (
        <>
            <TopHeader offer={"Get 50% Off on Selected Items"} phoneNumber={"+91 (720) 090 1896"} />
            <Header />
            <Main />
        </>
    )
}

export default App
