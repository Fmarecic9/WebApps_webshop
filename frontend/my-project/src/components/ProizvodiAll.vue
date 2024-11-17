<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-if="proizvodi">
          <div v-for="p in proizvodi" :key="p.id" class="group relative">
            <!-- Product Image -->
            <img 
              :src="p.slike[0]" 
              alt="Product Image"
              class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div class="mt-4 flex justify-between">
              <div>
                <!-- Product Name -->
                <h3 class="text-sm text-gray-700">
                  <router-link :to="`/proizvodi/${p.id}`">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ p.naziv }} 
                  </router-link>
                </h3>
              </div>
              <!-- Product Price -->
              <p class="text-sm font-medium text-gray-900">${{ p.cijena }}</p>
            </div>
          </div>
        </div>
        <!-- Fallback message if no products found -->
        <div v-else>
          <p class="text-gray-500">No products available.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { ref, onMounted} from 'vue';


let proizvodi = ref(null)



export default {
    name: "ProductsAll",
    setup(){
      
       onMounted(async () => {
        try {
          const response = await axios.get('http://localhost:3000/proizvodi');
          proizvodi.value = response.data; 
        } catch (error) {
          console.error('Greška u dohvatu podataka: ', error);
        }
      });
        return{
          proizvodi,
        }
    }
};

</script>

