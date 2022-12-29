<template>
  <div id="portfolio" class="text-center">
    <div class="container">
      <div class="section-title center">
        <h2>Github</h2>
        <div class="line"></div>
      </div>

      <section id="works" class="container">
        <div class="portfolio-items">
          <c-carousel :data="repositorios" v-slot="row">
            <div class="portfolio-item apps" @click="openInNewTab(row.repo.svn_url)">
              <div class="item-inner">
                <span>{{ row.repo.name }}</span>

                <i class="fab fa-github"></i>
                <div class="layer">
                  <div class="preview view">
                    <div class="eye"></div>
                  </div>
                </div>
              </div>
            </div>
          </c-carousel>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import cCarousel from '../utils/c-carousel'

export default {
  props: {
    repositorios: {
      type: Array
    }
  },

  components: {
    cCarousel
  },

  methods: {
    openInNewTab (url) {
      window.open(url, '_blank').focus();
    }
  }
}
</script>

<style>
/* Portfolio Section
==============================*/
#portfolio .view {
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

#portfolio .portfolio-items,
.portfolio-filter {
  list-style: none;
  padding: 0;
  margin: 0 -20px 20px 0;
  color: #fff;
}

#portfolio .portfolio-filter > li {
  display: inline-block;
}

#portfolio .portfolio-filter .btn-default {
  color: #fff;
  background-color: #26292e;
  border-color: #26292e;
}

#portfolio .portfolio-item {
  cursor: pointer;
  padding: 0;
  margin: 0;
}

#portfolio .portfolio-item .item-inner {
  border-radius: 10px;
  background: #26292e;
  padding: 20px;
  margin: 0 0 10px 0;
  position: relative;
  height: 165px;
}

#portfolio .portfolio-item i {
  font-size: 62px;
}

#portfolio .portfolio-item span {
  margin: 0;
  display: block;
  padding: 10px 0;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#portfolio .portfolio-item .layer {
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

#portfolio .portfolio-item .layer:hover div {
  background: #EB5F22;
  color: #fff;
}

#portfolio .portfolio-item .layer .preview {
  position: relative;
  top: 40%;
  display: inline-block;
}

#portfolio .portfolio-item:hover .layer {
  border-radius: 10px;
  opacity: 1;
}

#portfolio .eye {
  width: 13px;
  height: 13px;
  border: solid 1px #FFFF;
  border-radius:  75% 15%;
  position: relative;
  transform: rotate(45deg);
}

#portfolio .eye:before {
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
