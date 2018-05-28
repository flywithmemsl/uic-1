export default {
  name: 'Course name',
  questions: [
    {
      text: 'What’s inside your mouth?',
      id: '1',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'How do we get cavaties?',
      id: '2',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'How do we stop bacteria monsters?',
      id: '3',
      type: 'icons',
      answers: [
        {
          text: 'Brush Teeth',
          image: 'brush.svg'
        },
        {
          text: 'Eat Candy',
          image: 'candy.svg'
        },
        {
          text: 'Floss Daily',
          image: 'dental-floss.svg'
        },
        {
          text: 'Drink Water',
          image: 'water.svg'
        },
        {
          text: 'Visit Dentist',
          image: 'dentist.svg'
        },
        {
          text: 'Bedtime Snacks',
          image: 'sleep.svg'
        },
        {
          text: 'Sugary Foods',
          image: 'beverage.svg'
        },
        {
          text: 'Get Exercise',
          image: 'gym.svg'
        },
        {
          text: 'Brush 2:00',
          image: 'clock.svg'
        },
      ]
    },
    {
      text: 'What will you do to prevent the cavity monsters?',
      id: '4',
      type: 'cards',
      answers: [
        {
          text: 'Brush Teeth',
          image: 'answer-img.svg'
        },
        {
          text: 'Eat Candy',
          image: 'answer-img_1.svg'
        },
        {
          text: 'Exercise',
          image: 'answer-img_2.svg'
        },
        {
          text: 'Watch TV',
          image: 'answer-img_3.svg'
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '5',
      type: 'calc',
      variants: [
        {
          value: 'clock',
          image: 'clock.svg'
        },
        {
          value: 'tooth',
          image: 'tooth.svg'
        },
        {
          value: 'popcorn',
          image: 'popcorn.svg'
        },
        {
          value: 'bacteria',
          image: 'bacteria.svg'
        },
        {
          value: 'caries',
          image: 'caries.svg'
        }
      ]
    },
  ]
}
