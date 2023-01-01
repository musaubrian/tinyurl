<template>
  <div class="flex flex-col w-full h-[80vh] items-center justify-center">
    <h1 class="text-gray-800 text-3xl font-semibold capitalize mb-5 underline">TinieUrl</h1>
    <form @submit.prevent="" class="md:w-3/6 w-5/6 flex flex-col items-center justify-center">
      <input class="border-2 border-gray-800 rounded-lg text-center p-2 text-lg w-full" type="text"
        placeholder="https://yourprettylonglinkhere.com">
      <button type="submit"
        class="w-4/6 md:w-3/6 border-0 p-3 bg-blue-500 md:mt-4 mt-5 text-gray-100 text-lg rounded-lg font-semibold transition-all active:bg-blue-700 active:transition-all">
        Get your link
      </button>
    </form>
  </div>
</template>
