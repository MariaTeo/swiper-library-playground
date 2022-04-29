import { list } from "./mock"
import * as S from "./offers.style"
import { Field, FieldArray, Form, Formik } from "formik"
import { useState } from "react"
import {
  hoursList,
  investment,
  hoursPerDay,
  daysPerWeek,
  buttons,
} from "./mock"
import Button from "../component/button"
import Flex from "../component/flex"
import { Spring } from "../slider-spring/slider-spring"
import { OfferCard } from "../offer-card/offer-card"

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount)

export const Offers = () => {
  const { offers, basePrice, baseEffort, attendanceDays, baseHoursPpDay } = list
  const [show, hide] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [value, setRangeValue] = useState(0)

  const showPair = formValues.team === "pair-programming"

  const onSubmit = (values) => {
    hide(true)
    setFormValues(values)
    // console.log(values, "------submit-values-----")
  }

  const filteredList = offers
    .filter(
      ({ canPairProgram, spaces }) => canPairProgram === showPair && spaces
    )
    .filter(
      ({ effortHours }) => effortHours * baseEffort <= formValues.hoursPerWeek
    )
    .filter(
      ({ hoursPpDay }) => hoursPpDay * baseHoursPpDay <= formValues.hoursPpDay
    )
    .filter(({ daysOfAttendance }) =>
      daysOfAttendance * attendanceDays <= (formValues.daysPerWeek * 4.5 > 30)
        ? "30"
        : formValues.daysPerWeek * 4.5
    )
  // .filter(
  //   ({ price, canPairProgram }) =>
  //     price * (canPairProgram ? 0.5 : 1) * basePrice <= value * 25
  // )

  // console.log(filteredList, "filtered list")

  const range = (event, fieldValue) => {
    setRangeValue(investment[event.target.value])
    fieldValue(event.target.value)
  }

  return (
    <>
      <Formik
        initialValues={{
          investment: 0,
          team: "",
          hoursPerWeek: 0,
          hoursPpDay: 0,
          daysPerWeek: 0,
          experience: "",
        }}
        onSubmit={onSubmit}
      >
        {({ isValid, setFieldValue, handleChange, values }) => {
          return (
            <Form>
              <div>
                We have multiple teams which you could join. So, tell us more
                about yourself. Do you prefer to regularly team up with at least
                one more person, or would you rather work alone ?
              </div>
              <br />
              <Field type="radio" id="alone" name="team" value="alone" />
              <label htmlFor="alone">I am more of a lone wolf</label>
              <br />

              <Field
                type="radio"
                id="pair"
                name="team"
                value="pair-programming"
              />
              <label htmlFor="pair">I enjoy pairing up with someone else</label>

              <br />
              <br />

              <Spring formatCurrency={formatCurrency} />

              <OfferCard
                filteredList={filteredList}
              />

              <br />
              <br />

              <div>
                How many hours per week are you willing to put into practice?
              </div>
              <br />

              <div>
                {hoursList.map(({ id, value }, key) => {
                  return (
                    <div key={key}>
                      <Field
                        type="radio"
                        name={`hoursPerWeek`}
                        id={id}
                        checked={value === +values.hoursPerWeek}
                        value={+value}
                      />

                      <label htmlFor={id}>{`${value} hours`}</label>
                    </div>
                  )
                })}
              </div>
              <br />
              <label>
                Hours per week offers options:{" "}
                {offers.map(
                  ({ effortHours }) => effortHours * baseEffort + ", "
                )}
              </label>

              <br />
              <br />
              <div>
                How many days per week are you willing to put into practice?
              </div>
              <br />

              <div>
                {daysPerWeek.map(({ id, value }, key) => {
                  return (
                    <div key={key}>
                      <Field
                        type="radio"
                        name={`daysPerWeek`}
                        id={id}
                        checked={value === +values.daysPerWeek}
                        value={+value}
                      />

                      <label htmlFor={id}>{`${value} days`}</label>
                    </div>
                  )
                })}
              </div>
              <br />
              <label>
                Days of attendancy per month offers options:{" "}
                {offers.map(
                  ({ daysOfAttendance }) =>
                    daysOfAttendance * attendanceDays + ", "
                )}
              </label>

              <br />
              <br />
              <div>
                If you were to practice everyday with someone else, how many
                hours can you guarantee that you will be present?
              </div>
              <br />

              {hoursPerDay.map(({ id, value }, key) => {
                return (
                  <div key={key}>
                    <Field
                      type="radio"
                      name="hoursPpDay"
                      id={id}
                      value={value}
                      checked={value == values.hoursPpDay}
                    />

                    <label htmlFor={id}>{`${value} hours`}</label>
                  </div>
                )
              })}
              <br />
              <label>
                Hours of pair programming offers options:
                {offers.map(
                  ({ hoursPpDay }) => hoursPpDay * baseHoursPpDay + ", "
                )}
              </label>

              <br />
              <br />

              <label htmlFor="investment">How would you rate us?</label>
              <br />
              <Flex>
                {buttons.map(({ value, review }, key) => {
                  return (
                    <Button width={20} height={20} review={review} key={key}>
                      {value}
                    </Button>
                  )
                })}
              </Flex>
              <br />
              <br />

              {/* {formValues.team && ( */}

              {/* <>
                <label htmlFor="investment">Investment</label>
                <br />
                <Field
                  type="range"
                  id="investment"
                  name="investment"
                  step="1"
                  min={investment.length[0]}
                  max={investment.length - 1}
                  style={{ width: "500px" }}
                  onChange={(e) => {
                    range(e, setFieldValue)
                    setFieldValue(e.target.value)
                    hide(false)
                    handleChange(e)
                  }}
                />

                <br />
                <label id="suma">{formatCurrency(value)}</label>
                <br />
              </> */}
              {/* )} */}

              <br />
              <label>
                Investment value in a period of 25 months:
                {formatCurrency(value * 25)}
              </label>
              <br />

              <br />
              <label htmlFor="experience">
                Do you have prior knowledge in this domaine? If so, please write
                a brief summary below.
              </label>
              <br />
              <br />
              <Field
                type="input"
                name="experience"
                value={formValues.experience}
                style={{
                  width: "400px",
                  textOverflow: "ellipsis",
                  overflow: "auto",
                }}
                placeholder=" Please write a brief summary..."
              />

              <br />
              <br />
              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
      <br />

      {show && <OfferCard filteredList={filteredList} />}
    </>
  )
}
