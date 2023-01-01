<template>
  <div class="flex flex-col w-full h-[80vh] items-center justify-center">
    <h1 class="text-gray-800 text-3xl font-semibold capitalize mb-5 underline">TinieUrl</h1>
    <form @submit.prevent="setNewUrl()" class="md:w-3/6 w-5/6 flex flex-col items-center justify-center">
      <input v-model="longUrl" class="border-2 border-gray-800 rounded-lg text-center p-2 text-lg w-full" type="url"
        placeholder="https://yourprettylonglinkhere.com" required>
      <button type="submit"
        class="w-4/6 md:w-3/6 border-0 p-3 bg-blue-500 md:mt-4 mt-5 text-gray-100 text-lg rounded-lg font-semibold transition-all active:bg-blue-700  active:transition-all">
        Get your link
      </button>
    </form>

    <!-- <div v-if="data">
  
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      longUrl: '',
      urlInfo: ''
    }
  },
  methods: {
    async setNewUrl() {
      let data, err = await $fetch('https://bg.up.railway.app/n', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
        },
        body: this.longUrl,
      })
      this.urlInfo = data
      if (err) {
        alert("some shit", err)
      }
      console.log(this.longUrl)
    }
  }
}
</script>