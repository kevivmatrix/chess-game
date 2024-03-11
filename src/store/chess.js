import { createStore } from 'vuex'
import boardData from '@/utils/boardData.js'
import calculateMoves from '@/utils/calculateMoves'

export default createStore({
  state() {
    return {
      board: boardData,
      currentMove: 'white',
      selectedCell: {},
      possibleMoves: []
    }
  },
  getters: {
    board(state) {
      return state.board
    },
    currentMove(state) {
      return state.currentMove
    },
    selectedCell(state) {
      return state.selectedCell
    },
    possibleMoves(state) {
      return state.possibleMoves
    }
  },
  mutations: {
    changeSelectedPiece(state, payload) {
      state.selectedCell = { x: payload.x, y: payload.y }
      state.possibleMoves = calculateMoves(payload, state.board)
    },
    movePiece(state, payload) {
      const piece = state.board[state.selectedCell.y][state.selectedCell.x].piece
      state.board[payload.y][payload.x].piece = piece
      state.board[state.selectedCell.y][state.selectedCell.x].piece = {}
      state.possibleMoves = []
      state.selectedCell = {}
      state.currentMove = state.currentMove === 'white' ? 'black' : 'white'
    }
  },
  actions: {
    changeSelectedPiece(context, payload) {
      context.commit('changeSelectedPiece', payload)
    },
    movePiece(context, payload) {
      context.commit('movePiece', payload)
    }
  }
})
