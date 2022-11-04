export const PredictPropertyType = {
  tg: 'tg',
  df: 'df',
  dk: 'dk',
} as const

export type PredictPropertyType =
  typeof PredictPropertyType[keyof typeof PredictPropertyType]

export const PredictPropertyTypeName = (
  predictPropertyType: PredictPropertyType,
): string => {
  switch (predictPropertyType) {
    case PredictPropertyType.tg:
      return 'ガラス転移温度予測'
    case PredictPropertyType.df:
      return '対誘致電正接予測'
    case PredictPropertyType.dk:
      return '誘電率予測'
    default:
      return ''
  }
}
