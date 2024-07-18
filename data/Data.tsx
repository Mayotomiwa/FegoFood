import { restaurant } from "@/assets/data/restaurant";

const DATA = restaurant.food.map((item, index) => ({
  title: item.category,
  data: item.meals,
  key: `${index}`,
}));
export default DATA;
