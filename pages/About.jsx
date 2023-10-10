import React, { useState } from 'react'
import { profile , instagram, linkedin, twitter, facebook } from '../assets'
import { developers, roles } from '../constants'

const Card = (props) =>{
  return(
    <>
    <div className="Card">
      <div className="Profile_container">
        <img src={props.img} alt="" className='profile'/>
      </div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <div className="social_media">
        <a href={props.facebook}><img src={facebook} alt="" /></a>
        <a href={props.linkedin}><img src={linkedin} alt="" /></a>
        <a href={props.instagram}><img src={instagram} alt="" /></a>
        <a href={prompt.twitter}><img src={twitter} alt="" /></a>
      </div>
    </div>
    
    </>
  )
}

function About (){
  
  const [Developers, setDevelopers] = useState(
        [
          {
            Name: 'Kelly Kelly',
            role: "Project Manager",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"

          },
          {
            Name: 'Alvine Munene',
            role: "programmer",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
          },
          {
            Name: 'Felix Odhiambo',
            role: "programmer",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
          },
          {
            Name: 'Joe Bloggs',
            role: "database programmer",
            img: `${ profile }`
            , facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
          },
          {
            Name: 'Chrisphers Orina',
            role: "system analyst",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
          },
          {
            Name: 'Chrisphers Orina',
            role: "programmer",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
          },
          {
            Name: 'Chrisphers Orina',
            role: "programmer",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
          },
          {
            Name: 'Chrisphers Orina',
            role: "programmer",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
        },
          {
            Name: 'Chrisphers Orina',
            role: "programmer",
            img: `${ profile }`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
          }

        ]
      );

  const showdevelopers = true;

return(
<div className="Developers">
  {
    showdevelopers ? (
      <>
     {
      Developers.map(
        (Developer) => {
          return(
          <Card img={Developer.img} name={Developer.Name} role={Developer.role}/>
          )

        }
      )
     }
      
      </>
    ) : (
      <p>No developers</p>
    )
  }
</div>
)

}

export default About