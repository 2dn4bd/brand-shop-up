import { Link } from "react-router-dom";
const CategoryDisplay = ({categoryData,}) => {
    const {image, name} = categoryData
    return (
        <div className="bg-[white]" >
          <Link to={`/items/${name}`} >
            <div className="relative flex flex-col rounded-xl bg-{} bg-clip-border text-gray-700 shadow-2xl ">
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img className="aspect-video w-80 "
      src={image}
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h4>
  </div>
</div>
</Link>

        </div>

    );
};

export default CategoryDisplay;