<template>
  <div class="menu-blog">
    <ul class="menu-list">
      <li :class="{'active': active === 'artigos' }" @click="setActive('artigos')">Artigos</li>
      <li :class="{'active': active === 'programacao' }" @click="setActive('programacao')">Programação</li>
      <li :class="{'active': active === 'redes' }" @click="setActive('redes')">Redes</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'artigos'
    }
  },

  methods: {
    setActive (name) {
      this.active = name
    }
  }
}
</script>

<style scoped>
.menu-blog {
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}

.menu-blog .menu-list {
  list-style: none;
  text-align: center;
  margin: 0;
}

.menu-blog .menu-list li {
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
  padding: 20px 0 20px 0;
}

.menu-blog .menu-list li.active {
  border-bottom: 2px solid #EB5F22;
}
</style>
