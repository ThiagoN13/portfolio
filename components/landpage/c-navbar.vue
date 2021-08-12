<template>
  <nav id="art-menu" class="navbar navbar-expand-md fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Thiago N.</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>
          <a class="hamburger" href="#navbar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
          </a>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#home">Ínicio <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sobre">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Github</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contato">Contato</a>
          </li>         
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    this.onScroll()

    this.onClick()
  },

  methods: {
    onScroll () {
      const elemento = $('.navbar')

      window.addEventListener('scroll', event => {
        if (window.scrollY <= 100) {
          return elemento.css('background', 'none')
        }

        elemento.css('background', 'rgba(0, 0, 0, 0.8)')
      })
    },

    onClick () {
      $('.nav-item a[href^="#"]').on('click', function(e) {
        e.preventDefault()
        const id = $(this).attr('href')
        const targetOffset = $(id).offset().top
            
        $('html, body').animate({ 
          scrollTop: targetOffset - 100
        }, 500)

        $('.navbar-collapse').collapse('hide')
      })
    }
  }
}
</script>

<style scoped>
.navbar {
  text-align: center;
}

.navbar-brand {
  text-align: center;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  color: white;  
}

.navbar-toggler {
  border: none;  
  outline: none;
}

.navbar-toggler i {
  color: white;
}

.hamburger, .close {
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
}

.hamburger {
  fill: #fff;
}

#art-menu {
  padding: 20px;
  transition: all 0.8s;
}

#art-menu.navbar-default {
  background-color: rgba(248, 248, 248, 0);
  border-color: rgba(231, 231, 231, 0);
}

#art-menu a.navbar-brand {
  text-transform: uppercase;
  font-size: 22px;
  color: #fff;
  font-weight: 900;
}

#art-menu a.navbar-brand:hover {
  color: #de5e60;
}

#art-menu a.nav-link:hover {
  font-weight: 500;
  color: #de5e60;
  border-bottom: 1px solid #de5e60;
}

#art-menu.navbar-default .navbar-nav > li > a {
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
}

.navbar-nav .nav-item .nav-link{
  margin-bottom: -1px;
  border: none;  
  outline: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
}

/* desktop */
@media (min-width: 992px) {
  .brand .navbar-brand {
    font-size: 32px;
    border: none;  
    outline: none;
    color: #fff;
  }

  .navbar-nav .nav-item .nav-link{  
    color: white;    
  }
  .nav-link {
    margin-left: 30px;
    font-weight: 500;
  }

  .nav-link::after {
    content: '';
    display: block;
    height: 2px;
    width: 0;    
    transition: width .3s;
  }

  .nav-link:hover::after {
    width: 50%;
    transition: width .3s;
  }
} 
</style>