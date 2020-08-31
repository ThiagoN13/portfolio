<template>
  <!-- Works
  ==================================================-->
  <div id="portfolio" class="text-center">
    <div class="container">
      <div class="section-title center">
        <h2>Github</h2>
        <div class="line"></div>
      </div>

      <section id="works" class="container">
        <div class="row portfolio-items">
          <div class="portfolio-item col-sm-6 col-md-4 col-lg-3 apps" v-for="(repo, $index) in repositorios" :key="$index">
            <div class="item-inner">
              <img src="/img/github-background.jpg" alt />
              <h5>{{ repo.name }}</h5>
              <div class="layer">
                <a
                  class="preview view"
                  :href="repo.svn_url"
                  target="_blank"
                >
                  <div class="eye"></div>
                </a>
              </div>
            </div>
          </div>
          <!--/.portfolio-item-->
        </div>
      </section>
      <!--/#portfolio-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    this.getProjetos()
  },

  data () {
    return {
      repositorios: []
    }
  },

  methods: {
    async getProjetos () {
      const { data = [] } = await axios.get('/api/repositorios')

      this.repositorios = data
    }
  }
}
</script>

<style scoped>
/* Portfolio Section
==============================*/
.view {
  border-radius: 0;
  padding: 12px 18px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  color: white;
  border: 1px solid white;
  background: transparent;
  transition: all 0.5s;
  border-radius: 0 !important;
  transition: all 0.5s;
  color: #fff;
}
.view:hover {
  background: #de5e60;
  color: #fff;
  border: 1px solid #de5e60;
}

.portfolio-items,
.portfolio-filter {
  list-style: none;
  padding: 0;
  margin: 0 -20px 20px 0;
  color: #fff;
}
.portfolio-filter > li {
  display: inline-block;
}
.portfolio-filter .btn-default {
  color: #fff;
  background-color: #26292e;
  border-color: #26292e;
}
.portfolio-filter .active {
  color: #fff;
  background-color: #de5e60;
  border-color: #de5e60;
}

.portfolio-item {
  padding: 0;
  margin: 0;
}
.portfolio-item .item-inner {
  background: #26292e;
  padding: 5px 5px 0;
  margin: 0 10px 10px 0;
  position: relative;
}
.portfolio-item img {
  width: 100%;
}
.portfolio-item h5 {
  background-color: #26292e;
  margin: 0;
  padding: 10px 0;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.portfolio-item .layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(7, 2, 4, 0.77);
  text-align: center;
  vertical-align: middle;
  transition: opacity 300ms;
}
.portfolio-item .layer .preview {
  position: relative;
  top: 35%;
  display: inline-block;
}
.portfolio-item:hover .layer {
  opacity: 1;
}

.eye {
  width: 13px;
  height: 13px;
  border: solid 1px #FFFF;
  border-radius:  75% 15%;
  position: relative;
  transform: rotate(45deg);
}
.eye:before {
  content: '';
  display: block;
  position: absolute;
  width: 5px;
  height: 5px;
  border: solid 1px #FFFF;
  border-radius: 50%;
  left: 3px;
  top: 3px;
}
</style>