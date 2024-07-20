<script setup lang="ts">
import { navs, projects } from '@/config'
</script>

<template>
  <div class="w-full px-4 py-8 md:px-8">
    <div class="mx-auto w-fit max-w-[1200px]">
      <div class="mb-5 flex gap-2">
        <a v-for="item, index in navs" :key="index" :href="item.link" target="_blank">
          <button class="rounded-xl border bg-white px-4 py-2 transition-all duration-300 hover:border-gray-500">
            {{ item.title }}
          </button>
        </a>
      </div>
      <div class="mb-5">
        <Title>
          正式
          <template #sub>
            Production
          </template>
        </Title>
        <div class="flex flex-wrap justify-center gap-3 sm:justify-normal">
          <Project v-for="item, index in projects.filter(_ => _.status === 'production')" :key="index" :data="item" />
        </div>
      </div>
      <div class="mb-5">
        <Title>
          实验性
          <template #sub>
            Experimental
          </template>
        </Title>
        <div class="flex flex-wrap justify-center gap-3 sm:justify-normal">
          <Project v-for="item, index in projects.filter(_ => _.status === 'experimental')" :key="index" :data="item" />
        </div>
      </div>
      <div>
        <Title>
          停止维护
          <template #sub>
            Deprecated
          </template>
        </Title>
        <div class="flex flex-wrap justify-center gap-3 sm:justify-normal">
          <Project v-for="item, index in projects.filter(_ => _.status === 'deprecated')" :key="index" :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-slate-100
}
</style>
