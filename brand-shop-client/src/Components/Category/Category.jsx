import CategoryDisplay from "../CategoryDisplay/CategoryDisplay";
import Choose from "../Choose/Choose";

const Category = ({categoryData}) => {
    
    return (
        <div>
        <div className="text-center mt-10">
            <h2 className="font-semibold text-xl mb-2 lg:text-4xl">
                Our Collaborate Brands
            </h2>
            <p className="text-[#535A56] lg:text-lg">
            We Collaborate With 250++ Leading Top <br />
            E-Commerce and Brands
            </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:pl-36 lg:pr-36 pl-10 pr-10 gap-6 mt-10 mb-10py-6">
            {
                categoryData?.map(data => <CategoryDisplay key={data._id} categoryData={data}></CategoryDisplay>)
            }
        </div>
        <Choose></Choose>
        </div>
    );
};

export default Category;