import { ReactNode } from "react";

interface AlterInterface {
  children: ReactNode;
}

function Alert({children}: AlterInterface) {
  return <div className="alert alert-danger">{children}</div>
}

export default Alert;