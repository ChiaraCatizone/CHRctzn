<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  title: String,
  subtitle: String,
  caption: String,
  badge: String,
  /** Se impostato, la card è cliccabile */
  href: String,
  /** Se false usa il router (RouterLink) invece di un <a href> normale */
  external: { type: Boolean, default: true },
  /** '1x1' | '4x3' | '16x9' | '21x9' */
  ratio: { type: String, default: '16x9' },
  /** 'cover' | 'contain' | 'fill' */
  fit: { type: String, default: 'cover' },
  /** '' | 'rounded' | 'rounded-3' | 'rounded-4' */
  rounded: { type: String, default: 'rounded-3' },
  loading: { type: String, default: 'eager' },
  srcset: String,
  sizes: String,
})

const isLoaded = ref(false)
const isError = ref(false)

const ratioClass = computed(() => `ratio ratio-${props.ratio}`)
const fitClass = computed(() => `object-fit-${props.fit}`)

// Sceglie il contenitore: link esterno, link interno (router) o semplice div
const wrapper = computed(() => {
  if (!props.href) return 'div'
  return props.external ? 'a' : RouterLink
})
const wrapperAttrs = computed(() => {
  if (!props.href) return {}
  const attrs = { class: 'text-decoration-none d-block' }
  return props.external ? { ...attrs, href: props.href } : { ...attrs, to: props.href }
})
</script>

<template>
  <component :is="wrapper" v-bind="wrapperAttrs">
    <div class="card shadow-sm border-0">
      <div class="position-relative overflow-hidden" :class="[ratioClass, rounded]">
        <img
          class="w-100 h-100 position-absolute top-0 start-0"
          :class="fitClass"
          :loading="loading"
          :srcset="srcset"
          :sizes="sizes"
          :src="src"
          :alt="alt"
          @load="isLoaded = true"
          @error="isError = true"
        />

        <div v-if="!isLoaded && !isError" class="skeleton"></div>

        <div
          v-if="isError"
          class="placeholder bg-light d-flex align-items-center justify-content-center p-3"
        >
          <span class="text-muted small">Image unavailable</span>
        </div>

        <span v-if="badge" class="badge text-bg-dark position-absolute top-0 end-0 m-2">
          {{ badge }}
        </span>
      </div>

      <div class="card-body">
        <h5 v-if="title" class="card-title mb-1">{{ title }}</h5>
        <div v-if="subtitle" class="card-subtitle text-muted mb-2">{{ subtitle }}</div>
        <p v-if="caption" class="card-text mb-0">{{ caption }}</p>
      </div>
    </div>
  </component>
</template>

<style scoped src="./image-card.css"></style>
