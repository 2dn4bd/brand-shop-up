import { useContext, useEffect, useState } from "react";
import { LuDelete } from 'react-icons/lu';
import Swal from 'sweetalert2'
import { AuthContext } from "../../../Provider/AuthProvider";

const Mycart = () => {
    const {user} = useContext(AuthContext)
    const [carts,setCarts] = useState([])

    useEffect(() => {
        fetch(`https://brand-shop-server-lyart.vercel.app/addtocartdata/${user.email}`)
        .then(res => res.json())
        .then(result => {
            setCarts(result)
        })
    },[setCarts,user.email])

const handleDelete = id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {

        if (result.isConfirmed) {
            fetch(`https://brand-shop-server-lyart.vercel.app/item/${id}`, {
            method:'DELETE'
            })
            .then(res => res.json())
            .then(datar =>{
                if(datar.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                      )
                }
            })

            const remaining = carts.filter( get => get._id !== id)
            setCarts(remaining)
        }
      })
      
    }


    return (
        <div>

        <div className="flex justify-center py-10"> 
          {
            carts.length > 0  ?           <div className="border p-10 h-full w-full">
            <table className=" table-xl table">
           
           <thead className="text-lg md:text-base">
           <tr>
           <th>Image</th>
           <th className="ml-10">Name</th>
           <th>Price</th>
           <th className="text-center">Brand name</th>
           <th>Action</th>
           </tr>
       </thead>
       

<tbody >
   
   { 
       carts?.map(item => {
           
           return(
               
               <tr key={item._id} className=" md:text-base lg:text-xl">
                   
                   <td><img className="w-28" src={item.image} alt="" /></td>
               <td >T{item.name}</td>
                   <td>{item.price}$</td>
               <td className="text-center">{item.brand_name}</td>
               
               <td  onClick={() => handleDelete(item._id)}> <div className="text-xl bg-red-400 inline-block p-1 text-white rounded-md"> <LuDelete className="text-center cursor-pointer"></LuDelete></div></td>
         
               </tr> 
               
               )
           })
           
   }
   
</tbody>
</table>
       
       
   </div>  : <p className="lg:text-4xl md:text-base flex items-center h-[60vh]">No products found</p>

            }


            
        </div> 
        </div>
        );
    };

    
export default Mycart;