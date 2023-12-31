
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useEffect, useState } from "react";


const BrandPage = () => {
    const category = useParams()
    const allProducts = useLoaderData()
   const [filterData, setFilterData] = useState([])
    

    useEffect(()=>{
        const brandProducts = allProducts.filter(item => item.brand == category.brand)
        setFilterData(brandProducts)
    },[allProducts, category.brand])
    
    console.log(filterData );
    console.log(category);

    return (
        <div className="bg-gradient-to-b from-purple-400">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
            <div className="carousel w-full h-[70vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/sale1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/sale2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/sale3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                
            </div>
            <div>
                <h1 className="text-center text-3xl font-bold my-10">Available Products</h1>
            </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5 my-10">
                { filterData.length <= 0 ? 
                <div className="flex justify-center items-center mx-auto col-span-full ">
                    <img className="" src="/noData.png" alt="" />
                </div>

                :
                filterData.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BrandPage;