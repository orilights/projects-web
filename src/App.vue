<script setup lang="ts">
import { navs, projects, repoStatusApi } from '@/config'

const loadingRepoStatus = ref(false)

function fetchRepoStatus() {
  loadingRepoStatus.value = true
  fetch(repoStatusApi)
    .then(res => res.json())
    .then((data: any[]) => {
      for (const project of projects.value) {
        if (!project.link.github) {
          continue
        }
        const repo = data.find(_ => _.full_name === project.link.github)
        if (repo) {
          project.lastUpdated = repo.updated_at
          project.lastPushed = repo.pushed_at
          project.star = repo.stargazers_count
        }
      }
    })
    .finally(() => {
      loadingRepoStatus.value = false
    })
}

onMounted(() => {
  fetchRepoStatus()
})
</script>

<template>
  <div class="w-full px-4 py-8 md:px-8">
    <Transition name="fade">
      <svg
        v-if="loadingRepoStatus"
        id="L9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"
        class="fixed right-0 top-0 size-20"
      >
        <path fill="#aaa" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Transition>
    <div class="mx-auto w-fit max-w-[1200px]">
      <div class="mb-5 flex gap-2">
        <a v-for="item, index in navs" :key="index" :href="item.link" target="_blank">
          <button class="rounded-xl border bg-white px-4 py-2 transition-all duration-300 hover:border-gray-500">
            {{ item.title }}
          </button>
        </a>
      </div>
      <div class="group/container mb-5">
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
      <div class="group/container mb-5">
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
      <div class="group/container">
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
