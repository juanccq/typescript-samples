import React, {ReactElement} from 'react'
import {useDrop, DropTargetMonitor} from 'react-dnd';
import {Task, statuses} from './data/types';

interface DropWrapperProps {
  onDrop: (item: Task, monitor: DropTargetMonitor, status: string) => void;
  children: ReactElement<{isOver: boolean}>;
  status: string;
}

const DropWrapper = ({onDrop, children, status}: DropWrapperProps) => {
  const [{isOver}, drop] = useDrop({
    accept: "DnD",
    canDrop: (item: Task) => {
      const itemIndex = statuses.findIndex((si) => si.status === item.status);
      const statusIndex = statuses.findIndex((si) => si.status === status);
      return [itemIndex +1, itemIndex -1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  return (
    <div ref={drop} className={"drop-wrapper"}>
      {React.cloneElement(children, {isOver})}
    </div>
  )
}

export default DropWrapper
