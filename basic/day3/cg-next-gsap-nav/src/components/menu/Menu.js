"use client";
import React ,{useState , useRef , useEffect} from 'react'
import Link from 'next/link'

const menuLink = [
    {path: '/' , lable:"Home"},
    {path: '/work' , lable:"Work"},
    {path: '/about' , lable:"About"},
    {path: '/contact' , lable:"Contact"},
    {path: '/lab' , lable:"Lab"},
];

const Menu = () => {
    const container = useRef();
    const [isMenuOpen , setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    }



  return (
    <>
    <div className="menu-container" ref={container}>
        <div className="menu-bar">
            <div className="menu-logo"><Link href="/">Rajnesh Ani</Link></div>
            <div className='menu-open' onClick={toggleMenu}>
                <p>Menu</p>
            </div>
        </div>
        <div className="menu-overlay">
            <div className="menu-overlay-bar">
                <div className="menu-logo"></div>
                <div className='menu-close' onClick={toggleMenu}>
                    <p>Close</p>
                </div>
            </div>
            <div className="menu-close-icon">
                <p>&#x2715;</p>
            </div>
            <div className="menu-copy">
                <div className='menu-links'>
                    {menuLink.map((link, index) => (
                        <div className='menu-link-item' key={index}>
                            <div className='menu-link-item-holder' onClick={toggleMenu}>
                                <Link href={link.path} className='menu-link'>{link.lable}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="menu-info">
                     <div className="menu-info-col">
                        <a href='#'>X &#8599;</a>
                        <a href='#'>Instagram &#8599; </a>
                        <a href='#'>LinkedIn &#8599; </a>
                        <a href='#'>Behance &#8599; </a>
                        <a href='#'>Dribbble &#8599; </a>
                     </div>
                        <div className="menu-info-col">
                            <p>info@codegrid.com</p>
                            <p>2345 2344 234</p>
                        </div>
                </div>
            </div>
            <div className="menu-preview">
                <p>View Showreel</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Menu
