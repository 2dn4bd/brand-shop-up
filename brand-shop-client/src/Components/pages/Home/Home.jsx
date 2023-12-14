import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import PopulerProduct from "../../PopulerProduct/PopulerProduct";
import Review from "../../Review/Review";
const Home = () => {
    const categoryData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Category categoryData={categoryData}></Category>
            <PopulerProduct></PopulerProduct>
            <Review></Review>
        </div>
    );
};

export default Home; 