<template>
<div>
  <div id="nav">
    <div class="container">
      <h5 class="clickable" @click="decrementSlide">👈</h5>
      <h5>&nbsp;&nbsp;{{slidenum}}&nbsp;&nbsp;</h5>
      <h5 class="clickable" @click="incrementSlide">👉</h5>
    </div>
  </div>
  <div class="list-unstyled">
      <hr>
      <div class="media">
        <div class="media-body">
          <!-- <h1 class="mt-0 mb-1">{{slide.title}}</h1> -->
          <div v-html="slide.content"></div>
        </div>
      </div>
      <hr>
  </div>
</div>
</template>

<script>
import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

console.log(API_BASE_URL);

export default {
  name: 'App',
  data() {
    return {
      slidenum: 1,
      slide: {},
      loading: false,
      errored: false,
    };
  },
  mounted() {
    this.getSlide();
  },
  methods: {
    getSlide() {
      this.loading = true;

      axios.get(API_BASE_URL + this.slidenum)
        .then((response) => {
          this.slide = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.slidenum = 1;
          this.getSlide();
        });
    },
    incrementSlide() {
      this.slidenum += 1;
      this.getSlide();
    },
    decrementSlide() {
      if (this.slidenum > 1) {
        this.slidenum -= 1;
        this.getSlide();
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.clickable {
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
}

.main-content {
  display: flex;
  justify-content: center;
  width: 70%;
}
</style>
