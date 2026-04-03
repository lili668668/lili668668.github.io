<template>
  <div :class="$style.container">
    <div>
      <p :class="$style.title">{{ t(`game.${current.key}.title`) }}</p>
    </div>

    <div :class="$style.stage">
      <button :class="[$style.navBtn, $style.navLeft]" @click="prev" :disabled="currentIndex === 0">
        <span>&#8592;</span>
      </button>

      <div :class="$style.artWrapper">
        <component :is="current.component" />
      </div>

      <button
        :class="[$style.navBtn, $style.navRight]"
        @click="next"
        :disabled="currentIndex === items.length - 1"
      >
        <span>&#8594;</span>
      </button>
    </div>

    <div :class="$style.info">
      <p :class="$style.description">{{ t(`game.${current.key}.description`) }}</p>
      <CursorSelector :items="selectorItems" :modelValue="0" @confirm="enterWebsite" />
    </div>

    <div :class="$style.dots">
      <span
        v-for="(item, i) in items"
        :key="item.key"
        :class="[$style.dot, i === currentIndex && $style.dotActive]"
        @click="currentIndex = i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigationStore } from '@/stores/navigation'
import { useLangRoute } from '../composables/useLangRoute'
import BotfishAscii from '@/components/ascii/BotfishAscii.vue'
import SupercubeAscii from '@/components/ascii/SupercubeAscii.vue'
import E5Ascii from '@/components/ascii/E5Ascii.vue'
import MemoAscii from '@/components/ascii/MemoAscii.vue'
import BokoyakiAscii from '@/components/ascii/BokoyakiAscii.vue'
import CursorSelector from '@/components/base/CursorSelector.vue'

const { t } = useI18n()
const { getPath } = useLangRoute()
const navigationStore = useNavigationStore()
navigationStore.setBackPath(getPath(''))

const items = [
  { key: 'bokoyaki', component: BokoyakiAscii },
  { key: 'memo', component: MemoAscii },
  { key: 'localMemoCli', component: MemoAscii },
  { key: 'botfish', component: BotfishAscii },
  { key: 'supercube', component: SupercubeAscii },
  { key: 'e5', component: E5Ascii },
]

const currentIndex = ref(0)
const current = computed(() => items[currentIndex.value])
const selectorItems = computed(() => [{ label: t('common.link') }])

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

function next() {
  if (currentIndex.value < items.length - 1) currentIndex.value++
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'Enter') enterWebsite()
}

function enterWebsite() {
  window.open(t(`game.${current.value.key}.link`), '_blank')
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  font-family: var(--font-family);
  padding: 20px;
  min-height: 100%;
}

.stage {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 16px;
}

.artWrapper {
  flex: 1;
  overflow: auto;
  color: white;
}

.navBtn {
  background: none;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  font-size: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background 0.15s;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navBtn:hover:not(:disabled) {
  background: rgba(51, 255, 51, 0.15);
}

.navBtn:disabled {
  opacity: 0.2;
  cursor: default;
}

.dots {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-color);
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 0.2s;
}

.dotActive {
  opacity: 1;
}

.info {
  margin-top: 20px;
  text-align: center;
  max-width: 600px;
}

.title {
  font-size: var(--title-font-size);
  color: var(--font-color);
}

.description {
  font-size: var(--p-font-size);
  color: var(--font-color);
  margin-bottom: 8px;
}

.link {
  font-size: var(--p-font-size);
  color: var(--accent-color);
  text-decoration: none;
  word-break: break-all;
}

.link:hover {
  text-decoration: underline;
}
</style>
