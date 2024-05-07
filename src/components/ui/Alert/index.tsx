import { X } from "lucide-react";
import { ReactNode } from "react";
import "./styles.scss";
import { AlertTypes } from "../../../types";

interface AlertProps {
  classNameType?: AlertTypes;
  title: string;
  description?: string;
  icon: ReactNode;
  children?: ReactNode;
}

const Alert = (props: AlertProps) => {
  const { classNameType = "info-alert", title, description, icon, children } = props;
  console.log(props);
  return (
    <div className={classNameType}>
      <div className="alert-header">
        <p className="alert-title">
          {icon} {title}
        </p>
        <X size={14} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
