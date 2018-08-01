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
      text: 'How to Stop the Cavity Monsters.',
      id: '2',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Brushing Away the Cavity Monsters!',
      id: '3',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Cavity Math',
      id: '4',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Stop the cavity monster.',
      id: '5',
      type: 'icons',
      answers: [
        {
          text: 'Brush twice a day every day',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Never brush my teeth',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Stop the cavity monster.',
      id: '6',
      type: 'icons',
      answers: [
        {
          text: 'Brush after a snack',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Wait until tomorrow',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Stop the cavity monster.',
      id: '7',
      type: 'icons',
      answers: [
        {
          text: 'Brush for 2 minutes',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Brush for 1 minute',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Cavity Math',
      id: '8',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Good For Me or Good for Cavity Monsters?',
      id: '9',
      type: 'cards',
      answers: [
        {
          text: 'Brush Teeth',
          image: 'answer-img.svg',

          answerData: {
            text: 'Good for me!',
            image: 'answer-img.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '10',
      type: 'calc',
      variants: [
        {
          value: 'clock',
          image: 'clock.svg'
        },
        {
          value: 'tooth',
          image: 'tooth.svg'
        }
      ]
    },
    {
      text: 'Mouth Game',
      desc: 'Arrange the icons to find the answer.',
      id: '11',
      type: 'mouth',
      variants: [
        {
          value: 'donut',
          image: 'donut.svg'
        },
        {
          value: 'apple',
          image: 'apple.svg'
        },
      ]
    },
  ]
}
