<template>
  <div
    v-for="(boardRow, y) in board"
    :key="`board-row-${y}`"
    :style="{ display: 'flex', gap: '4px' }"
  >
    <BoardCell
      v-for="(cell, x) in boardRow"
      :key="`board-cell-${x}-${y}`"
      :cell="cell"
      :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }"
    />
  </div>
</template>

<script>
import BoardCell from '@/components/BoardCell.vue'
import { mapGetters } from 'vuex'

export default {
  components: { BoardCell },
  computed: {
    ...mapGetters(['board'])
  }
}
</script>
