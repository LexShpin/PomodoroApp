import s from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Timer from './components/Timer/Timer'

const App = () => (
    <div className={s.App}>
      <Header />
      <Timer />
      <Footer />
    </div>
)

export default App
