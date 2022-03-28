import create from "zustand"
import axios from "axios"

const useStore = create(set => ({
  fetchCalcParams: async () => {
    const data = await axios.get(
      "https://js-developer-second-round.herokuapp.com/api/v1/application/constraints"
    )
    set({
      amountStart: data.data.amountInterval.min,
      amountEnd: data.data.amountInterval.max,
      amountStep: data.data.amountInterval.step,
      amount: data.data.amountInterval.defaultValue,
      termStart: data.data.termInterval.min,
      termEnd: data.data.termInterval.max,
      termStep: data.data.termInterval.step,
      term: data.data.termInterval.defaultValue,
      paramsLoading: false,
    })
  },
  paramsLoading: true,
  // Amount interval data
  amount: 2000,
  amountStart: 10,
  amountEnd: 2000,
  amountStep: 10,

  setAmount: value => {
    set({ amount: value })
  },

  // Term interval data
  term: 15,
  termStart: 7,
  termEnd: 300,
  termStep: 1,

  setTerm: value => {
    set({ term: value })
  },
}))

export default useStore
