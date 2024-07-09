import Card from "./collectionscard/Card";
import GeneralCard from "./collectiongeneral/GeneralCard";
import ItemCard from "./itemcard/Itemcard";
import Herocard from "./herocard/Herocard";
import Categorycard from "./categorycard/Categorycard";
import Hero from "./hero/Hero";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import data from "./data"
import './main.css'


export default function Main(){

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })  

    const notify = () => toast.warn("comming soon!")
    
    return (
        <>
        <Hero />
        <div className="container">
            <h1>Latest collections</h1>
            <section className="card-container">
                {cards}
                </section>
            <GeneralCard />
            <ItemCard />
            <button className="seemore-btn" onClick={notify}>see more<span className="arrow-icon"><img src="/icons/arrow.png" alt="" /></span></button>
            <Herocard />
            <Categorycard />
        </div>
        </>
    )
}