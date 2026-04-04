<template>
  <div :class="$style.container">
    <p :class="$style.title">{{ t('title.about') }}</p>
    <p :class="$style.subtitle">{{ t('subtitle.about') }}</p>
    <p :class="$style.tip">{{ t('about.tip') }}</p>
    <div :class="$style.mobileFish">
      <div :class="$style.fishWrapper">
        <img :src="currentFrame" :class="$style.fishImg" />
        <div
          v-for="part in bodyParts"
          :key="part.key"
          :class="$style.annotationDot"
          :style="{ top: part.top, left: part.left }"
          @click="openModal(part.key)"
        >
          <svg :class="$style.raysSvg" viewBox="-40 -40 80 80" xmlns="http://www.w3.org/2000/svg">
            <circle :class="$style.ripple" cx="0" cy="0" r="9" fill="none" />
          </svg>
          <div :class="$style.dotCenter" />
        </div>
      </div>
    </div>

    <div :class="$style.diagram">
      <svg :viewBox="`0 0 2600 ${svgHeight}`" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="about-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path style="fill: var(--accent-color)" />
          </marker>
        </defs>

        <image
          :href="currentFrame"
          x="961"
          y="169"
          width="512"
          height="512"
          style="image-rendering: pixelated"
        />

        <polyline
          :class="$style.animatedLine"
          points="1201,300 1074,80 900,80"
          fill="none"
          stroke-width="6"
          style="stroke: var(--accent-color)"
          marker-end="url(#about-arrow)"
        />
        <foreignObject :x="nameX" y="40" :width="nameWidth" height="80">
          <div xmlns="http://www.w3.org/1999/xhtml" :class="$style.label">
            {{ t('about.name') }}
          </div>
        </foreignObject>

        <polyline
          :class="$style.animatedLine"
          points="1090,441 940,360 800,360"
          fill="none"
          stroke-width="6"
          style="stroke: var(--accent-color)"
          marker-end="url(#about-arrow)"
        />
        <foreignObject :x="nicknameX" y="325" :width="nicknameWidth" height="80">
          <div xmlns="http://www.w3.org/1999/xhtml" :class="$style.label">
            {{ t('about.nickname') }}
          </div>
        </foreignObject>

        <polyline
          :class="$style.animatedLine"
          :points="charactorPoints"
          fill="none"
          stroke-width="6"
          style="stroke: var(--accent-color)"
          marker-end="url(#about-arrow)"
        />
        <foreignObject x="0" y="580" width="800" :height="charactorHeight">
          <div xmlns="http://www.w3.org/1999/xhtml" :class="$style.label">
            {{ t('about.charactor') }}
          </div>
        </foreignObject>

        <polyline
          :class="$style.animatedLine"
          :points="dreamPoints"
          fill="none"
          stroke-width="6"
          style="stroke: var(--accent-color)"
          marker-end="url(#about-arrow)"
        />
        <foreignObject x="1520" :y="dreamTextY" width="900" height="160">
          <div xmlns="http://www.w3.org/1999/xhtml" :class="$style.label">
            {{ t('about.dream') }}
          </div>
        </foreignObject>

        <polyline
          :class="$style.animatedLine"
          points="1409,500 1594,300 1750,300"
          fill="none"
          stroke-width="6"
          style="stroke: var(--accent-color)"
          marker-end="url(#about-arrow)"
        />
        <foreignObject x="1800" y="200" width="760" :height="interestHeight">
          <div xmlns="http://www.w3.org/1999/xhtml" :class="$style.label">
            {{ t('about.interest') }}
          </div>
        </foreignObject>
      </svg>
    </div>
  </div>

  <BaseDialog :open="modalVisible" dense @close="closeModal">
    <p :class="$style.modalText">{{ modalText }}</p>
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigationStore } from '@/stores/navigation'
import { useLangRoute } from '@/composables/useLangRoute'
import originImg from '@/assets/ballfish/origin.png'
import winkImg from '@/assets/ballfish/wink.png'
import { Lang } from '@/constants/Lang'
import BaseDialog from '@/components/base/BaseDialog.vue'

const modalText = ref('')
const { t } = useI18n()
const { getPath, lang } = useLangRoute()
const navigationStore = useNavigationStore()

const bodyParts = [
  { key: 'name', top: '20%', left: '40%' },
  { key: 'nickname', top: '53%', left: '28%' },
  { key: 'charactor', top: '70%', left: '25%' },
  { key: 'dream', top: '60%', left: '55%' },
  { key: 'interest', top: '65%', left: '90%' },
]

const frames = [originImg, winkImg]
const frameIndex = ref(0)
const currentFrame = computed(() => frames[frameIndex.value])
const svgHeight = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 1000
    case Lang.EN:
      return 1500
    case Lang.JA:
      return 1200
    default:
      return 1000
  }
})
const charactorHeight = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 450
    case Lang.EN:
      return 1000
    case Lang.JA:
      return 600
    default:
      return 450
  }
})
const charactorPoints = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return '1049,500 924,650 850,650'
    case Lang.EN:
      return '1049,500 924,650 780,650'
    default:
      return '1049,500 924,650 850,650'
  }
})
const interestHeight = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 300
    case Lang.EN:
      return 700
    case Lang.JA:
      return 500
    default:
      return 300
  }
})
const dreamTextY = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 680
    case Lang.EN:
      return 1000
    case Lang.JA:
      return 750
    default:
      return 680
  }
})
const dreamPoints = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return '1245,500 1350,760 1480,760'
    case Lang.EN:
      return '1245,500 1350,1080 1480,1080'
    case Lang.JA:
      return '1245,500 1350,840 1480,840'
    default:
      return '1245,500 1350,760 1480,760'
  }
})
const nameWidth = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 375
    case Lang.EN:
      return 600
    default:
      return 375
  }
})
const nameX = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 550
    case Lang.EN:
      return 300
    default:
      return 550
  }
})
const nicknameWidth = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 300
    case Lang.EN:
      return 600
    case Lang.JA:
      return 600
    default:
      return 300
  }
})
const nicknameX = computed(() => {
  switch (lang) {
    case Lang.ZH:
      return 500
    case Lang.EN:
      return 200
    case Lang.JA:
      return 200
    default:
      return 500
  }
})

const modalVisible = ref(false)

function openModal(key: string) {
  console.log(key)
  modalVisible.value = true
  modalText.value = t(`about.${key}`)
}

function closeModal() {
  modalVisible.value = false
}

let frameTimer: ReturnType<typeof setInterval> | null = null

navigationStore.setBackPath(getPath(''))

onMounted(() => {
  frameTimer = setInterval(() => {
    frameIndex.value = frameIndex.value === 0 ? 1 : 0
  }, 400)
})

onUnmounted(() => {
  if (frameTimer) clearInterval(frameTimer)
})
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  font-family: var(--font-family);
  width: 100%;
}

.title {
  font-size: var(--title-font-size);
  color: var(--accent-color);
  margin: 8px 0 8px 0;
}

.subtitle {
  font-size: var(--p-font-size);
  color: var(--font-color);
  margin: 0;
}

.tip {
  display: none;
  font-size: 12px;
  color: gray;
}

@keyframes drawLine {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes wipeIn {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0% 0 0);
  }
}

.mobileFish {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 0;
}

.fishWrapper {
  position: relative;
  width: min(80vw, 80vh);
  height: min(80vw, 80vh);
}

.fishImg {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
}

.annotationDot {
  position: absolute;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
}

.raysSvg {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
}

.ripple {
  stroke: #888888;
  stroke-width: 3;
  fill: none;
  animation: rippleOut 2s ease-out infinite;
}

.dotCenter {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  border: 2px solid #888888;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

@keyframes rippleOut {
  0% {
    r: 9;
    opacity: 1;
  }
  100% {
    r: 20;
    opacity: 0;
  }
}

.diagram {
  width: 100%;
  max-width: 800px;
}

@media (max-width: 500px) {
  .diagram {
    display: none;
  }

  .mobileFish {
    display: flex;
  }

  .tip {
    display: flex;
  }
}

.modalText {
  font-family: var(--font-family);
  font-size: var(--p-font-size);
  color: var(--font-color, white);
  margin: 0;
  text-align: center;
}

.animatedLine {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 1s ease-out forwards;
}

.label {
  font-family: var(--font-family);
  font-size: 50px;
  color: white;
  line-height: 1.5;
  text-align: left;
  clip-path: inset(0 100% 0 0);
  animation: wipeIn 0.4s ease-out 0.6s forwards;
}
</style>
