import { Select } from "antd";

const { Option } = Select;

interface GuardianSelect {
  placeholder: string;
  handleChange: () => void;
  children: string;
  className: string;
}

const Index = ({
  placeholder,
  handleChange,
  children,
  className,
}: GuardianSelect) => {
  return (
    <>
      <Select
        labelInValue
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
      >
        {children}
      </Select>
    </>
  );
};

export default Index;
