import { Category } from "./Category";

export interface RenderItemProps {
  item: Category;
  index: number;
  items: Category[];
  setItems: React.Dispatch<React.SetStateAction<Category[]>>;
}