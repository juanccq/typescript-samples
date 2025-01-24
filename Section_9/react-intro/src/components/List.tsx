import { useState } from "react";

interface PropsExample {
  items: string[];
  title: string;

  onItemSelected: (item: string) => void;
}

function List({items, title, onItemSelected}: PropsExample) {
  const [activeIdx] = useState(-1);

  return (
    <>
    <h1>{title}</h1>
    <ol className="list-group"> 
      {items.map((item, index) => <li className={activeIdx === index ? "list-group-item active":"list-group-item"} 
      key={item} 
      onClick={() => onItemSelected(item)}>{item}</li>)}
    </ol>
    </>
  )
}

export default List;