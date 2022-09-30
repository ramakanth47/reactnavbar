import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle' onClick={() =>
            setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        <div className='Links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )

            })}


          </ul>
        </div>
        <ul className='social-icons'></ul>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
            <FaLinkedin />
          </a>
        </li>

      </div>
    </nav>
  )
}

export default Navbar
