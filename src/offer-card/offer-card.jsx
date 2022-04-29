import * as S from "./offer-card.style"
import { list } from "../offers/mock"

export const OfferCard = ({}) => {
  const { offers, basePrice, baseEffort, attendanceDays, baseHoursPpDay } = list

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(amount)

  return (
    <>
      {/* <S.Wrap> */}
      {offers.map(
        (
          {
            price,
            upTo,
            type,
            name,
            effortType,
            effortHours,
            canPairProgram,
            hoursPpDay,
            daysOfAttendance,
            basicRecommendation,
            sealDealRecommendation,
          },
          key
        ) => {
          return (
            <S.OfferWrap key={key}>
              <h1>{type}</h1>
              <p>
                {hoursPpDay * baseHoursPpDay} hours minimin of pair programming
              </p>
              <p>{effortType.toUpperCase()}</p>
              <div>Earn up to: {formatCurrency(upTo)}</div>
              <p>Offer price: {formatCurrency(price * basePrice)}</p>

              <p>Minimum {effortHours * baseEffort}h alocated for practice</p>
              <p>
                {daysOfAttendance * attendanceDays} days of attendancy required
              </p>
            </S.OfferWrap>
          )
        }
      )}
      {/* </S.Wrap> */}
    </>
  )
}
