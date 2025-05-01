import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const List = ({urlprop}) => {

  const url = 'http://localhost:4000'

  const [list, setList] = useState([])

  const fetchList = async () => {

    const response = await axios.get(`${urlprop}/api/list`);
    // console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
      // console.log(list)
    }
    else {
      toast.error('Error')
    }
  }



  const removeFood=async(foodId)=>{
    // console.log(foodId)
    const response=axios.post(`${urlprop}/api/del`,{id:foodId});
    await fetchList();
    if((await response).data.success){
      toast.success((await response).data.message)
    }
    else{
      toast.error("Error")
    }


   
  }


  useEffect(()=>{
    fetchList()
  })




  return (
    <div className='list add flex-col'>
      <p>All Foods list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>


        </div>
        {
          list.map((item, index) => {
            return (
              <div key={index} className='list-table-format'>
                <img src={`${urlprop}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p onClick={()=>removeFood(item._id)}  className='cursor'>X</p>
              </div>
            )

          })
        }
      </div>

    </div>


  )
}

export default List