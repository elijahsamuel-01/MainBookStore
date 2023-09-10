import react from 'react';
import Layout from '../Component/static/Layout';
import Hero from './screen/Hero';
import Cards from "../Pages/screen/Cards"

const HomeScreen = () =>{
    return(
        <div>
           <Hero/>
           <Cards/>
        </div>
    )
}

export default HomeScreen;

