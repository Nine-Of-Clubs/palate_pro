import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, menuIcon, closeMenuIcon, profile } from '../../assets'

const Navbar = () =>{
    return(
        <>
        <Link to="/" className='Page_navigation-link'>overview</Link>
        <Link className='Page_navigation-link'>recipes
        <div className="Dropdown_recipes">
           
            <Link to='/community' className='Dropdown_item'>Explore recipes</Link>
            <Link to='/create' className='Dropdown_item'>Create or upload recipe</Link>
        </div>
        </Link>
        <Link to="/foods" className='Page_navigation-link'>foods</Link>
        <Link to="/ingredients" className='Page_navigation-link'>ingredients</Link>
        <Link to="/chat" className='Page_navigation-link'>Healthy_Assistant</Link>
        <Link to="/about" className='Page_navigation-link'>about us</Link>
        </>
    )
}

const Header = () => {
    const isUserLoggedIn = false;
    const [ToggleMenu, setTogglemenu] = useState(false);
  return (
    <>
     <div className="Menu_logo">
    <header>
       
        <div className="Logo">
            <Link to='/'>
                <img src={logo} alt="" className='logo_image'/>
            </Link>
        </div>

       
            <nav>
                <ul className='Desktop_bar'>
                    <Navbar/>
                   
                </ul>
            </nav>
     

    

       

        <div className="Mobile_bar">

        {
                ToggleMenu?
                <img src={closeMenuIcon} alt="" onClick={() => setTogglemenu(false)}></img>:
                <img src={menuIcon} alt="" onClick={() => setTogglemenu(true)}></img>

        }
          {
            ToggleMenu && (
                <ul className='Mobile_menu'>

                    <Navbar/>
                    
        
                </ul>
            )
          }

        </div>

        <div className="Tablet_bar">

        {
                ToggleMenu?
                <img src={closeMenuIcon} alt="" onClick={() => setTogglemenu(false)}></img>:
                <img src={menuIcon} alt="" onClick={() => setTogglemenu(true)}></img>

        }
          {
            ToggleMenu && (
                <ul className='Mobile_menu'>

                    <Navbar/>
                    
                </ul>
            )
          }

        </div>
       

    </header>

    <div className="user_menu">
        {
            isUserLoggedIn?
            (
                <>
                <img src={profile} alt="" className='User_profile' />
                <p>{'username'}</p>
                </>
            ):
            (
                <>
                    <div className="User">
            <Link to="/user" className='User_status'>
                sign in or sign up
            </Link>
        </div>

    
                </>
            )
        }

    </div>
    </div>

    
    </>
  )
}

export default Header