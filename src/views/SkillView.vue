<template>
  <div :class="$style.container">
    <div :class="$style.output">
      <p :class="$style.title">{{ t('title.skill') }}</p>
      <p :class="$style.subtitle">{{ t('subtitle.skill') }}</p>
    </div>
    <!-- Mobile tree view (< 930px) -->
    <div :class="$style.treeView">
      <div :class="$style.treeItem">
        $ cd /skills
        <br />
        $ tree
      </div>
      <div :class="$style.treeLine">
        <span :class="$style.treeRoot">{{ t('title.skill') }}</span>
      </div>
      <template v-for="(group, gi) in skillGroups" :key="`tv-g-${gi}`">
        <div :class="$style.treeLine">
          <span :class="$style.treeChar">{{
            gi === skillGroups.length - 1 ? '└── ' : '├── '
          }}</span>
          <span :class="$style.treeCat" :style="{ color: COLORS[gi] }">{{
            t(`skill.${group.key}.title`)
          }}</span>
        </div>
        <div v-for="(item, ii) in group.items" :key="`tv-i-${gi}-${ii}`" :class="$style.treeLine">
          <span :class="$style.treeChar"
            >{{ gi === skillGroups.length - 1 ? '    ' : '│   '
            }}{{ ii === group.items.length - 1 ? '└── ' : '├── ' }}</span
          >
          <span :class="$style.treeItem">{{ t(`skill.${group.key}.${item}`) }}</span>
        </div>
      </template>
    </div>

    <div :class="$style.mapWrapper">
      <svg
        :width="SVG_W"
        :height="svgHeight"
        :viewBox="`0 0 ${SVG_W} ${svgHeight}`"
        :class="$style.svg"
      >
        <defs>
          <filter id="sk-shadow" x="-20%" y="-30%" width="140%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="rgba(0,0,0,0.1)" />
          </filter>
        </defs>

        <!-- Root → Category connections -->
        <path
          v-for="(g, gi) in positions"
          :key="`rc-${gi}`"
          :d="curve(ROOT_X + ROOT_W, rootCenterY, g.catX, g.catY)"
          fill="none"
          :stroke="COLORS[gi]"
          stroke-width="4"
        />

        <!-- Category → Item connections -->
        <template v-for="(g, gi) in positions" :key="`ci-g-${gi}`">
          <path
            v-for="(iy, ii) in g.itemYs"
            :key="`ci-${gi}-${ii}`"
            :d="curve(g.catX + CAT_W, g.catY, g.itemData[ii].x, iy)"
            fill="none"
            :stroke="COLORS[gi]"
            stroke-width="2"
          />
        </template>

        <!-- Item nodes -->
        <template v-for="(g, gi) in positions" :key="`in-g-${gi}`">
          <g v-for="(iy, ii) in g.itemYs" :key="`in-${gi}-${ii}`">
            <text
              text-anchor="start"
              dominant-baseline="central"
              fill="#ffffff"
              font-size="11.5"
              font-family="var(--font-family, sans-serif)"
            >
              <tspan
                v-for="(line, li) in g.itemData[ii].lines"
                :key="li"
                :x="g.itemData[ii].x + ITEM_PAD_X"
                :y="iy + (li - (g.itemData[ii].lines.length - 1) / 2) * ITEM_LINE_H"
              >
                {{ line }}
              </tspan>
            </text>
          </g>
        </template>

        <!-- Category nodes -->
        <g v-for="(g, gi) in positions" :key="`cn-${gi}`">
          <rect
            :x="g.catX"
            :y="g.catY - CAT_H / 2"
            :width="CAT_W"
            :height="CAT_H"
            rx="12"
            :fill="COLORS[gi]"
            filter="url(#sk-shadow)"
          />
          <text
            :x="g.catX + CAT_W / 2"
            :y="g.catY"
            text-anchor="middle"
            dominant-baseline="central"
            fill="white"
            font-size="13"
            font-weight="600"
            font-family="var(--font-family, sans-serif)"
          >
            {{ t(`skill.${skillGroups[gi].key}.title`) }}
          </text>
        </g>

        <!-- Root node (rendered last so it sits on top) -->
        <rect
          :x="ROOT_X"
          :y="rootCenterY - ROOT_H / 2"
          :width="ROOT_W"
          :height="ROOT_H"
          rx="14"
          fill="#2c3e50"
          filter="url(#sk-shadow)"
        />
        <text
          :x="ROOT_X + ROOT_W / 2"
          :y="rootCenterY"
          text-anchor="middle"
          dominant-baseline="central"
          fill="white"
          font-size="15"
          font-weight="bold"
          font-family="var(--font-family, sans-serif)"
        >
          {{ t('title.skill') }}
        </text>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigationStore } from '@/stores/navigation'
import { useLangRoute } from '@/composables/useLangRoute'

const { t } = useI18n()
const { getPath } = useLangRoute()
const navigationStore = useNavigationStore()

navigationStore.setBackPath(getPath(''))

// ── Skill data (keys match locale JSON structure) ─────────────
const skillGroups = [
  { key: 'frontend', items: ['React', 'Vue', 'HTML/CSS/JavaScript(TypeScript)'] },
  { key: 'backend', items: ['Laravel', 'NodeJS', 'Rust', 'GraphQL', 'GRPC'] },
  { key: 'data', items: ['MySQL', 'MongoDB', 'ClickHouse', 'Redis', 'SeaweedFS'] },
  {
    key: 'language',
    items: ['JavaScript/TypeScript', 'PHP', 'Python3', 'Rust', 'Dart', 'C#', 'Golang', 'Java'],
  },
  { key: 'app', items: ['Flutter', 'Capacitor'] },
  { key: 'infra', items: ['CI', 'CD', 'docker', 'ansible', 'terraform'] },
  { key: 'cloud', items: ['GCP', 'China', 'VPS'] },
  { key: 'else', items: ['Linux', 'git', 'vim'] },
]

// ── Layout constants ──────────────────────────────────────────
const ROOT_X = 24
const ROOT_W = 110
const ROOT_H = 48

const CAT_X = 200
const CAT_W = 190
const CAT_H = 40

const ITEM_X = 500
const ITEM_PAD_X = 6 // left padding inside item box
const ITEM_LINE_H = 15 // px per text line
const ITEM_V_PAD = 14 // vertical padding inside item box
const ITEM_H_MIN = 30 // minimum item box height
const ITEM_STAGGER = 50 // x offset for odd-indexed items

const CAT_STAGGER = 100 // x offset for odd-indexed categories

const ITEM_GAP = 10 // gap between consecutive item boxes
const GROUP_GAP = 28 // extra space between category groups
const PAD_TOP = 48
const PAD_BOT = 48
const SVG_W = 1100

// ── Category colours ──────────────────────────────────────────
const COLORS = [
  '#4e79a7', // frontend  – steel blue
  '#f28e2b', // backend   – orange
  '#59a14f', // data      – green
  '#af7aa1', // language  – mauve
  '#e15759', // app       – red
  '#76b7b2', // infra     – teal
  '#c4a535', // cloud     – gold
  '#9c6b98', // else      – purple
]

// ── Helpers: multi-line text ───────────────────────────────────
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
function onResize() {
  windowWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
const isWide = computed(() => windowWidth.value > 1100)

function getLines(text: string): string[] {
  if (isWide.value) return [text]
  return text
    .split(/[、,]\s/)
    .flatMap((part) => part.split(/(?<=\/)/))
    .map((s) => s.trim())
    .filter(Boolean)
}

function getItemBoxH(lineCount: number): number {
  return Math.max(ITEM_H_MIN, lineCount * ITEM_LINE_H + ITEM_V_PAD)
}

// 中心最大、邊緣最小的山形偏移量
function mountainOffset(i: number, n: number, maxOffset: number): number {
  if (n <= 1) return maxOffset
  return maxOffset * (1 - Math.abs((2 * i) / (n - 1) - 1))
}

// ── Computed layout ───────────────────────────────────────────
const positions = computed(() => {
  let y = PAD_TOP
  return skillGroups.map((group, gi) => {
    const catX = CAT_X + mountainOffset(gi, skillGroups.length, CAT_STAGGER)

    const itemData = group.items.map((item, ii) => {
      const lines = getLines(t(`skill.${group.key}.${item}`))
      const h = getItemBoxH(lines.length)
      const x = ITEM_X + mountainOffset(ii, group.items.length, ITEM_STAGGER)
      return { lines, h, x }
    })

    const itemYs: number[] = []
    let curY = y
    itemData.forEach((item) => {
      itemYs.push(curY + item.h / 2)
      curY += item.h + ITEM_GAP
    })

    const catY = (itemYs[0] + itemYs[itemYs.length - 1]) / 2
    y = curY - ITEM_GAP + GROUP_GAP

    return { catX, catY, itemYs, itemData }
  })
})

const svgHeight = computed(() => {
  const last = positions.value[positions.value.length - 1]
  const lastIdx = last.itemData.length - 1
  return last.itemYs[lastIdx] + last.itemData[lastIdx].h / 2 + PAD_BOT
})

const rootCenterY = computed(() => {
  const catYs = positions.value.map((g) => g.catY)
  return (catYs[0] + catYs[catYs.length - 1]) / 2
})

// ── Cubic bezier: smooth S-curve left→right ───────────────────
function curve(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`
}
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  outline: none;
  font-family: var(--font-family);
  width: 100%;
}

.output {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.treeView {
  display: none;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.8;
  padding: 16px 24px 48px;
  width: 100%;
  box-sizing: border-box;
}

.treeLine {
  display: flex;
  align-items: baseline;
}

.treeRoot {
  font-weight: bold;
  font-size: 16px;
  color: #3b94ed;
}

.treeChar {
  color: #aaa;
  flex-shrink: 0;
  white-space: pre;
}

.treeCat {
  font-weight: 600;
  overflow-wrap: anywhere;
}

.treeItem {
  color: var(--text-color);
  overflow-wrap: anywhere;
  text-align: left;
}

.mapWrapper {
  width: 100%;
  max-width: 600px;
}

.svg {
  display: block;
  margin: 0 auto;
}

@media (max-width: 840px) {
  .mapWrapper {
    display: none;
  }

  .treeView {
    display: block;
  }
}
</style>
