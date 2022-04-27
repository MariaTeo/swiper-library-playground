import { list } from "./mock"
import * as S from "./offers.style"

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount)

export const Offers = () => {
  return (
    <S.Wrap>
      {list.offers.map(
        (
          {
            price,
            basePrice,
            upTo,
            type,
            name,
            effortType,
            effortHours,
            baseEffort,
            canPairProgram,
            daysOfAttendance,
            attendanceDays,
            basicRecommendation,
            sealDealRecommendation,
          },
          key
        ) => {
          return (
            <>
              <S.OfferWrap key={key}>
                <h1>{type}</h1>
                <p>{effortType}</p>

                <div>Earn up to: {formatCurrency(upTo)}</div>
              </S.OfferWrap>
            </>
          )
        }
      )}
    </S.Wrap>
  )
}
