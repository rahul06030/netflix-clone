import './nav.css'

import React , {useState, useEffect}from 'react'

const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(()=>{

        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    }, [] );


    return (
        <div className={`nav ${show && "navBlack"}`}>
            <img className="logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png" />
            
            <img className="avatar"
            src="https://hrmsvisualarts.weebly.com/uploads/1/2/1/5/121588419/published/green.jpg?1587085214"/>


        </div>
    )
}
export default Nav
