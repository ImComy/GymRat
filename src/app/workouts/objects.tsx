interface MuscleWorked {
  primary: string;
  secondary: string;
}

interface Instruction {
  label: string;
  text: string;
}

interface Benefit {
  label: string;
  text: string;
}

interface CommonMistake {
  label: string;
  text: string;
}

interface Exercise {
  _id: string;
  name: string;
  type: string;
  isChecked: boolean;
  youtubeLink: string;
  imageUrl: string;
  musclesWorkedIMG: string;
  muscleGroup: string;
  routineGroup: string;
  musclesWorked: MuscleWorked;
  instructions: Instruction[];
  benefits: Benefit[];
  commonMistakes: CommonMistake[];
}

const exercises: Exercise[] = [
  {
    _id: "1",
    name: "Bench Press",
    type: "Dumbbell",
    isChecked: true,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/image.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'chest',
    routineGroup: 'push',
    musclesWorked: {
      primary: "Upper pectoralis major (upper chest)",
      secondary: "Anterior deltoids, triceps brachii, serratus anterior"
    },
    instructions: [
      { label: "Setup", text: "Set an incline bench to a 30-45 degree angle. Grab a dumbbell in each hand and sit on the bench with the dumbbells resting on your thighs." },
      { label: "Position", text: "Lie back on the bench, press the dumbbells up toward the ceiling, and position them directly over your chest with your palms facing forward. Your arms should be fully extended but not locked out." },
      { label: "Lower", text: "Slowly lower the dumbbells down to the sides of your chest, bending your elbows at about a 90-degree angle. Keep the movement controlled." },
      { label: "Press", text: "Press the dumbbells back up to the starting position by squeezing your chest muscles and straightening your arms." },
      { label: "Repeat", text: "Perform the desired number of repetitions." }
    ],
    benefits: [
      { label: "Upper chest development", text: "The incline angle targets the upper chest, helping build a balanced and well-rounded chest." },
      { label: "Improved shoulder stability", text: "The dumbbells require more stabilization than a barbell, engaging smaller stabilizer muscles, improving shoulder stability and coordination." },
      { label: "Symmetry and balance", text: "Dumbbells allow each side of the body to work independently, which can help correct muscle imbalances between the left and right sides." }
    ],
    commonMistakes: [
      { label: "Excessive arching of the lower back", text: "Maintain contact with the bench to prevent injury." },
      { label: "Too much weight", text: "Using more weight than you can handle often leads to poor form and increases the risk of injury." },
      { label: "Inconsistent range of motion", text: "Lower the dumbbells all the way down to your chest for a full stretch." }
    ]
  },
  {
    _id: "2",
    name: "Squat",
    type: "Bodyweight",
    isChecked: false,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/squat.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'legs',
    routineGroup: 'lower body',
    musclesWorked: {
      primary: "Quadriceps",
      secondary: "Hamstrings, glutes"
    },
    instructions: [
      { label: "Setup", text: "Stand with your feet shoulder-width apart and your toes slightly pointed out." },
      { label: "Lower", text: "Bend at the knees and hips to lower your body as if sitting back into a chair. Keep your chest up and back straight." },
      { label: "Depth", text: "Lower yourself until your thighs are parallel to the ground or as low as your flexibility allows." },
      { label: "Press", text: "Push through your heels to return to the starting position, keeping your core engaged." },
      { label: "Repeat", text: "Perform the desired number of repetitions." }
    ],
    benefits: [
      { label: "Strengthens lower body", text: "Squats effectively build strength in the quads, hamstrings, and glutes." },
      { label: "Enhances mobility", text: "Regular squatting improves flexibility and range of motion in the hips and ankles." },
      { label: "Improves balance", text: "Squats require stability and control, which can enhance overall balance and coordination." }
    ],
    commonMistakes: [
      { label: "Knees caving in", text: "Ensure your knees track over your toes to avoid injury." },
      { label: "Leaning forward", text: "Maintain an upright torso to distribute weight evenly." },
      { label: "Not going low enough", text: "Aim for at least parallel to maximize muscle engagement." }
    ]
  },
  {
    _id: "3",
    name: "Deadlift",
    type: "Barbell",
    isChecked: false,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/deadlift.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'full body',
    routineGroup: 'pull',
    musclesWorked: {
      primary: "Hamstrings",
      secondary: "Glutes, lower back"
    },
    instructions: [
      { label: "Setup", text: "Stand with your feet hip-width apart, barbell over the midfoot, and grip the barbell just outside your knees." },
      { label: "Position", text: "Bend at the hips and knees, lowering your body while keeping your back straight." },
      { label: "Lift", text: "Drive through your heels, extending your hips and knees to lift the barbell off the ground." },
      { label: "Lockout", text: "Stand tall at the top, squeezing your glutes and engaging your core." },
      { label: "Repeat", text: "Lower the bar back to the ground with control, then perform the desired number of repetitions." }
    ],
    benefits: [
      { label: "Total body workout", text: "Deadlifts engage multiple muscle groups, providing an effective full-body workout." },
      { label: "Improves posture", text: "Strengthening the posterior chain can lead to better posture and spinal alignment." },
      { label: "Functional strength", text: "Deadlifts mimic everyday movements, enhancing functional strength for daily activities." }
    ],
    commonMistakes: [
      { label: "Rounding the back", text: "Keep your back straight throughout the lift to prevent injury." },
      { label: "Using arms to lift", text: "Focus on driving through your legs rather than pulling with your arms." },
      { label: "Inconsistent bar path", text: "Ensure the barbell travels in a straight line to maximize efficiency." }
    ]
  },
  {
    _id: "4",
    name: "Pull-Up",
    type: "Bodyweight",
    isChecked: false,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/pullup.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'back',
    routineGroup: 'pull',
    musclesWorked: {
      primary: "Latissimus dorsi",
      secondary: "Biceps, trapezius"
    },
    instructions: [
      { label: "Setup", text: "Hang from a pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away." },
      { label: "Pull", text: "Engage your back muscles and pull your body upward until your chin is above the bar." },
      { label: "Control", text: "Lower yourself back down with control until your arms are fully extended." },
      { label: "Repeat", text: "Perform the desired number of repetitions." },
      { label: "Variation", text: "You can also try chin-ups by switching your grip to palms facing you." }
    ],
    benefits: [
      { label: "Upper body strength", text: "Pull-ups effectively build strength in the upper back, shoulders, and arms." },
      { label: "Core engagement", text: "Maintaining stability during pull-ups engages your core muscles, enhancing overall strength." },
      { label: "Improves grip strength", text: "Regularly performing pull-ups enhances your grip strength, benefiting other exercises." }
    ],
    commonMistakes: [
      { label: "Swinging body", text: "Avoid using momentum to pull yourself up; focus on controlled movements." },
      { label: "Incomplete range of motion", text: "Lower all the way down to fully engage your muscles." },
      { label: "Poor grip", text: "Ensure a firm grip on the bar to prevent slipping." }
    ]
  },
  {
    _id: "5",
    name: "Lunges",
    type: "Bodyweight",
    isChecked: false,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/lunges.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'legs',
    routineGroup: 'lower body',
    musclesWorked: {
      primary: "Quadriceps",
      secondary: "Glutes, hamstrings"
    },
    instructions: [
      { label: "Setup", text: "Stand with your feet together and engage your core." },
      { label: "Step", text: "Take a step forward with one leg, lowering your hips until both knees are bent at about a 90-degree angle." },
      { label: "Push back", text: "Push through your front heel to return to the starting position." },
      { label: "Repeat", text: "Perform the desired number of repetitions, then switch legs." },
      { label: "Variation", text: "Try reverse lunges by stepping backward instead of forward." }
    ],
    benefits: [
      { label: "Strengthens legs", text: "Lunges target the quads, glutes, and hamstrings for balanced leg development." },
      { label: "Enhances stability", text: "Balancing on one leg during lunges improves overall stability and coordination." },
      { label: "Versatile exercise", text: "Lunges can be performed with or without weights, making them adaptable to all fitness levels." }
    ],
    commonMistakes: [
      { label: "Knee going past toes", text: "Keep your front knee aligned with your ankle to avoid strain." },
      { label: "Leaning forward", text: "Maintain an upright torso throughout the movement." },
      { label: "Not engaging the core", text: "Keep your core tight to support your balance." }
    ]
  },
  {
    _id: "6",
    name: "Shoulder Press",
    type: "Dumbbell",
    isChecked: false,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/shoulder_press.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'shoulders',
    routineGroup: 'push',
    musclesWorked: {
      primary: "Deltoids",
      secondary: "Triceps, upper chest"
    },
    instructions: [
      { label: "Setup", text: "Sit or stand with a dumbbell in each hand at shoulder height, palms facing forward." },
      { label: "Press", text: "Press the dumbbells overhead until your arms are fully extended." },
      { label: "Control", text: "Lower the dumbbells back to shoulder height with control." },
      { label: "Repeat", text: "Perform the desired number of repetitions." },
      { label: "Variation", text: "Try the standing version for added core engagement." }
    ],
    benefits: [
      { label: "Builds shoulder strength", text: "Shoulder presses effectively strengthen the deltoids, enhancing upper body strength." },
      { label: "Improves shoulder stability", text: "This exercise engages stabilizing muscles, improving overall shoulder joint stability." },
      { label: "Increases functional fitness", text: "Shoulder presses mimic daily activities like lifting, enhancing overall functional fitness." }
    ],
    commonMistakes: [
      { label: "Arching the back", text: "Keep your back straight to prevent lower back strain." },
      { label: "Using too much weight", text: "Select a weight that allows you to maintain good form throughout the set." },
      { label: "Incomplete range of motion", text: "Ensure you press all the way up for full muscle engagement." }
    ]
  },
  {
    _id: "7",
    name: "Plank",
    type: "Bodyweight",
    isChecked: false,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/plank.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'core',
    routineGroup: 'stability',
    musclesWorked: {
      primary: "Rectus abdominis",
      secondary: "Transverse abdominis, obliques"
    },
    instructions: [
      { label: "Setup", text: "Lie face down on the floor, then lift your body off the ground with your forearms and toes." },
      { label: "Align", text: "Keep your body in a straight line from head to heels, engaging your core." },
      { label: "Hold", text: "Hold the position for the desired amount of time, maintaining proper form." },
      { label: "Breathe", text: "Remember to breathe throughout the exercise; do not hold your breath." },
      { label: "Variation", text: "Try side planks to target your obliques." }
    ],
    benefits: [
      { label: "Core strength", text: "Planks effectively engage and strengthen the entire core." },
      { label: "Improves posture", text: "Regular planking can lead to better posture by strengthening stabilizing muscles." },
      { label: "Enhances flexibility", text: "Planks engage multiple muscle groups, improving overall flexibility and strength." }
    ],
    commonMistakes: [
      { label: "Hips sagging", text: "Maintain a straight line; avoid letting your hips drop." },
      { label: "Holding breath", text: "Breathe steadily to maintain muscle engagement." },
      { label: "Raising buttocks too high", text: "Ensure your body stays in a straight line throughout the hold." }
    ]
  },
  {
    _id: "8",
    name: "Bicycle Crunch",
    type: "Bodyweight",
    isChecked: false,
    youtubeLink: "https://www.youtube.com/embed/your_video_id",
    imageUrl: "/bicycle_crunch.png",
    musclesWorkedIMG: "https://via.placeholder.com/492x292",
    muscleGroup: 'core',
    routineGroup: 'stability',
    musclesWorked: {
      primary: "Rectus abdominis",
      secondary: "Obliques"
    },
    instructions: [
      { label: "Setup", text: "Lie on your back with your hands behind your head and legs raised with knees bent." },
      { label: "Engage", text: "Engage your core and lift your shoulder blades off the ground." },
      { label: "Twist", text: "Bring one knee toward your chest while twisting your torso to bring the opposite elbow toward that knee." },
      { label: "Switch", text: "Alternate sides in a pedaling motion, extending the other leg out." },
      { label: "Repeat", text: "Continue alternating for the desired number of repetitions." }
    ],
    benefits: [
      { label: "Targets abs and obliques", text: "Bicycle crunches effectively engage both the rectus abdominis and oblique muscles." },
      { label: "Enhances core stability", text: "The twisting motion improves overall core stability and strength." },
      { label: "Increases coordination", text: "This exercise promotes coordination between the upper and lower body." }
    ],
    commonMistakes: [
      { label: "Pulling on the neck", text: "Use your core to lift rather than straining your neck." },
      { label: "Incomplete range of motion", text: "Fully extend your legs for maximum engagement." },
      { label: "Rushing through reps", text: "Focus on quality over quantity for better muscle activation." }
    ]
  },
];

export { exercises };
