<template>
  <div class="flex flex-col w-full h-[80vh] items-center justify-center">
    <h1 class="text-gray-800 text-3xl font-semibold capitalize mb-5 underline">TinieUrl</h1>
    <form @submit.prevent="setNewUrl()" class="md:w-3/6 w-5/6 flex flex-col items-center justify-center">
      <input v-model="longUrl" class="border-2 border-gray-800 rounded-lg  py-2 px-3 text-lg w-full" type="url"
        placeholder="https://yourprettylonglinkhere.com" required>
      <button type="submit"
        class="w-4/6 md:w-3/6 border-0 p-3 bg-blue-500 md:mt-4 mt-5 text-gray-100 text-lg rounded-lg font-semibold transition-all active:bg-blue-700  active:transition-all">
        <span v-if="fetching">Generating link...</span>
        <span v-else>Get your link</span>
      </button>
    </form>

    <div class="w-full flex flex-col items-center justify-center mt-7">
      <div v-if="urlInfo" class="md:w-3/6 w-5/6 text-lg bg-slate-200 rounded-lg p-4">
        <p class="font-semibold text-gray-800">Your link:
          <span class="text-blue-600">
            {{ urlInfo.redirectUrl }}
          </span>
        </p>
        <p class="font-semibold text-gray-800">
          Your new link:
          <a :href="shortUrl" target="_blank" class="text-orange-400 underline">{{ shortUrl }}</a>
        </p>

        <button @click=""
          class="bg-slate-500 mt-4 text-white font-semibold p-3 rounded-lg active:bg-slate-600 active:transition-all">
          Copy link
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longUrl: '',
      urlInfo: '',
      shortUrl: '',
      fetching: false
    }
  },
  methods: {
    copyUrl(url) {
      navigator.clipboard.writeText(url).then(alert('success')).catch(alert('failure'))
    },
    async setNewUrl() {
      const postData = {
        'redirectUrl': this.longUrl,
      }
      const url = "https://bg.up.railway.app"
      this.fetching = true;
      let data = await $fetch(`${url}/n`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      })
      this.fetching = false
      this.urlInfo = data
      this.shortUrl = `${url}/r/${this.urlInfo.url}`
      this.copyUrl(this.shortUrl)
      console.log(this.urlInfo)
    }
  }
}
</script>