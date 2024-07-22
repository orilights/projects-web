<script setup lang="ts">
import type { ProjectConfig } from '@/types'

defineProps<{
  data: ProjectConfig
}>()

function getDisplayTime(time: string) {
  const Minute = 60 * 1000
  const Hour = Minute * 60
  const Day = Hour * 24
  const Month = Day * 30
  const Year = Month * 12

  const diff = new Date().getTime() - new Date(time).getTime()

  if (diff < Hour) {
    return '刚刚'
  }
  else if (diff < Day) {
    return `${Math.floor(diff / Hour)}小时前`
  }
  else if (diff < Month) {
    return `${Math.floor(diff / Day)}天前`
  }
  else if (diff < Year) {
    return `${Math.floor(diff / Month)}月前`
  }
  else {
    return `${Math.floor(diff / Year)}年前`
  }
}
</script>

<template>
  <div class="group/item relative w-[274px] cursor-pointer">
    <a :href="data.link.website" target="_blank">
      <div class="flex h-full cursor-pointer flex-col justify-between rounded-xl border bg-white p-4 transition-all duration-300 hover:shadow-md">
        <div>
          <div v-if="data.cover" class="mb-1 h-[135px] w-[240px] overflow-hidden rounded-lg border bg-blue-50">
            <img :src="data.cover" alt="project cover image" class="w-full transition-transform duration-500 group-hover/item:scale-110">
          </div>
          <h1 class="mb-1 font-bold">
            {{ data.name }}
          </h1>
          <div class="text-sm">
            {{ data.description }}
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <a v-if="data.link?.website" :href="data.link.website" target="_blank" class="p-1 text-gray-500 transition-colors hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" class="size-4">
              <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" fill="currentColor" />
            </svg>
          </a>
          <a v-if="data.link?.github" :href="`https://github.com/${data.link.github}`" target="_blank" class="p-1 text-gray-500 transition-colors hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512" class="size-4">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z" fill="currentColor" />
            </svg>
          </a>
          <a v-if="data.star" :href="`https://github.com/${data.link.github}`" target="_blank" class="flex items-center p-1 text-gray-500 transition-colors hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 512" class="size-4">
              <path d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" fill="currentColor" />
            </svg>
            <span class="ml-0.5 text-xs leading-4">{{ data.star }}</span>
          </a>
          <div v-if="data.lastUpdated" title="最后更新时间" class="ml-auto flex items-center rounded-full bg-slate-200 px-2 py-0.5 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" class="size-3">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" fill="currentColor" />
            </svg>
            <span class="ml-1">
              {{ getDisplayTime(data.lastUpdated) }}
            </span>
          </div>
        </div>
      </div>
    </a>
    <div class="pointer-events-none absolute left-0 top-0 size-full scale-110 rounded-xl border border-transparent opacity-0 transition-all duration-300 group-hover/item:scale-100 group-hover/item:border-gray-500 group-hover/item:opacity-100" />
  </div>
</template>
