import { classNames } from "@/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames("mx-auto max-w-[120rem] px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
