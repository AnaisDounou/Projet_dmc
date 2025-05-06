import Banner from './Banner'
import { Footer } from './components/Footer'
import Header from './Header'
import { Bienvenue } from './home/Bienvenue'

function App() {
    return(
      <div>
        <Header/>
        <Banner/>
        <Bienvenue/>
        <Footer/>
      </div>
    )
}

export default App