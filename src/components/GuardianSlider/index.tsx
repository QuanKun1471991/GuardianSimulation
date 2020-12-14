import { Slider } from "antd";

const Index = ({ className, max, defaultValue, step, marks, tipFormatter }) => {
  return (
    <>
      <Slider
        marks={marks}
        step={step}
        defaultValue={defaultValue}
        max={max}
        className={className}
        // tooltipVisible={tooltipVisible}
        tipFormatter={tipFormatter}
      />
    </>
  );
};

export default Index;
