interface MealCard {
  _id: string;
  src: string;
  title: string;
  isAdded?: boolean;
  fats?: string;
  protein?: string;
  carbs?: string;
  calories?: string;
}

const mealCardsArray: MealCard[] = [
  {_id: "1", src: "https://via.placeholder.com/276x177", title: "Margherita Pizza", isAdded: false, fats: "10g", protein: "12g", carbs: "30g", calories: "270cal"},
  {_id: "2", src: "https://via.placeholder.com/276x177", title: "Cheeseburger", isAdded: false, fats: "20g", protein: "26g", carbs: "34g", calories: "400cal"},
  {_id: "3", src: "https://via.placeholder.com/276x177", title: "Spaghetti Carbonara", isAdded: false, fats: "15g", protein: "18g", carbs: "50g", calories: "450cal"},
  {_id: "4", src: "https://via.placeholder.com/276x177", title: "Chicken Alfredo", isAdded: false, fats: "23g", protein: "28g", carbs: "40g", calories: "600cal"},
  {_id: "5", src: "https://via.placeholder.com/276x177", title: "Sushi", isAdded: false, fats: "5g", protein: "20g", carbs: "40g", calories: "300cal"},
  {_id: "6", src: "https://via.placeholder.com/276x177", title: "Tacos", isAdded: false, fats: "15g", protein: "18g", carbs: "36g", calories: "350cal"},
  {_id: "7", src: "https://via.placeholder.com/276x177", title: "Fried Rice", isAdded: false, fats: "8g", protein: "12g", carbs: "60g", calories: "450cal"},
  {_id: "8", src: "https://via.placeholder.com/276x177", title: "Caesar Salad", isAdded: false, fats: "20g", protein: "10g", carbs: "15g", calories: "250cal"},
  {_id: "9", src: "https://via.placeholder.com/276x177", title: "Beef Stroganoff", isAdded: false, fats: "25g", protein: "30g", carbs: "40g", calories: "500cal"},
  {_id: "10", src: "https://via.placeholder.com/276x177", title: "Pancakes", isAdded: false, fats: "10g", protein: "6g", carbs: "40g", calories: "320cal"},
  {_id: "11", src: "https://via.placeholder.com/276x177", title: "Fish and Chips", isAdded: false, fats: "30g", protein: "20g", carbs: "45g", calories: "600cal"},
  {_id: "12", src: "https://via.placeholder.com/276x177", title: "Lasagna", isAdded: false, fats: "18g", protein: "25g", carbs: "40g", calories: "500cal"},
  {_id: "13", src: "https://via.placeholder.com/276x177", title: "Pad Thai", isAdded: false, fats: "15g", protein: "20g", carbs: "70g", calories: "450cal"},
  {_id: "14", src: "https://via.placeholder.com/276x177", title: "Pulled Pork Sandwich", isAdded: false, fats: "25g", protein: "30g", carbs: "50g", calories: "600cal"},
  {_id: "15", src: "https://via.placeholder.com/276x177", title: "Buffalo Wings", isAdded: false, fats: "30g", protein: "25g", carbs: "10g", calories: "500cal"},
  {_id: "16", src: "https://via.placeholder.com/276x177", title: "Eggs Benedict", isAdded: false, fats: "20g", protein: "18g", carbs: "30g", calories: "400cal"},
  {_id: "17", src: "https://via.placeholder.com/276x177", title: "Chili Con Carne", isAdded: false, fats: "15g", protein: "25g", carbs: "40g", calories: "480cal"},
  {_id: "18", src: "https://via.placeholder.com/276x177", title: "Veggie Burger", isAdded: false, fats: "8g", protein: "15g", carbs: "35g", calories: "300cal"},
  {_id: "19", src: "https://via.placeholder.com/276x177", title: "Stuffed Peppers", isAdded: false, fats: "10g", protein: "20g", carbs: "25g", calories: "350cal"},
  {_id: "20", src: "https://via.placeholder.com/276x177", title: "Shrimp Tacos", isAdded: false, fats: "15g", protein: "20g", carbs: "30g", calories: "400cal"},
  {_id: "21", src: "https://via.placeholder.com/276x177", title: "Pasta Primavera", isAdded: false, fats: "8g", protein: "10g", carbs: "50g", calories: "320cal"},
  {_id: "22", src: "https://via.placeholder.com/276x177", title: "Greek Salad", isAdded: false, fats: "14g", protein: "5g", carbs: "12g", calories: "200cal"},
  {_id: "23", src: "https://via.placeholder.com/276x177", title: "Baked Ziti", isAdded: false, fats: "15g", protein: "18g", carbs: "60g", calories: "480cal"},
  {_id: "24", src: "https://via.placeholder.com/276x177", title: "Cobb Salad", isAdded: false, fats: "22g", protein: "29g", carbs: "10g", calories: "450cal"},
  {_id: "25", src: "https://via.placeholder.com/276x177", title: "Chocolate Cake", isAdded: false, fats: "15g", protein: "4g", carbs: "45g", calories: "350cal"},
  {_id: "26", src: "https://via.placeholder.com/276x177", title: "Ramen", isAdded: false, fats: "14g", protein: "24g", carbs: "55g", calories: "400cal"},
  {_id: "27", src: "https://via.placeholder.com/276x177", title: "Curry Chicken", isAdded: false, fats: "25g", protein: "28g", carbs: "35g", calories: "550cal"},
  {_id: "28", src: "https://via.placeholder.com/276x177", title: "Pesto Pasta", isAdded: false, fats: "16g", protein: "12g", carbs: "60g", calories: "450cal"},
  {_id: "29", src: "https://via.placeholder.com/276x177", title: "Pulled Pork Nachos", isAdded: false, fats: "30g", protein: "20g", carbs: "45g", calories: "600cal"},
  {_id: "30", src: "https://via.placeholder.com/276x177", title: "Quiche Lorraine", isAdded: false, fats: "22g", protein: "15g", carbs: "30g", calories: "450cal"},
  {_id: "31", src: "https://via.placeholder.com/276x177", title: "Minestrone Soup", isAdded: false, fats: "7g", protein: "12g", carbs: "30g", calories: "200cal"},
  {_id: "32", src: "https://via.placeholder.com/276x177", title: "Beef Tacos", isAdded: false, fats: "20g", protein: "25g", carbs: "34g", calories: "480cal"},
  {_id: "33", src: "https://via.placeholder.com/276x177", title: "Egg Fried Rice", isAdded: false, fats: "12g", protein: "10g", carbs: "70g", calories: "500cal"},
  {_id: "34", src: "https://via.placeholder.com/276x177", title: "Pork Chops", isAdded: false, fats: "20g", protein: "30g", carbs: "0g", calories: "400cal"},
  {_id: "35", src: "https://via.placeholder.com/276x177", title: "Seafood Paella", isAdded: false, fats: "15g", protein: "25g", carbs: "70g", calories: "600cal"},
  {_id: "36", src: "https://via.placeholder.com/276x177", title: "BBQ Ribs", isAdded: false, fats: "35g", protein: "25g", carbs: "40g", calories: "650cal"},
  {_id: "37", src: "https://via.placeholder.com/276x177", title: "Clam Chowder", isAdded: false, fats: "18g", protein: "12g", carbs: "25g", calories: "350cal"},
  {_id: "38", src: "https://via.placeholder.com/276x177", title: "Lobster Roll", isAdded: false, fats: "25g", protein: "30g", carbs: "28g", calories: "500cal"},
  {_id: "39", src: "https://via.placeholder.com/276x177", title: "Chicken Quesadilla", isAdded: false, fats: "18g", protein: "25g", carbs: "40g", calories: "500cal"},
  {_id: "40", src: "https://via.placeholder.com/276x177", title: "French Toast", isAdded: false, fats: "12g", protein: "8g", carbs: "40g", calories: "350cal"},
  {_id: "41", src: "https://via.placeholder.com/276x177", title: "Vegetable Stir-Fry", isAdded: false, fats: "8g", protein: "10g", carbs: "45g", calories: "250cal"},
  {_id: "42", src: "https://via.placeholder.com/276x177", title: "Meatloaf", isAdded: false, fats: "20g", protein: "28g", carbs: "30g", calories: "450cal"},
  {_id: "43", src: "https://via.placeholder.com/276x177", title: "Biryani", isAdded: false, fats: "15g", protein: "22g", carbs: "75g", calories: "600cal"},
  {_id: "44", src: "https://via.placeholder.com/276x177", title: "Chocolate Chip Cookies", isAdded: false, fats: "8g", protein: "2g", carbs: "20g", calories: "150cal"},
  {_id: "45", src: "https://via.placeholder.com/276x177", title: "Stuffed Shells", isAdded: false, fats: "15g", protein: "12g", carbs: "50g", calories: "400cal"},
  {_id: "46", src: "https://via.placeholder.com/276x177", title: "Apple Pie", isAdded: false, fats: "10g", protein: "1g", carbs: "30g", calories: "240cal"},
  {_id: "47", src: "https://via.placeholder.com/276x177", title: "Teriyaki Chicken", isAdded: false, fats: "12g", protein: "30g", carbs: "25g", calories: "350cal"},
  {_id: "48", src: "https://via.placeholder.com/276x177", title: "Pork Fried Rice", isAdded: false, fats: "12g", protein: "18g", carbs: "60g", calories: "450cal"},
  {_id: "49", src: "https://via.placeholder.com/276x177", title: "Churros", isAdded: false, fats: "15g", protein: "2g", carbs: "30g", calories: "250cal"},
  {_id: "50", src: "https://via.placeholder.com/276x177", title: "Margarita", isAdded: false, fats: "0g", protein: "0g", carbs: "30g", calories: "200cal"},
];

export default mealCardsArray;
