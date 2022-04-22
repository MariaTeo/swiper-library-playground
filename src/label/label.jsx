import * as S from "./label.style"

export const Label = (
  { currently, wasEarning, currentlyEarning, money, b, i },
  noColor
) => {
  return (
    <>
      {b ? (
        <S.LabelWrapper b={b}>
          <S.LabelGroup>
            <S.Label noColor={noColor}>Current Job:</S.Label>
            <S.Label>{currently}</S.Label>
          </S.LabelGroup>
        </S.LabelWrapper>
      ) : i ? (
        <S.LabelWrapper i={i}>
          <S.LabelGroup>
            <S.Label noColor={noColor}>Income:</S.Label>
            <S.Label orange currentlyEarning={currentlyEarning}>
              £{currentlyEarning}
            </S.Label>
            <S.Label>per year</S.Label>
          </S.LabelGroup>
        </S.LabelWrapper>
      ) : money ? (
        <S.LabelWrapper money={money}>
          <S.LabelGroup>
            {money.map((sign, key) => (
              <S.Label key={key} sign={sign} grey>
                {sign}
              </S.Label>
            ))}
          </S.LabelGroup>
        </S.LabelWrapper>
      ) : (
        <S.LabelWrapper>
          <S.LabelGroup>
            <S.Label noColor={noColor}>Was earning:</S.Label>
            <S.Label wasEarning={wasEarning}>£{wasEarning}</S.Label>
            <S.Label>per year</S.Label>
          </S.LabelGroup>
        </S.LabelWrapper>
      )}
    </>
  )
}
