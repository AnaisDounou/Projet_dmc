import Banner from '../components/Banner'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { Bienvenue } from '../components/Bienvenue'

function Home() {
    return(
      <div>
        {/* <Header/> */}
        <Banner/>
        <Bienvenue/>
        <Footer/>
      </div>
    )
}

export default Home