<template>
  <div class="landpage">

    <c-home></c-home>

    <c-about></c-about>

    <c-jobs></c-jobs>

    <c-portfolio :repositorios="repositorios"></c-portfolio>

    <c-contact class="pb-5"></c-contact>

    <button ref="btnUp" class="btn btn-dark btn-up d-none" @click="onScrollUp">
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<script>
import cHome from '../shared/components/landpage/c-home'
import cContact from '../shared/components/landpage/c-contact'
import cPortfolio from '../shared/components/landpage/c-portfolio'
import cAbout from '../shared/components/landpage/c-about'
import cJobs from '../shared/components/landpage/c-jobs'

export default {
  async asyncData({ $axios }) {
    const repositorios = await $axios.$get('/api/repositorios')
    return { repositorios }
  },

  components: {
    cContact,
    cPortfolio,
    cAbout,
    cHome,
    cJobs
  },

  data () {
    return {
      repositorios: []
    }
  },

  mounted () {
    window.addEventListener('scroll', this.scroll)
  },

  methods: {
    onScrollUp () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    },

    scroll () {
      if (!this.$refs.btnUp) return

      if (window.scrollY < 100) {
        this.$refs.btnUp.classList.add('d-none')
      } else {
        this.$refs.btnUp.classList.remove('d-none')
      }
    }
  }
}
</script>

<style>
.landpage {
  background: #2f3238;
  color: #fff;
}

.landpage .btn-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.section-title.center {
  padding: 30px 0;
}
.section-title h2,
.section-title.center h2 {
  font-weight: 300;
  margin: 0;
}

.section-title.center .line {
  background-color: #EB5F22;
  height: 4px;
  width: 80px;
  text-align: center;
  margin: 0 auto;
  margin-top: 15px;
  transition: .3s ease;
}

.section-title:hover .line {
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
  color: #EB5F22;
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
  color: #EB5F22 !important;
  background-color: transparent;
  font-weight: 700;
}

.navbar-toggle {
  border-radius: 0;
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #EB5F22;
  border-color: #EB5F22;
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
