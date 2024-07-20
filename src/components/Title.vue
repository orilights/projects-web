<template>
  <h2 class="group mb-4 w-fit text-xl font-bold">
    <span>
      <slot />
    </span>
    <div v-if="$slots.sub" class="inline-block translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <slot name="sub" />
    </div>
    <div class="my-1 h-0.5 w-8 rounded-full bg-black transition-all duration-300 ease-out group-hover:w-full" />
  </h2>
</template>
