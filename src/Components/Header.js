import React, { Component } from 'react';

class Header extends Component {
  render() {

   //  if(this.props.data){
   //    var name = this.props.data.name;
   //    var occupation= this.props.data.occupation;
   //    var description= this.props.data.description;
   //    var city= this.props.data.address.city;

   //    var localhero ="images/"+this.props.data.localhero;
   //    //Barryyu AREA CODECS AND then 


   //    var networks= this.props.data.social.map(function(network){
   //      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   //    })
   //  }

    return (
      <header id="home">

      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>


               
         <ul id="nav" className="nav">

   
     
 <span id="space" className="ten columns"> </span>

             <span id="space" className=" ten columns"> 
                        <img src="../images/portfolio/LOGO/LOGO_SM.png">
               </img>
                  </span>
                       <span id="space" className="ten columns"> </span>
         
     
            <li className="current"><a className="smoothscroll" href="#home">our Vison</a></li>
            <li><a className="smoothscroll" href="#about">our Value</a></li>
	         <li><a className="smoothscroll" href="#resume">about us</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Blog</a></li> */}
            <li><a className="smoothscroll" href="#testimonials">Contact</a></li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            <li> <span id="space" className="ten columns"> </span></li>
         </ul>

      </nav>
   

      {/* <div className="row banner"> */}

      <div className="banner">

            <img src="./images/portfolio/LocalHero/OurVison.png"></img>
 
     


         {/* <div className="banner-text">
            <h2 className="responsive-headline">Anyone can be your hero 
when you travel abroad {name}.</h2>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>

         </div> */}
      </div>
   
      <div>
<h1>HI</h1>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
