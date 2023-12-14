import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../singleProduct/SingleProduct";

const  CategoryDetails = () => {
    const categoryData = useLoaderData()

        return (
<div>
    <div className="flex lg:pl-36 lg:pr-36 pl-10 pr-10 mt-10">
    <div className="carousel rounded-lg ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/vqdgSMD/banner-nike1.jpg" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/TRRfk8K/zara.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/3rQZdKb/hmm.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4d2PXDC/gucci.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:pl-36 lg:pr-36 md:pl-10 md:pr-10 px-10 gap-6 mt-10 mb-10 mx-auto">
            
            {
                categoryData.map( details => <SingleProduct key={details._id} product={details}></SingleProduct>)
            }
        </div>
        </div>
    );
};

export default CategoryDetails;