import React from 'react'
import {  recipe, bot, recipe_1, note, recipe_2,
   basket,  noodies, steak, hotdog, fruits,hamburger,
  food1, food2, food3, food4, food5, food6, 
  food7, food8, food9, food10, food11, food12,
   food13, food14, food15, food16, 
  food17, food18, food19, food20, food21,
   food22,food23, food24} from '../assets'
import { Link } from 'react-router-dom'
const Home_card = (props) =>{
  return(
    <>
  <div className="home_card">
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <p>{props.about}</p>
    <Link to={props.route} className='route'>explore</Link>

  </div>
    
    </>
  )
}

const Home = () => {
  return (
  <div className="home">
    <div className="home_heading">
      <span className='home_heading_header'>
        <p className='header_first'>palate</p>
<p className='header_last'> pioneer</p>
      </span>
      <h1 className='palate_header'>
        Home of all recipes, food store, ingredients and kitchen 
        tricks all for free.
      </h1>

      <p className='palate_slogan'>
        Community that allows as share our kitchen secrets with many others.
      </p>

      <a href="#cards">
        <button className='start_button'>
       
        get started
        </button>
      </a>
    </div>

<div className="explore" id='cards'>
<Home_card img={recipe_1}  title={'Food'} about={"Explore various foods across the world to pick what best and even new to try."} route="/foods"/>
<Home_card img={note} title={"Recipes"} about={'Find recipes created for you and also share your own to the community.'} route="/community"/>
<Home_card img={bot} title={"Health Assistance"} about={'Discover health issues on diet and get what is best for your health status.'} route="/chat"/>
</div>

< h1 className='food_overview'>Amazing Food awaits you</h1>
<div className="gallery">
  <img src={food1} alt="" />
  <img src={hamburger} alt="" />
  <img src={food2} alt="" />
  <img src={food3} alt="" />
  <img src={food4} alt="" />
  <img src={food5} alt="" />
  <img src={basket} alt="" />
  <img src={food6} alt="" />
  <img src={food7} alt="" />
  <img src={food8} alt="" />
  <img src={food9} alt="" />
  <img src={food10} alt="" />
  <img src={food11} alt="" />
  <img src={hotdog} alt="" />
  <img src={food12} alt="" />
  <img src={food13} alt="" />
  <img src={food14} alt="" />
  <img src={food15} alt="" />
  <img src={food16} alt="" />
  <img src={food17} alt="" />
  <img src={food18} alt="" />
  <img src={food19} alt="" />
  <img src={food20} alt="" />
  <img src={food21} alt="" />
  <img src={fruits} alt="" />
  <img src={food22} alt="" />
  <img src={food23} alt="" />
  <img src={food24} alt="" />
  <img src={steak} alt="" />
  <img src={recipe_1} alt="" />
  <img src={noodies} alt="" />
  <img src={recipe_2} alt="" />
 
</div>

< h1 className='food_overview'>Discover various diet Ailments and Solutions</h1>

<div className="Assistant_Overview">
  <div className="content">
    <h1><p>Food</p><p>Feel</p></h1>
    <h2>The Healthy food for walthy mood</h2>

    <p>{"FoodFeel introduces online healthy artificial intelligence Assistant who receives prompts on diet and allailments and suggests the best diet for the client healthy conditions"}
    </p>
    <h2>Meet Nine_Of_Clubs Ai</h2>


    <Link to="/chat" className='Overview_links'>
    <button>Ask Nine_Of_Clubs </button>
    </Link>
   

  </div>
  <img src={recipe_1} alt="" />

</div>

<h1 className='food_overview'>Dig out various recipes and ingredients for suited for your meal and cooking style.</h1>
<div className="Assistant_Overview">
  <div className="content">
    <h1><p>Kitchen</p><p>Made</p></h1>
    <h2>Find recipes that suit your cooking style</h2>

    <p>
      KitchenMade allows you to navigate through a list of recipes to find what you need,
      for your home or even restaurant food. <br />
      It also allows you to share your exeperience with others through uploading your recipes to the community.
    </p>
    <h2>Join thekitchen community</h2>

    <div className="btn">
      <Link to='/community'><button>Explore Recipes</button></Link>
      <Link to='/create'><button>Upload A Recipe</button></Link>
    </div>

  </div>
  <img src={recipe} alt="" />

</div>

<div className="footer">
  <p>The Lone Wolves Developers</p>
  <p><a href="/about">contact us</a></p>
  <p>All rights reserved @2023 Palate Pioneer</p>
</div>


  </div>
  )
}

export default Home