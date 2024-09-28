type WorkoutPreset = {
  setNumber: number;
  weight: number;
};

type Workout = {
  workout: string;
  img: string;
  tool: string;
  presets: WorkoutPreset[];
};

type Page = {
  label: string;
  workouts: Workout[];
};

const workoutPage: Page[] = [
  {
    label: 'Legs',
    workouts: [
      { workout: 'Leg Press', img: 'leg_press.png', tool: 'machine', presets: [{ setNumber: 1, weight: 100 }, { setNumber: 2, weight: 120 }, { setNumber: 3, weight: 140 }] },
      { workout: 'Squats', img: 'squats.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 60 }, { setNumber: 2, weight: 80 }, { setNumber: 3, weight: 100 }] },
      { workout: 'Lunges', img: 'lunges.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Leg Curls', img: 'leg_curls.png', tool: 'machine', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Leg Extensions', img: 'leg_extensions.png', tool: 'machine', presets: [{ setNumber: 1, weight: 45 }, { setNumber: 2, weight: 55 }, { setNumber: 3, weight: 65 }] },
      { workout: 'Calf Raises', img: 'calf_raises.png', tool: 'machine', presets: [{ setNumber: 1, weight: 50 }, { setNumber: 2, weight: 60 }, { setNumber: 3, weight: 70 }] },
      { workout: 'Bulgarian Split Squats', img: 'bulgarian_split_squats.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 35 }] },
      { workout: 'Hack Squats', img: 'hack_squats.png', tool: 'machine', presets: [{ setNumber: 1, weight: 90 }, { setNumber: 2, weight: 110 }, { setNumber: 3, weight: 130 }] },
      { workout: 'Sled Pushes', img: 'sled_pushes.png', tool: 'sled', presets: [{ setNumber: 1, weight: 120 }, { setNumber: 2, weight: 140 }, { setNumber: 3, weight: 160 }] },
      { workout: 'Smith Machine Squats', img: 'smith_machine_squats.png', tool: 'smith machine', presets: [{ setNumber: 1, weight: 70 }, { setNumber: 2, weight: 90 }, { setNumber: 3, weight: 110 }] },
      { workout: 'Front Squats', img: 'front_squats.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 50 }, { setNumber: 2, weight: 70 }, { setNumber: 3, weight: 90 }] },
      { workout: 'Sumo Deadlifts', img: 'sumo_deadlifts.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 80 }, { setNumber: 2, weight: 100 }, { setNumber: 3, weight: 120 }] },
      { workout: 'Romanian Deadlifts', img: 'romanian_deadlifts.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 70 }, { setNumber: 2, weight: 90 }, { setNumber: 3, weight: 110 }] },
      { workout: 'Step-Ups', img: 'step_ups.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Glute Bridges', img: 'glute_bridges.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 60 }, { setNumber: 3, weight: 80 }] },
      { workout: 'Donkey Kicks', img: 'donkey_kicks.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Kettlebell Swings', img: 'kettlebell_swings.png', tool: 'kettlebell', presets: [{ setNumber: 1, weight: 16 }, { setNumber: 2, weight: 24 }, { setNumber: 3, weight: 32 }] },
      { workout: 'Reverse Lunges', img: 'reverse_lunges.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 35 }] },
      { workout: 'Box Jumps', img: 'box_jumps.png', tool: 'box', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Standing Calf Raises', img: 'standing_calf_raises.png', tool: 'machine', presets: [{ setNumber: 1, weight: 50 }, { setNumber: 2, weight: 60 }, { setNumber: 3, weight: 70 }] },
      { workout: 'Seated Calf Raises', img: 'seated_calf_raises.png', tool: 'machine', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Leg Press Machine', img: 'leg_press_machine.png', tool: 'machine', presets: [{ setNumber: 1, weight: 110 }, { setNumber: 2, weight: 130 }, { setNumber: 3, weight: 150 }] },
      { workout: 'Walking Lunges', img: 'walking_lunges.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
    ],
  },
  {
    label: 'Back',
    workouts: [
      { workout: 'Deadlifts', img: 'deadlifts.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 100 }, { setNumber: 2, weight: 120 }, { setNumber: 3, weight: 140 }] },
      { workout: 'Pull-Ups', img: 'pull_ups.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Lat Pulldowns', img: 'lat_pulldowns.png', tool: 'machine', presets: [{ setNumber: 1, weight: 50 }, { setNumber: 2, weight: 60 }, { setNumber: 3, weight: 70 }] },
      { workout: 'Bent Over Rows', img: 'bent_over_rows.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 80 }, { setNumber: 2, weight: 100 }, { setNumber: 3, weight: 120 }] },
      { workout: 'T-Bar Rows', img: 't_bar_rows.png', tool: 'machine', presets: [{ setNumber: 1, weight: 70 }, { setNumber: 2, weight: 90 }, { setNumber: 3, weight: 110 }] },
      { workout: 'Seated Cable Rows', img: 'seated_cable_rows.png', tool: 'machine', presets: [{ setNumber: 1, weight: 60 }, { setNumber: 2, weight: 80 }, { setNumber: 3, weight: 100 }] },
      { workout: 'Face Pulls', img: 'face_pulls.png', tool: 'cable', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Cable Rows', img: 'cable_rows.png', tool: 'cable', presets: [{ setNumber: 1, weight: 50 }, { setNumber: 2, weight: 60 }, { setNumber: 3, weight: 70 }] },
      { workout: 'Hyperextensions', img: 'hyperextensions.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Single-Arm Dumbbell Rows', img: 'single_arm_dumbbell_rows.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Inverted Rows', img: 'inverted_rows.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Reverse Flyes', img: 'reverse_flyes.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Chin-Ups', img: 'chin_ups.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Wide-Grip Pulldowns', img: 'wide_grip_pulldowns.png', tool: 'machine', presets: [{ setNumber: 1, weight: 55 }, { setNumber: 2, weight: 65 }, { setNumber: 3, weight: 75 }] },
      { workout: 'Kettlebell Renegade Rows', img: 'kettlebell_renegade_rows.png', tool: 'kettlebell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Standing Barbell Rows', img: 'standing_barbell_rows.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 70 }, { setNumber: 2, weight: 90 }, { setNumber: 3, weight: 110 }] },
      { workout: 'Barbell Shrugs', img: 'barbell_shrugs.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 80 }, { setNumber: 2, weight: 100 }, { setNumber: 3, weight: 120 }] },
      { workout: 'Cable Pullovers', img: 'cable_pullovers.png', tool: 'cable', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Dumbbell Pullovers', img: 'dumbbell_pullovers.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 35 }, { setNumber: 2, weight: 45 }, { setNumber: 3, weight: 55 }] },
      { workout: 'Seal Rows', img: 'seal_rows.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 60 }, { setNumber: 2, weight: 80 }, { setNumber: 3, weight: 95 }] },
    ],
  },
  {
    label: 'Arms',
     workouts: [
      { workout: 'Bicep Curls', img: 'bicep_curls.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Tricep Dips', img: 'tricep_dips.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Hammer Curls', img: 'hammer_curls.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Tricep Pushdowns', img: 'tricep_pushdowns.png', tool: 'cable', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Barbell Curls', img: 'barbell_curls.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Skull Crushers', img: 'skull_crushers.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 40 }] },
      { workout: 'Concentration Curls', img: 'concentration_curls.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Overhead Tricep Extensions', img: 'overhead_tricep_extensions.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 35 }] },
      { workout: 'Preacher Curls', img: 'preacher_curls.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 35 }, { setNumber: 3, weight: 45 }] },
      { workout: 'Cable Bicep Curls', img: 'cable_bicep_curls.png', tool: 'cable', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 40 }] },
      { workout: 'Tricep Kickbacks', img: 'tricep_kickbacks.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Cable Rope Overhead Tricep Extension', img: 'cable_rope_overhead_tricep_extension.png', tool: 'cable', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 35 }, { setNumber: 3, weight: 45 }] },
      { workout: 'Incline Dumbbell Curls', img: 'incline_dumbbell_curls.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Cable Hammer Curls', img: 'cable_hammer_curls.png', tool: 'cable', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 35 }, { setNumber: 3, weight: 45 }] },
      { workout: 'Tricep Bench Dips', img: 'tricep_bench_dips.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Zottman Curls', img: 'zottman_curls.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Reverse Curls', img: 'reverse_curls.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 40 }] },
      { workout: 'Dumbbell Kickbacks', img: 'dumbbell_kickbacks.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Cable Tricep Pushdowns', img: 'cable_tricep_pushdowns.png', tool: 'cable', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Standing Dumbbell Curls', img: 'standing_dumbbell_curls.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
    ],
  },
  {
    label: 'Chest',
    workouts: [
      { workout: 'Bench Press', img: 'bench_press.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 80 }, { setNumber: 2, weight: 100 }, { setNumber: 3, weight: 120 }] },
      { workout: 'Incline Bench Press', img: 'incline_bench_press.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 70 }, { setNumber: 2, weight: 90 }, { setNumber: 3, weight: 110 }] },
      { workout: 'Decline Bench Press', img: 'decline_bench_press.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 75 }, { setNumber: 2, weight: 95 }, { setNumber: 3, weight: 115 }] },
      { workout: 'Dumbbell Bench Press', img: 'dumbbell_bench_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Incline Dumbbell Press', img: 'incline_dumbbell_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 35 }, { setNumber: 2, weight: 45 }, { setNumber: 3, weight: 55 }] },
      { workout: 'Decline Dumbbell Press', img: 'decline_dumbbell_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Chest Flyes', img: 'chest_flyes.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Incline Chest Flyes', img: 'incline_chest_flyes.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Cable Crossovers', img: 'cable_crossovers.png', tool: 'cable', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Pec Deck Machine', img: 'pec_deck_machine.png', tool: 'machine', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Standing Cable Chest Press', img: 'standing_cable_chest_press.png', tool: 'cable', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 35 }, { setNumber: 3, weight: 45 }] },
      { workout: 'Dips (Chest Focused)', img: 'dips_chest_focused.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Machine Chest Press', img: 'machine_chest_press.png', tool: 'machine', presets: [{ setNumber: 1, weight: 50 }, { setNumber: 2, weight: 65 }, { setNumber: 3, weight: 80 }] },
      { workout: 'Single-Arm Cable Chest Press', img: 'single_arm_cable_chest_press.png', tool: 'cable', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Flat Bench Dumbbell Flyes', img: 'flat_bench_dumbbell_flyes.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 35 }, { setNumber: 3, weight: 45 }] },
      { workout: 'Incline Bench Dumbbell Flyes', img: 'incline_bench_dumbbell_flyes.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 40 }] },
      { workout: 'Machine Flyes', img: 'machine_flyes.png', tool: 'machine', presets: [{ setNumber: 1, weight: 35 }, { setNumber: 2, weight: 45 }, { setNumber: 3, weight: 55 }] },
      { workout: 'Svend Press', img: 'svend_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 35 }, { setNumber: 3, weight: 45 }] },
      { workout: 'Cable Pec Deck', img: 'cable_pec_deck.png', tool: 'cable', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Standing Single-Arm Cable Flyes', img: 'standing_single_arm_cable_flyes.png', tool: 'cable', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Decline Machine Chest Press', img: 'decline_machine_chest_press.png', tool: 'machine', presets: [{ setNumber: 1, weight: 45 }, { setNumber: 2, weight: 55 }, { setNumber: 3, weight: 65 }] },
    ],
  },
  {
    label: 'ABS',
    workouts: [
      { workout: 'Crunches', img: 'crunches.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Leg Raises', img: 'leg_raises.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Planks', img: 'planks.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Bicycle Crunches', img: 'bicycle_crunches.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Russian Twists', img: 'russian_twists.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 20 }] },
      { workout: 'Hanging Leg Raises', img: 'hanging_leg_raises.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Ab Rollouts', img: 'ab_rollouts.png', tool: 'wheel', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Toe Touches', img: 'toe_touches.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Flutter Kicks', img: 'flutter_kicks.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Mountain Climbers', img: 'mountain_climbers.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Cable Woodchoppers', img: 'cable_woodchoppers.png', tool: 'cable', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Reverse Crunches', img: 'reverse_crunches.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'V-Ups', img: 'v_ups.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Cable Crunches', img: 'cable_crunches.png', tool: 'cable', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 35 }, { setNumber: 3, weight: 45 }] },
      { workout: 'Hanging Knee Raises', img: 'hanging_knee_raises.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Side Planks', img: 'side_planks.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Scissor Kicks', img: 'scissor_kicks.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Cable Side Crunches', img: 'cable_side_crunches.png', tool: 'cable', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 40 }] },
      { workout: 'Medicine Ball Slams', img: 'medicine_ball_slams.png', tool: 'medicine ball', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 20 }] },
      { workout: 'Ab Wheel Rollouts', img: 'ab_wheel_rollouts.png', tool: 'wheel', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Toe Touch Crunches', img: 'toe_touch_crunches.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Seated Leg Tucks', img: 'seated_leg_tucks.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Plank with Arm Lift', img: 'plank_with_arm_lift.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
      { workout: 'Toe Taps', img: 'toe_taps.png', tool: 'bodyweight', presets: [{ setNumber: 1, weight: 0 }, { setNumber: 2, weight: 0 }, { setNumber: 3, weight: 0 }] },
    ],
  },
  {
    label: 'Shoulders & Delts',
    workouts: [
      { workout: 'Overhead Shoulder Press', img: 'overhead_shoulder_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Lateral Raises', img: 'lateral_raises.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 12 }, { setNumber: 3, weight: 15 }] },
      { workout: 'Front Raises', img: 'front_raises.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 12 }, { setNumber: 3, weight: 15 }] },
      { workout: 'Rear Delt Flyes', img: 'rear_delt_flyes.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 12 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 18 }] },
      { workout: 'Arnold Press', img: 'arnold_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Upright Rows', img: 'upright_rows.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 30 }, { setNumber: 2, weight: 40 }, { setNumber: 3, weight: 50 }] },
      { workout: 'Dumbbell Shoulder Shrugs', img: 'dumbbell_shoulder_shrugs.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 25 }, { setNumber: 2, weight: 30 }, { setNumber: 3, weight: 35 }] },
      { workout: 'Cable Lateral Raises', img: 'cable_lateral_raises.png', tool: 'cable', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 20 }] },
      { workout: 'Face Pulls', img: 'face_pulls.png', tool: 'cable', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Seated Dumbbell Press', img: 'seated_dumbbell_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Cable Front Raises', img: 'cable_front_raises.png', tool: 'cable', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 20 }] },
      { workout: 'Barbell Shoulder Press', img: 'barbell_shoulder_press.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Dumbbell Upright Rows', img: 'dumbbell_upright_rows.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Cable Rear Delt Flyes', img: 'cable_rear_delt_flyes.png', tool: 'cable', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 20 }] },
      { workout: 'Machine Shoulder Press', img: 'machine_shoulder_press.png', tool: 'machine', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Single Arm Cable Lateral Raises', img: 'single_arm_cable_lateral_raises.png', tool: 'cable', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 20 }] },
      { workout: 'Dumbbell Front Raises', img: 'dumbbell_front_raises.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 12 }, { setNumber: 3, weight: 15 }] },
      { workout: 'Barbell Shrugs', img: 'barbell_shrugs.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Machine Lateral Raises', img: 'machine_lateral_raises.png', tool: 'machine', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Dumbbell Arnold Press', img: 'dumbbell_arnold_press.png', tool: 'dumbbell', presets: [{ setNumber: 1, weight: 15 }, { setNumber: 2, weight: 20 }, { setNumber: 3, weight: 25 }] },
      { workout: 'Cable Shoulder Press', img: 'cable_shoulder_press.png', tool: 'cable', presets: [{ setNumber: 1, weight: 20 }, { setNumber: 2, weight: 25 }, { setNumber: 3, weight: 30 }] },
      { workout: 'Standing Military Press', img: 'standing_military_press.png', tool: 'barbell', presets: [{ setNumber: 1, weight: 40 }, { setNumber: 2, weight: 50 }, { setNumber: 3, weight: 60 }] },
      { workout: 'Cable Front Raises with Rope', img: 'cable_front_raises_with_rope.png', tool: 'cable', presets: [{ setNumber: 1, weight: 10 }, { setNumber: 2, weight: 15 }, { setNumber: 3, weight: 20 }] },
    ],
  },
]


export default Page;