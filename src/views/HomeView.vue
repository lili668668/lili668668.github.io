<template>
  <div :class="$style.container">
    <div :class="$style.output">
      <p :class="$style.title">{{ t('title.home') }}</p>
      <p :class="$style.subtitle">{{ t('subtitle.home') }}</p>
      <RouterLink
        v-for="(item, index) in items"
        :key="item.value"
        :class="$style.option"
        :to="getPath(item.value)"
        @mouseenter="selectedIndex = index"
      >
        <span :class="$style.cursor">{{ index === selectedIndex ? '>' : ' ' }}</span>
        <span :class="$style.key">[{{ item.key }}]</span>
        <span :class="$style.label">{{ item.name }}</span>
        <span v-if="index === selectedIndex" :class="$style.tip">
          &ensp;- {{ t(`subtitle.${item.value}`) }}
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Menu } from '../constants/Menu'
import { RouterLink } from 'vue-router'
import { useNavigationStore } from '../stores/navigation'
import { useLangRoute } from '../composables/useLangRoute'

const { t } = useI18n()
const router = useRouter()
const { getPath } = useLangRoute()
const navigationStore = useNavigationStore()
const selectedIndex = ref(0)

navigationStore.setBackPath('/')

const items = [
  { value: Menu.ABOUT, name: t('title.about'), key: '1' },
  { value: Menu.SKILL, name: t('title.skill'), key: '2' },
  { value: Menu.EXPERIENCE, name: t('title.experience'), key: '3' },
  { value: Menu.GAME, name: t('title.game'), key: '4' },
  { value: Menu.HISTORY, name: t('title.history'), key: '5' },
]

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp' || event.key === 'w') {
    event.preventDefault()
    selectedIndex.value = (selectedIndex.value - 1 + items.length) % items.length
  } else if (event.key === 'ArrowDown' || event.key === 's') {
    event.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % items.length
  } else if (event.key === 'Enter') {
    router.push(getPath(items[selectedIndex.value].value))
  } else if (event.key >= '1' && event.key <= '5') {
    const index = parseInt(event.key) - 1
    router.push(getPath(items[index].value))
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  font-family: var(--font-family);
  padding: 20px;
}

.output {
  min-width: 300px;
}

@media (max-width: 700px) {
  .container {
    padding: 0;
  }

  .output {
    min-width: unset;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .option {
    flex-wrap: wrap;
  }

  .label {
    flex-wrap: wrap;
    color: var(--accent-color);
  }

  .tip {
    flex-wrap: wrap;
    color: var(--text-color);
  }
}

.title {
  font-size: var(--title-font-size);
  color: var(--accent-color);
}

.subtitle {
  font-size: var(--p-font-size);
  color: var(--font-color);
}

.option {
  display: flex;
  margin: 4px 0;
  padding: 8px 0;
  transition: all 0.1s;
  text-decoration: none;
}

.option:hover {
  background: rgba(51, 255, 51, 0.1);
}

.cursor {
  color: #ffff00;
  margin-right: 8px;
  display: inline-block;
  width: 16px;
  animation: blink 1s infinite;
}

.key {
  color: #ff6600;
  margin-right: 12px;
}

.label {
  color: var(--accent-color);
}

.tip {
  color: var(--text-color);
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}
</style>
