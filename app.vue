<template>
    <div class="flex flex-col w-full h-[80vh] items-center justify-center">
        <h1 class="text-gray-800 text-3xl font-semibold capitalize ">TinieUrl</h1>
        <h2 class="px-3 mb-5 text-center text-gray-700 text-2xl">
            One more url shortener *(kinda) that you didn't need
        </h2>
        <h3 class="text-gray-600 font-semibold text-xl mb-2">
            Link expires in [{{ days }}] days
        </h3>
        <!-- <h3 class="text-gray-600 font-bold text-xl mb-2" v-if="days < 0">
            Linke expired
        </h3> -->
        <form @submit.prevent="setNewUrl()" class="md:w-3/6 w-5/6 flex flex-col items-center justify-center">
            <input v-model="longUrl" class="border-2 border-gray-800 rounded-lg  py-2 px-3 text-lg w-full" type="url"
            placeholder="https://yourabsurdlylonglinkhere.com" required>
            <button type="submit"
                class="w-4/6 md:w-3/6 border-0 p-3 bg-blue-500 md:mt-4 mt-5 text-gray-100 text-lg rounded-lg font-semibold transition-all active:bg-blue-700  active:transition-all">
                <span v-if="generating">Generating link...</span>
                <span v-else>Get your link</span>
            </button>
        </form>

        <div class="w-full flex flex-col items-center justify-center mt-7 px-4">
            <div v-if="urlInfo"
                class="md:w-4/6 w-full  bg-slate-200 rounded-lg px-3 py-2 flex flex-col items-evenly justify-center">
                <p class="text-lg font-semibold text-gray-800">Your link:
                </p>
                <span class="text-blue-600 w-full">
                    {{ urlInfo.redirectUrl }}
                </span>
                <p class="text-lg font-semibold text-gray-800">
                Your new link:
                </p>
                <a :href="shortUrl" target="_blank" class="text-orange-600 underline">
                    {{ shortUrl }}
                </a>


                <button @click="copyUrl()"
                    class="bg-slate-500 mt-4 text-white font-semibold p-3 rounded-lg active:bg-slate-600 active:transition-all">
                    <span v-if="copied">Copied successfully!</span>
                    <span v-else>Copy link</span>
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
                generating: false,
                copied: false
            }
        },
        methods: {
            copyUrl() {
                navigator.clipboard.writeText(this.shortUrl)
                    .then(() => (this.copied = true))
                    .catch(() => (alert("Something went horribly wrong")))
            },
            async setNewUrl() {
                const postData = {
                    'redirectUrl': this.longUrl,
                }
                const url = "https://t-gt3q.onrender.com"
                this.generating = true;
                let data = await $fetch(`${url}/n`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(postData),
                })
                this.generating = false
                this.urlInfo = data
                this.shortUrl = `${url}/r/${this.urlInfo.url}`
            }
        },
        setup(){
            const currentDate = new Date()
            const expirationDate = new Date("29 April 2023")
            const days = Math.abs(Math.ceil(
                (expirationDate - currentDate) / (1000 * 60 * 60 * 24)
            ))
            return {
                days
            }
        }
    }
</script>
