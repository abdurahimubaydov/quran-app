import React, {useState, useEffect} from 'react'
import {GrClose, GrAction} from 'react-icons/gr'
import {AiOutlineClose, AiFillHome, AiFillMobile, AiFillLock} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {DiCode} from 'react-icons/di'

export const ModalHamburger = ({modal, setModal}) => {
  return (
    <div>
        <div className={`modal-card-navbar ${modal === true ? 'active' : ''}`}>
          <div className="navbar-modal-card-head">
            <h1>Quran.com</h1>
            <AiOutlineClose 
              style={{
                cursor: 'pointer'
              }}
              size={20}
              onClick={() => setModal(false)} 
            />
          </div>
          <div className="donor">
            <div className="donor-card">
              <h2>Become A Monthly Donor</h2>
              <p>Monthly donations help us improve Quran.com and sustain operations so we focus less on fundraising and more on creating impact.</p>
              <div className="donor-buttons">
                <a href="https://donate.quran.com/?showDonationPopup#donation-amount-step">
                  <button>Donate</button>
                </a>
                <a href="https://donate.quran.com/">
                  <button>Learn more</button>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-modal-components">
            <h4>MENU</h4>
            <p onClick={() => setModal(false)}>
              <AiFillHome 
                style={{marginRight: 10}} 
              /> Home
            </p>
            <p onClick={() => setModal(false)}>
              <FcAbout 
                style={{marginRight: 10}} 
              /> About
            </p>
            <p onClick={() => setModal(false)}>
              <AiFillMobile 
                style={{marginRight: 10}} 
              /> Mobile apps
            </p>
            <p onClick={() => setModal(false)}>
              <DiCode 
                style={{marginRight: 10}} 
              /> Developers
            </p>
            <p onClick={() => setModal(false)}>
              <AiFillLock 
                style={{marginRight: 10}} 
              /> Privacy
            </p>
          </div>
        </div>
    </div>
  )
}