const Banner = () => {
    return (
        <div className=" mt-12 lg:pl-36 lg:pr-36 pl-10 pr-10 flex items-center h-[60vh] justify-around">
            <div>
            <h2 className="text-3xl font-semibold lg:text-6xl">
            Best Place to Buy <br />
            <span className="text-[#56B280]">
            Everything.
            </span>
            </h2>
            <p className="text-[#535A56] mt-5 lg:text-lg">
            At ReVamp, you can shop for all your favorite beauty brands, clothes, <br />
            household products and more at a single place.
            </p>
            </div>

            <div>
                <img className="" src="https://i.ibb.co/0nct6kq/banner1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;