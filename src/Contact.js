import React from 'react';
import './Main.css';
import logo_Alta_v2_2x from './img//logo-ALTA-v2@2x.png';


function Contact() {
  return (
    <div>
   <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 col-12 d-flex align-items-center nol">
                <div class="box-biru"></div>
                <img src={logo_Alta_v2_2x} width="248px" alt="" id="left-image"/> 
                
            </div>
            
        <div class="col-md-7 col-12 ">
            <form class="contact-us">
                Contact Us <br/> <br/>
                <div class="form-group">
                    <label for="FormControlInput1">Full Name<span>*</span></label>
                    <input type="text" class="form-control" id="FormControlInput1" placeholder="Your Full Name" autofocus/>
                </div>
                <div class="form-group">
                    <label for="FormControlInput2">Email Address<span>*</span></label>
                    <input type="email" class="form-control" id="FormControlInput2" placeholder="example@domain.com"/>
                </div>
                <div class="form-group">
                    <label for="FormControlInput3">Phone Number<span>*</span></label>
                    <input type="tel" class="form-control" id="FormControlInput3" placeholder="08543890****"/>
                </div>
                <div class="form-group">
                    <label for="FormControlSelect1">Nationality</label>
                    <select class="form-control" id="FormControlSelect1" >
                    <option >Selected</option>
                    <option >Indonesian</option>
                    <option>Malaysian</option>
                    <option>American</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="FormControlTextarea1">Message</label>
                    <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>
                <div >
                    <button class="submit">Submit</button>  
                </div>
            </form>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Contact;
