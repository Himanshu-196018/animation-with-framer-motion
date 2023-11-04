import { useState } from "react";
import { Reorder } from "framer-motion";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const Item = ({ item }) => {
  return (
    <Reorder.Item value={item} id={item}>
      <span>{item}</span>
    </Reorder.Item>
  );
};

const ReorderTabs = () => {
  const [items, setItems] = useState(initialItems);
  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
};

export default ReorderTabs;
