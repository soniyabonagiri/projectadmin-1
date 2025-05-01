import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = ({urlprop}) => {
  const url = 'http://localhost:4000'


  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "IMAX-HYD"
  })

  // useEffect(()=>{
  //   console.log(data);
  // },[data])




  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;


    setData(data => ({ ...data, [name]: value }));

  }


  useEffect(()=>{
    console.log(image)
  },[image])


  const onSubmitHandler = async (e) => {
    // console.log('form submitted')
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/add`, formData);
    if (response.data.success===true) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "IMAX-HYD"
      })
      setImage(false)
      console.log(response.data.message)
      toast.success(response.data.message)


    }
    else {
      //fooddata is not got added  to database.
      console.log("movie not added")
      toast.error(response.data.message);
      


    }
  }






  // console.log(data)

  return (

    <div className='add'>
      <form className='flex-col' action="" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" />

            {/* <img src={assets.upload} alt="" /> */}
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file"  id="image" hidden required />


        </div>
        <div className="add-product-name flex-col">
          <p>movie Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />

        </div>

        {/* <div className="add-product-name flex-col">
          <p>Movie Name</p>
          <input type="text" name='name' placeholder='Type here' />

        </div> */}
        <div className="add-product-description flex-col">
          <p>Movie Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" id="" rows="6" placeholder='Write Content here' required>

          </textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>movie Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" id="">

              <option value="IMAX-HYD">IMAX-HYD</option>
              <option value="PVR-HYD">PVR-HYD</option>
              <option value="AMB-Cinemas">AMB-Cinemas</option>
              <option value="Prasads-Multiplex">Prasads-Multiplex</option>
              <option value="AAA-Cinema">AAA-Cinema</option>
              <option value="Cinepolis">Cinepolis</option>
              <option value="MovieMax">MovieMax</option>
              <option value="Asian-Cinepride">Asian-Cinepride</option>

            </select>
          </div>
          <div className="add-price flex-col">
            <p>Movie price</p>
            {/* <input onChange={(e)=>setImage(e.target.files[0])} type="Number" name='price' placeholder='$200'/> */}



            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$200' />


          </div>
        </div>
        <button type='submit' className='add-btn'>Add Movie</button>


      </form>

    </div>

  )
}

export default Add
