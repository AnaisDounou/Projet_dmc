import Banner2 from '../components/Banner2'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { Produit } from '../components/Produit'
import { Services } from '../components/Services'

function Solutions() {
    return(
      <div>
        {/* <Header/> */}
        <Banner2 img={'/img/banner/Image1_yellow.png'} text={'Des solutions complètes pour optimiser vos performances industrielles'}/>
        <Produit/>
        <Services/>
        <Footer/>
      </div>
    )
}

export default Solutions