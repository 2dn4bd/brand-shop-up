import { TbTruckDelivery } from 'react-icons/tb';
import {  FaRegHandshake } from 'react-icons/fa';
import {  Ri24HoursFill } from 'react-icons/ri';
const Choose = () => {
    return (
        <div className='py-16 my-10 bg-gray-100'>
            <div className="text-center ">
            <h2 className="text-3xl font-bold lg:text-4xl">
                Why Choose Re<span  className="text-[#56B280] text-4xl lg:text-5xl">V</span>amp
            </h2>
            </div>
            <div className='flex justify-center md:gap-10 lg:gap-28'>
                <div className='flex flex-col items-center'>
                <TbTruckDelivery className='text-[#56B280] text-6xl text-center'></TbTruckDelivery>
                <h2 className='font-semibold text-lg lg:text-2xl'>
                    Free Delivery
                </h2>
                <p className='text-center'>
                Free delivery makes your shopping experience <br /> convenient, cost-effective, and stress-free.
                </p>
                </div>

                <div className='flex flex-col items-center'>
                    <FaRegHandshake className='text-[#56B280] text-6xl text-center'></FaRegHandshake>
                    <h2 className='font-semibold text-lg lg:text-2xl'>
                    Trusted Platfrom
                    </h2>
                    <p className='text-center'>
                    Our trusted platform connects users worldwide, fostering <br /> secure and reliable transactions
                    </p>
                </div>

                <div className='flex flex-col items-center'>
                    <Ri24HoursFill className='text-[#56B280] text-6xl text-center'></Ri24HoursFill>
                    <h2 className='font-semibold text-lg lg:text-2xl'>
                    Here For You
                    </h2>
                    <p className='text-center'>
                    Certainly! If you have any other requests or questions, <br /> feel free to ask, and I'll be here to assist you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Choose;