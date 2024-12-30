import React, { useState } from 'react'

export default function Footer(props) {
     
  return (
    <>
  
<footer class="text-center navbar-dark" style={props.bgmode}>
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div class="me-5 d-none d-lg-block">
      <span>Thanks for visiting on my Website.<strong> DevaTech</strong></span>
    </div>
   
    <div>
      <a href="/" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="/" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="/" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="/" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="/" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="/" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
   
  </section>
 
  <section class="">
    <div class="container text-center text-md-start mt-5">
    
      <div class="row mt-3">
      
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Text Util
          </h6>
          <p>
            Hello! Friend this is an text util website that performs some specific task on the enter text in the inpute box.
          </p>
        </div>
      
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="/" class="text-reset" style={{textDecoration:"none"}}>Python</a>
          </p>
          <p>
            <a href="/" class="text-reset" style={{textDecoration:"none"}}>Django</a>
          </p>
          <p>
            <a href="/" class="text-reset" style={{textDecoration:"none"}}>Bootstrap</a>
          </p>
          <p>
            <a href="/" class="text-reset" style={{textDecoration:"none"}}>ReatJs</a>
          </p>
        </div>
     

       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="https://youtube.com/@devanandrai9390?si=OeQlqITyHfbU0noa" style={{textDecoration:"none"}} target='_blank' class="text-reset">Youtube</a>
          </p>
          <p>
            <a href="https://www.instagram.com/devanand_._rai/profilecard/?igsh=MTFlbmphaWV5bWpjNg==" class="text-reset" style={{textDecoration:"none"}} target='_blank'>InstaGram</a>
          </p>
          <p>
            <a href="https://devanandrai.github.io/devanand/" class="text-reset" style={{textDecoration:"none"}} target='_blank'>PortFolio</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/devanand-rai-b27809255" class="text-reset" style={{textDecoration:"none"}} target='_blank'>LinkedIn</a>
          </p>
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Maharajganj, Uttar Pradesh, India</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            devanandrai3260@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91-6395332921</p>
          <p><i class="fas fa-print me-3"></i> + 91-99566*****</p>
        </div>
        
      </div>
    
    </div>
  </section>
  
  <div class="text-center p-4">
    © 2025 Copyright:
    <a class="text-reset fw-bold" target='_blank' href="https://www.instagram.com/devanand_._rai/profilecard/?igsh=MTFlbmphaWV5bWpjNg==">DevaTech</a>
  </div>
</footer>
 
    </>
  )
}
