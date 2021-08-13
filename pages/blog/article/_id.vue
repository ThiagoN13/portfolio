<template>
  <div class="page-article">
    <c-menu class="mb-5"></c-menu>

    <div class="container">
      <p class="text-center c-date">
        {{ post.date }}
      </p>

      <h1 class="text-center my-4">
        {{ post.title }}
      </h1>

      <div class="row">
        <div class="col">
          <p class="c-description text-center mx-0 mx-md-5">
            {{ post.description }}
          </p>
        </div>
      </div>

      <div class="row align-items-center mb-4">
        <div class="col">
          <span class="c-author">{{ post.author.name }}</span>
          <span class="c-profession">{{ post.author.profession }}</span>
        </div>

        <div class="col text-right">
          Compartilhar:
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <img class="c-banner" src="https://apostrophecms.com/uploads/attachments/ckm3jvpoj07ffu8oci3dta5a9-apos-docker-header.full.jpg" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <p>
            Before we get started, you might be wondering why you should deploy your Apostrophe website using Docker. Docker allows developers to deploy applications while keeping each part of the application separate. In this guide, we're going to create one custom Docker image for our app but use five other images as well:

            Apostrophe - Our custom Apostrophe website image
            Mongo - Database for our Apostrophe app
            Portainer - GUI for managing Docker
            Nginx Proxy Manager - Manages NGINX and Let's Encrypt certificates
            MariaDB - Database for Nginx Proxy Manager
            Watchtower - Auto-updates images
            Note: While advancements for Apostrophe 3 continue, this tutorial is focused specifically on deploying Apostrophe 2 on Docker. There are plans to document and share updates on this same topic for Apostrophe 3 in the future.

            Setting up the Server
            For this example, I'll be using a VPS on DigitalOcean running RancherOS with 2 CPUs and 2GB RAM. RancherOS a lightweight OS designed for hosting containers. If you'd prefer to use another distribution, you'll need to make sure Docker Engine is installed. Instructions for installing Docker Engine can be found in the Docker documentation. Any cloud provider will work just fine but I'd suggest the specs above as minimums.
          </p>
        </div>
      </div>

      <p class="text-center mb-3 mt-5">
        Gostou deste artigo? Sinta-se à vontade para compartilhar e se inscrever
      </p>

      <div class="row mb-5 text-center">
        <div class="col">
          <button>Tweeter</button>
          <button>Facebook</button>
          <button>LinkedIn</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cMenu from '../../../shared/components/blog/c-menu'

export default {
  components: {
    cMenu
  },

  data () {
    return {
      post: {
        id: '',
        title: 'Deploying Apostrophe on Docker',
        description:  'In this tutorial, well deploy an Apostrophe 2 website with Portainer, Nginx Proxy Manager, and Watchtower for an easy-to-manage Docker experience.',
        date: new Date().toLocaleDateString(),
        author: {
          name: 'John Doe',
          profession: 'Developer'
        }
      }
    }
  }
}
</script>

<style scoped>
.c-author {
  display: block;
  font-size: 14px;
}

.c-profession {
  display: block;
  font-size: 14px;
}

.c-date {
  font-size: 12px;
  color: #7b7b88;
}

.c-banner {
  width: 100%;
  height: 460px;
  border-radius: 20px;
}

@media (max-width: 603px) {
  .c-banner {
    height: 280px;
  }
}
</style>
