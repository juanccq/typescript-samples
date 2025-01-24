import React, {useState, useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd';
import Window from './Window';
import {Status, Task} from './data/types';

interface ItemProps {
  item: Task;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  status: Status;
}

const Item = ({item, index, moveItem, status}: ItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "DnD",
    hover(item: Task, monitor) {
      if( !ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if(dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();

      if(mousePosition === null) return;

      const hoverClientY = mousePosition.y - hoveredRect.top;

      if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const  [{isDragging}, drag] = useDrag({
    type: "DnD",
    item: {type: "DnD", ...item, index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  drag(drop(ref))


  return (
    <>
      <div ref={ref}
        style={{opacity: isDragging ? 0 : 1}}
        className={"item"}
        onClick ={onOpen}
        >

          <div className={"color-bar"} style={{backgroundColor: status.color}}></div>
            <p className={"item-title"}>{item.content}</p>
            <p className={"item-status"}>{item.icon}</p>
          
      </div>
      <Window item={item} onClose={onClose} show={show} />

        
    </>
  )
}

export default Item
