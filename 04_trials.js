// In this file you can specify the trial data for your experiment

/* - replace the 2-alternative forced choice task with a key-press task
    - for this, you need to use another template view type
    - more on this here: https://magpie-ea.github.io/magpie-site/experiments/05views.html
*/
const trial_info = {

    key_press: [
      {
           question: "Are these two figures the same except for their orientation?",
           picture: "images/mental_rotation_images/1_50_different.jpg",
           key1: 'j',
           key2: 'f',
           j: 'same',
           f: 'different',
           correct: 'different',
           incorrect: 'same',
           degree_of_rotation: '50',
           picture_number: '1'
      },
      {
           question: "Are these two figures the same except for their orientation?",
           picture: "images/mental_rotation_images/2_50_same.jpg",
           key1: 'j',
           key2: 'f',
           j: 'same',
           f: 'different',
           correct: 'same',
           incorrect: 'different',
           degree_of_rotation: '50',
           picture_number: '2'
      },
      {
           question: "Are these two figures the same except for their orientation?",
           picture: "images/mental_rotation_images/3_150_different.jpg",
           key1: 'j',
           key2: 'f',
           j: 'same',
           f: 'different',
           correct: 'different',
           incorrect: 'same',
           degree_of_rotation: '150',
           picture_number: '3'
      },
      {
           question: "Are these two figures the same except for their orientation?",
           picture: "images/mental_rotation_images/4_150_same.jpg",
           key1: 'j',
           key2: 'f',
           j: 'same',
           f: 'different',
           correct: 'different',
           incorrect: 'same',
           degree_of_rotation: '150',
           picture_number: '4'
      },
      {
           question: "Are these two figures the same except for their orientation?",
           picture: "images/mental_rotation_images/5_50_different.jpg",
           key1: 'j',
           key2: 'f',
           j: 'same',
           f: 'different',
           correct: 'different',
           incorrect: 'same',
           degree_of_rotation: '50',
           picture_number: '5'
      }
    ]
};
