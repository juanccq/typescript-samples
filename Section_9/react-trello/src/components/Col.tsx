import React, {ReactNode} from 'react';

interface ColProps {
  isOver?: boolean;
  children: ReactNode;
}

const Col = ({isOver, children}: ColProps) => {
  const className = isOver? "highlight-region" : "";

  return (
    <div className={`col${className}`}>
      {children}
    </div>
  )
}

export default Col
