import { Link } from "react-router-dom";
import Star from "../Star/Star";

const SingleProduct = ({product}) => {
    const {brand_name, image, name, price, rating, short_description, type, _id} = product
    return (
        <div>
            
<div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img  className="aspect-video w-full h-full rounded-t-lg" src={image} alt="product image" />
    <div className="px-5 pb-5">
            <h5 className="text-2xl font-semibold tracking-tight text-white">{name}</h5>
            <p className="text-white ">
                {short_description}
            </p>
            <p className="text-white">
                type: {type}
            </p>
            <p className="text-white font-semibold mt-2 text-xl">{brand_name}</p>
        <div className="flex items-center mt-2.5 mb-5">
            <Star  rating={rating}/>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            <Link to={`/product/${_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Link>
            <Link to={`/update/${_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update
            </Link>
        </div>
    </div>
</div>

        </div>
    );
};

export default SingleProduct;