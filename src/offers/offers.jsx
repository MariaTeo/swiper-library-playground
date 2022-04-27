import { list } from "./mock"
import * as S from "./offers.style"
import { Field, Form, Formik } from "formik"
import { useState } from "react"

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount)

export const Offers = () => {
  const { offers, basePrice, baseEffort, attendanceDays } = list
  const [show, hide] = useState(false)
  const [formValues, setFormValues] = useState({})

  const onSubmit = (values) => {
    hide(true)
    setFormValues(values)
  }
  const showPair = formValues.team === "pair-programming"

  const [value, setRangeValue] = useState(0)

  const filteredList = offers
    .filter(
      ({ canPairProgram, spaces }) => canPairProgram === showPair && spaces
    )
    .filter(
      ({ price, canPairProgram }) =>
        price * (canPairProgram ? 0.5 : 1) * basePrice <= value * 25
    )

  const stringuri = [
    50, 150, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1500, 2000,
    2500,
  ]

  const range = (event, fieldValue) => {
    setRangeValue(stringuri[event.target.value])
    fieldValue(event.target.value)
  }

  return (
    <>
      <Formik initialValues={{ upTo: 0, investment: 0 }} onSubmit={onSubmit}>
        {({ isValid, setFieldValue, handleChange }) => {
          return (
            <Form>
              <div>
                We have multiple teams which you could join. So, tell us more
                about yourself. Do you prefer to regularly team up with at least
                one more person, or would you rather work alone ?
              </div>
              <Field type="radio" id="alone" name="team" value="alone" />
              <label htmlFor="alone">I am more of a lone wolf</label>
              <br></br>

              <Field
                type="radio"
                id="pair"
                name="team"
                value="pair-programming"
              />
              <label htmlFor="pair">I enjoy pairing up with someone else</label>
              <br />
              {formValues.team && (
                <Field
                  type="range"
                  id="investment"
                  name="investment"
                  step="1"
                  min={stringuri.length[0]}
                  max={stringuri.length - 1}
                  style={{ width: "500px" }}
                  onChange={(e) => {
                    range(e, setFieldValue)
                    setFieldValue(e.target.value)
                    hide(false)
                    handleChange(e)
                  }}
                />
              )}
              <label htmlFor="investment">Investment</label>
              <br />
              <label id="suma">{formatCurrency(value)}</label>
              <br />
              <label id="suma">{formatCurrency(value * 25)}</label>
              <br />

              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>

      {show && (
        <S.Wrap>
          {filteredList.map(
            (
              {
                price,
                upTo,
                type,
                name,
                effortType,
                effortHours,
                canPairProgram,
                daysOfAttendance,
                basicRecommendation,
                sealDealRecommendation,
              },
              key
            ) => {
              return (
                <S.OfferWrap key={key}>
                  <h1>{type}</h1>
                  <p>{effortType}</p>
                  <div>Earn up to: {formatCurrency(upTo)}</div>
                </S.OfferWrap>
              )
            }
          )}
        </S.Wrap>
      )}
    </>
  )
}
