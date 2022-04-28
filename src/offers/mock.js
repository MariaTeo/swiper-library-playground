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
  50, 150, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1500, 2000,
  2500,
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
    last: false,
  },
  {
    id: "two",
    value: 2,
    last: false,
  },

  {
    id: "three",
    value: 3,
    last: false,
  },
  {
    id: "four",
    value: 4,
    last: false,
  },
  {
    id: "five",
    value: 5,
    last: false,
  },
  {
    id: "six",
    value: 6,
    last: false,
  },

  {
    id: "seven",
    value: 7,
    last: false,
  },
  {
    id: "eight",
    value: 8,
    last: false,
  },
  {
    id: "nine",
    value: 9,
    last: true,
  },
  {
    id: "ten",
    value: 10,
    last: true,
  },
]
