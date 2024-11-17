<template>
    <body>
       <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">Webshop</h1>
        <div>
          <router-view></router-view>
        </div>
    </body>
</template>

<script>
import ProductView from './components/Proizvod.vue';
import ProductsAll from './components/ProizvodiAll.vue'

export default {
  name: "App",
  components: {
    ProductView, ProductsAll
  },
};
</script>
