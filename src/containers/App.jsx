import React from 'react'

//Importing components
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

//Importing SASS
import '../assets/styles/App.scss';

const App = () => (
    <div className="App">
        <Header />
        <Search />

        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Footer />
    </div>
)

export default App