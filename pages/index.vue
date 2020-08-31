<template>
  <div class>

    <c-home></c-home>

    <c-sobre></c-sobre>

    <c-trabalhos></c-trabalhos>

    <c-portfolio></c-portfolio>

    <c-contato></c-contato>

  </div>
</template>

<script>
import cHome from '../components/c-home'
import cContato from '../components/c-contato'
import cPortfolio from '../components/c-portfolio'
import cSobre from '../components/c-sobre'
import cTrabalhos from '../components/c-trabalhos'

export default {
  components: {
    cContato,
    cPortfolio,
    cSobre,
    cHome,
    cTrabalhos
  },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,700,300,600,800,400);
body,
html {
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  color: #fff;
  overflow-x: hidden;
  background: #2f3238;
}
h1 {
  text-transform: none;
}
h1 strong {
  font-weight: 800;
}
h2 {
  text-transform: none;
  line-height: 20px;
  margin: 0;
  color: #fff;
}
h3 {
  font-size: 18px;
  font-weight: 900;
}
h4 {
  text-transform: none;
}
h5 {
  text-transform: none;
  font-weight: 700;
  line-height: 20px;
}
a {
  color: #de5e60;
}
a:hover,
a:focus {
  text-decoration: none;
  color: #de5e60;
}
ul,
ol {
  padding: 0;
}

.section-title.center {
  padding: 30px 0;
}
.section-title h2,
.section-title.center h2 {
  font-weight: 300;
}

.section-title.center .line {
  border-top: 4px solid #de5e60;
  height: 10px;
  width: 80px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
}

.section-title.center .line:hover {
  transition: all 0.5s ease-in-out;
  width: 15%;
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

#art-menu.navbar-default .navbar-nav > li > a {
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #de5e60 !important;
  background-color: transparent;
  font-weight: 700;
}

.navbar-toggle {
  border-radius: 0;
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #de5e60;
  border-color: #de5e60;
}

.navbar-default .navbar-toggle:hover > .icon-bar {
  background-color: #fff;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #fff;
}

@media (max-width: 603px) {
  #art-menu.navbar-default {
    background-color: rgba(0, 0, 0, 0.79);
  }
}
</style>