<template>
  <!-- Footer
  ==================================================-->
  <footer id="footer">
    <div class="footer-top">
      <div class="container text-center">
        <div class="footer-logo">
          <a href="https://www.thiagonogueira.xyz">Feito com amor ❤ Thiago Nogueira</a>
        </div>
        <div class="social-icons">
          <ul>
            <li>
              <a class="envelope" target="_blank" href="https://github.com/ThiagoN13">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a class="twitter" target="_blank" href="https://www.linkedin.com/in/thiago-nogueira-152405163/">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a class="dribbble" href="mailto:thiago.nogueira187@gmail.com">
                <i class="fas fa-envelope-open-text"></i>
              </a>
            </li>
            <li>
              <a class="facebook" target="_blank" href="https://gitlab.com/thiago.nogueira187">
                <i class="fab fa-gitlab"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="text-md-left text-center">&copy; 2020 Thiago N.</p>
          </div>
          <div class="col-sm-6">
            <p class="text-md-right text-center">
              Developed by
              <a target="_blank" href="https://github.com/thiagoN13">Thiago Nogueira</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* Footer Section
==============================*/

#footer {
  color: #fff;
  background: #26292e;
}

.footer-top {
  position: relative;
  padding: 30px 0;
}

#footer .footer-bottom {
  background-color: #26292e;
  padding: 20px 0 10px;
}

.footer-logo {
  display: inline-block;
  margin-bottom: 5px;
}

#footer .social-icons {
  margin-top: 15px;
}

#footer .social-icons ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}

.footer-logo a {
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
}

#footer .social-icons ul li a:hover {
  border: 1px solid #EB5F22;
  border-radius: 20%;
}

#footer .social-icons ul li a {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  line-height: 33px;
}

.social-icons ul li {
  float: left;
  margin-right: 8px;
}

.social-icons ul li a {
  color: #fff;
  background-color: #d9d9d9;
  height: 36px;
  width: 36px;
  line-height: 36px;
  display: block;
  font-size: 16px;
  opacity: 0.8;
}
.social-icons .icon-sm:hover {
  border-radius: 10px;
  background-color: #EB5F22;
}
.icon-lg {
  font-size: 48px;
  height: 108px;
  width: 108px;
  line-height: 108px;
  color: #fff;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  display: inline-block !important;
  border-radius: 100%;
}
.icon-md {
  font-size: 36px;
  height: 68px;
  width: 68px;
  line-height: 68px;
  color: #fff;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  display: block;
  border-radius: 50%;
  transition: 500ms;
}
.icon-sm {
  font-size: 24px;
  height: 34px;
  width: 34px;
  line-height: 34px;
  color: #fff;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  display: block;
  border-radius: 50%;
  transition: 500ms;
}
</style>
