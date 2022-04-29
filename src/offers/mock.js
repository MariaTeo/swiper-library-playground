export const list = {
  offers: [
    {
      price: 0.5,
      spaces: 50,
      upTo: 25000,
      type: "UI Developer Solo Practice",
      name: {
        practice: true,
        preInterview: false,
      },
      effortType: "part-time",
      effortHours: 1,
      hoursPpDay: 1,
      canPairProgram: false,
      daysOfAttendance: 0,
      basicRecommendation: true,
      sealDealRecommendation: { paid: true },
    },
    {
      price: 1,
      spaces: 50,
      upTo: 50000,
      type: "UI Developer Solo Practice And Pre Interview",
      name: {
        practice: true,
        preInterview: true,
      },
      effortType: "part-time",
      effortHours: 1,
      hoursPpDay: 2,
      canPairProgram: true,
      daysOfAttendance: 0.5,
      basicRecommendation: true,
      sealDealRecommendation: { paid: false },
    },
    {
      price: 1,
      spaces: 25,
      upTo: 50000,
      type: "Front End Developer Solo Practice",
      name: {
        practice: true,
        preInterview: false,
      },
      effortType: "part-time",
      effortHours: 2,
      hoursPpDay: 2,

      canPairProgram: false,
      daysOfAttendance: 0,
      basicRecommendation: true,
      sealDealRecommendation: { paid: true },
    },
    {
      price: 2,
      spaces: 25,
      upTo: 100000,
      type: "Front End Developer Solo Practice And Pre Interview",
      name: {
        practice: true,
        preInterview: true,
      },
      effortType: "full-time",
      effortHours: 2,
      hoursPpDay: 4,

      canPairProgram: true,
      daysOfAttendance: 1,
      basicRecommendation: true,
      sealDealRecommendation: { paid: false },
    },
    {
      price: 2,
      spaces: 1,
      upTo: 100000,
      type: "Business Front End Developer Solo Practice",
      name: {
        practice: true,
        preInterview: false,
      },
      effortType: "business",
      effortHours: 3,
      hoursPpDay: 4,

      canPairProgram: false,
      daysOfAttendance: 0,
      basicRecommendation: true,
      sealDealRecommendation: { paid: true },
    },
    {
      price: 4,
      spaces: 1,
      upTo: 250000,
      type: "Business Front End Developer Solo Practice And Pre Interview",
      name: {
        practice: true,
        preInterview: true,
      },
      effortType: "business",
      effortHours: 3,
      hoursPpDay: 8,

      canPairProgram: true,
      daysOfAttendance: 1.5,
      basicRecommendation: true,
      sealDealRecommendation: { paid: false },
    },
  ],
  basePrice: 12500,
  baseEffort: 20,
  attendanceDays: 20,
  baseHoursPpDay: 2,
  baseHoursPerWeek: 2,
}

export const hoursList = [
  {
    id: "ten",
    value: 10,
  },
  {
    id: "twenty",
    value: 20,
  },
  {
    id: "thirty",
    value: 30,
  },
  {
    id: "forty",
    value: 40,
  },
  {
    id: "fifty",
    value: 50,
  },
  {
    id: "sixty",
    value: 60,
  },
]

export const investment = [
  { value: 50, last: false },
  { value: 150, last: false },
  { value: 250, last: false },
  { value: 300, last: false },
  { value: 350, last: false },
  { value: 400, last: false },
  { value: 450, last: false },
  { value: 500, last: false },
  { value: 600, last: false },
  { value: 700, last: false },
  { value: 800, last: false },
  { value: 900, last: false },
  { value: 1000, last: false },
  { value: 1500, last: false },
  { value: 2000, last: false },
  { value: 2500, last: true },
]

export const hoursPerDay = [
  {
    id: "one",
    value: 1,
  },
  {
    id: "two",
    value: 2,
  },
  {
    id: "four",
    value: 4,
  },
  {
    id: "six",
    value: 6,
  },
  {
    id: "eight",
    value: 8,
  },
  {
    id: "sixteen",
    value: 16,
  },
]

export const daysPerWeek = [
  {
    id: "two",
    value: 2,
  },

  {
    id: "five",
    value: 5,
  },

  {
    id: "seven",
    value: 7,
  },
]

export const buttons = [
  {
    id: "one",
    value: 1,
    review: false,
  },
  {
    id: "two",
    value: 2,
    review: false,
  },

  {
    id: "three",
    value: 3,
    review: false,
  },
  {
    id: "four",
    value: 4,
    review: false,
  },
  {
    id: "five",
    value: 5,
    review: false,
  },
  {
    id: "six",
    value: 6,
    review: false,
  },

  {
    id: "seven",
    value: 7,
    review: false,
  },
  {
    id: "eight",
    value: 8,
    review: false,
  },
  {
    id: "nine",
    value: 9,
    review: true,
  },
  {
    id: "ten",
    value: 10,
    review: true,
  },
]
