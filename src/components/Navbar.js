import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { ModalHamburger } from './ModalHamburger'

const Navbar = () => {
  const [modal, setModal] = useState(false)
  return (
    <div>
        <nav className="navbar">
          <ul>
            <li 
              className='active-hamburger'
              onClick={() => setModal(true)}
            >
              <FaBars 
                size={20}
                color='white'
              />
            </li>
            <li style={{userSelect: 'none'}}>
              Quran.com
            </li>
          </ul>
        </nav>
        <div className={`modal-section`}>
          <ModalHamburger 
            modal={modal}
            setModal={setModal}
          />
        </div>
    </div>
  )
}

export default Navbar