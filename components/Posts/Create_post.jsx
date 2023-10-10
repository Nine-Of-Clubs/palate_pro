import React, { createElement, useState } from 'react'
import { profile,save }from '../../assets'

// function handlePost(){
//   alert('posted successfully');
// }

const Create_post = () => {

  const [image, setImage] = useState(null);
  const [user, setuser] = useState('');
  const [title, setTitle] = useState('')
  const [recipe, setRecipe] = useState('');

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result)
    }

    if(file){
      reader.readAsDataURL(file);
    }
  }

 
  // function handlePost(){
  //   e.preventDefault();

  //   alert('posted successfully');
  // }
 
  return (
  <>
  <div className="Create_post">

    <form action="" method="post">
      <h1 className='create'>Create Your recipe</h1>
   
    <label htmlFor="">Username</label>
        <input type="text"
         onChange={(e) =>  {
         setuser(e.target.value);
        }}
         
          />
        <label htmlFor="">Recipe name</label>
        <input type="text" 
         onChange={(e) =>  {
          setTitle(e.target.value);
         }}/>
      

     <label htmlFor="recipe">recipe content</label>
        <textarea name="" id=""
        onChange={
          (e) => setRecipe(e.target.value)}>

        </textarea>
        <input type="file" name="" id="" accept="image/*" onChange={handleUpload} />

        <button onClick={ () => handlePost()}>post</button>
     
      </form>

      <div className="file">
      
     { image && (<img src={image} alt='uploaded' className='upload' />)}
      </div>

      <div className="post_preview">
        <img src={image} alt="" className='upload'/>

        <h1 className='recipe_title'>{title}</h1>

        <span className='recipe'> <pre> {recipe}</pre>
         </span>



        <div className="user_id">

         
        
          <img src={profile} alt="" />
          
          <p>{user}</p>
          <img src={save} alt="" onClick={ () => save}/>
        </div>
      </div>
      </div>
  </>
  )
}

export default Create_post