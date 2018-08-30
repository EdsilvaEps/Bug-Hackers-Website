import React from 'react';
import '../css/freelancer.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../vendor/bootstrap/css/bootstrap.min.css';

export const Footer = (props) =>{

  return (
    <footer class="footer">
      <div class="footer-above">
        <div class="container">
          <div class="row">
            <div class="footer-col col-md-6">
              <h3>Localização</h3>
              <p>Av. General Rodrigo Octávio, 6200
                <br/>Coroado I Manaus, Brazil</p>
            </div>
            <div class="footer-col col-md-6">
              <h3>Redes Sociais</h3>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="#">
                    <i class="fa fa-fw fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="#">
                    <i class="fa fa-fw fa-google-plus"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-social btn-outline" href="#">
                    <i class="fa fa-fw fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div class="footer-below">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              Copyright &copy; Bug Hackers 2018
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
