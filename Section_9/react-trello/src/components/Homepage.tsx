import React, {useState} from 'react'
import Item from './Item';
import DropWrapper from './DropWrapper';
import Col from './Col';
import {Task, statuses, data} from './data/types';
import {DropTargetMonitor} from 'react-dnd';

const Homepage = () => {
  const [items, setItems] = useState<Task[]>(data);

  const onDrop = (item: Task, monitor: DropTargetMonitor, status: string) => {
    const mapping = statuses.find((si) => si.status === status);

    if(mapping) {
      setItems((prevState) => {
        const newItems = prevState.filter((i) => i.id !== item.id).concat({...items, status, icon: mapping.icon});
        return [...newItems];
      })
    }
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, items[dragIndex]);
      return [...newItems];
    })
  }

  return (
    <div className={"row"}>
      {statuses.map((s) => {
        return <div key={s.status} className={"col-wrapper"}>
          <h2 className={"col-wrapper"}>{s.status.toUpperCase()}</h2>
          <DropWrapper onDrop={onDrop} status={s.status}>
            <Col>
              {items.filter((i) => i.status === s.status).map((i, idx) => (
                <Item
                  key={i.id}
                  item={i}
                  index={idx}
                  moveItem={moveItem}
                  status={s}
                />
              ))} 
            </Col>
          </DropWrapper>
        </div>
      })}
    </div>
  )
}

export default Homepage
