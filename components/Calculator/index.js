import { useEffect } from "react"
import { useQuery } from "react-query"
import useStore from "../../utils/store"
import axios from "axios"

// Styled components imports
import StyledCalculator from "./StyledCalculator"
import Sliders from "./Sliders"
import Slider from "./Slider"
import SliderTitle from "./SliderTitle"
import Select from "./Select"
import Results from "./Results"
import Result from "./Result"
import ResultTitle from "./ResultTitle"
import ResultValue from "./ResultValue"
import Button from "./Button"

const Calculator = () => {
  const {
    fetchCalcParams,
    amount,
    setAmount,
    amountEnd,
    amountStart,
    amountStep,
    term,
    setTerm,
    termEnd,
    termStart,
    termStep,
    paramsLoading,
  } = useStore(state => state)

  useEffect(() => {
    try {
      fetchCalcParams()
    } catch (e) {
      console.log("error")
    }
  }, [])

  const fetchCalcResult = () => {
    return axios.get(
      `https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?amount=${amount}&term=${term}`
    )
  }

  const { isLoading, data, isError } = useQuery(
    ["calcResult", { term, amount }],
    fetchCalcResult,
    { cacheTime: 300000 }
  )

  return (
    <>
      {paramsLoading ? (
        <div>Params loading...</div>
      ) : (
        <StyledCalculator>
          <Sliders>
            <Slider>
              <div>
                <SliderTitle>Amount</SliderTitle>
                <Select
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                >
                  {[...Array(1 + (amountEnd - amountStart) / amountStep)].map(
                    (_, i) => (
                      <option
                        key={i}
                        value={String(i * amountStep + amountStart)}
                      >
                        {i * amountStep + amountStart}
                      </option>
                    )
                  )}
                </Select>
              </div>
              <input
                type="range"
                min={amountStart}
                max={amountEnd}
                step={amountStep}
                value={amount}
                onChange={e => setAmount(e.target.value)}
                id="amount"
              />
            </Slider>
            <Slider>
              <div>
                <SliderTitle>Amount</SliderTitle>
                <Select value={term} onChange={e => setTerm(e.target.value)}>
                  {[...Array(1 + (termEnd - termStart) / termStep)].map(
                    (_, i) => (
                      <option key={i} value={String(i + termStart)}>
                        {i + termStart}
                      </option>
                    )
                  )}
                </Select>
              </div>
              <input
                type="range"
                min={termStart}
                max={termEnd}
                step={termStep}
                value={term}
                onChange={e => setTerm(e.target.value)}
                id="term"
              />
            </Slider>
          </Sliders>

          {isLoading ? (
            <Results>Calculating...</Results>
          ) : (
            <Results>
              <Result>
                <ResultTitle>Total principal</ResultTitle>
                <ResultValue> {data.data.totalPrincipal}</ResultValue>
              </Result>
              <Result>
                <ResultTitle>Term</ResultTitle>
                <ResultValue> {data.data.term}</ResultValue>
              </Result>
              {console.log(data.data)}
              <Result>
                <ResultTitle>Total cost of credit</ResultTitle>
                <ResultValue> {data.data.totalCostOfCredit}</ResultValue>
              </Result>
              <Result>
                <ResultTitle bold>Mothly payment</ResultTitle>
                <ResultValue bold> {data.data.monthlyPayment}</ResultValue>
              </Result>
            </Results>
          )}
          {isError && <div>Results fetch error...</div>}

          <Button>I do nothing</Button>
        </StyledCalculator>
      )}
    </>
  )
}

export default Calculator
