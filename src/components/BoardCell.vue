<template>
  <div
    :class="{
      'is-white': (cell.x + cell.y) % 2 === 0,
      'is-dark': (cell.x + cell.y) % 2 !== 0,
      'is-highlighted': currentMove === cell.piece.player && !isSelected,
      'is-selected': isSelected,
      'is-possible-move': isPossibleMove
    }"
    @click="selectCell"
  >
    {{ cell.x }},{{ cell.y }}

    <span :class="`is-${cell.piece.player}-piece`">
      <i :class="`fa-2x fa-solid fa-chess-${cell.piece.type}`"></i>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BoardCell',
  props: ['cell'],
  computed: {
    ...mapGetters(['selectedCell', 'currentMove', 'possibleMoves']),
    isSelected() {
      return this.selectedCell.x === this.cell.x && this.selectedCell.y === this.cell.y
    },
    isPossibleMove() {
      return this.possibleMoves.find((move) => move.x === this.cell.x && move.y === this.cell.y)
    }
  },
  methods: {
    ...mapActions(['changeSelectedPiece', 'movePiece']),
    selectCell() {
      if (this.isPossibleMove) {
        this.movePiece(this.cell)
      } else {
        if (!this.cell.piece.type || this.currentMove !== this.cell.piece.player) return

        this.changeSelectedPiece(this.cell)
      }
    }
  }
}
</script>

<style scoped>
div {
  width: 60px;
  height: 60px;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
}
.is-selected {
  background: purple !important;
}
.is-possible-move {
  background: green !important;
}
.is-highlighted {
  background: red !important;
}
.is-white {
  background: #eeeed2;
}
.is-dark {
  background: #769656;
}
.is-white-piece {
  color: white;
}
.is-black-piece {
  color: black;
}
</style>
