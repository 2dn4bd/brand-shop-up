const PopulerProduct = () => {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold lg:text-4xl text-center">
                Populer Products From <br />
                All Brands
                </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 container mx-auto gap-7">
            <div className="" >
            <div
            className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
            <img src="https://i.ibb.co/b7zqWx7/nike1.png" className="w-full rounded-2xl" />
            <div className="p-6">
                <h3 className="text-3xl text-[#333] font-extrabold">Nike Air Force</h3>
                <p className="mt-2 font-bold">Nike</p>
                <div className="mt-8 flex items-center">
                <h3 className="text-xl text-[#333] font-bold flex-1">$150.90</h3>
                </div>
            </div>
            </div>
            </div>
                <div>
                <div
            className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
            <img src="https://i.ibb.co/B3bdSXM/three.jpg" className="w-full rounded-2xl" />
            <div className="p-6">
                <h3 className="text-3xl text-[#333] font-extrabold">jeans jacket</h3>
                <p className="mt-2 font-bold">levi's</p>
                <div className="mt-8 flex items-center">
                <h3 className="text-xl text-[#333] font-bold flex-1">$650.90</h3>
                </div>
            </div>
            </div>
                </div>
                <div>
                <div
            className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
            <img src="https://i.ibb.co/xXL9Pw2/gucci3.jpg" className="w-full rounded-2xl" />
            <div className="p-6">
                <h3 className="text-3xl text-[#333] font-extrabold"> short jersey pant</h3>
                <p className="mt-2 font-bold">Gucci</p>
                <div className="mt-8 flex items-center">
                <h3 className="text-xl text-[#333] font-bold flex-1">$100.90</h3>
                </div>
            </div>
            </div>
                </div>
                <div>
            <div
            className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
            <img src="https://i.ibb.co/D1gwsHT/HJ-191.jpg" className="w-full rounded-2xl" />
            <div className="p-6">
                <h3 className="text-3xl text-[#333] font-extrabold"> Relaxed Fit Hoodie</h3>
                <p className="mt-2 font-bold">Adidas</p>
                <div className="mt-8 flex items-center">
                <h3 className="text-xl text-[#333] font-bold flex-1">$250.90</h3>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default PopulerProduct;