import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const sx = {
  color: "#0C6DFD",
  "& .MuiSlider-valueLabelLabel": {
    fontSize: "1.6rem",
    color: "black",
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "transparent",
  },
};

type PropsRange = {
  min: number;
  max: number;
  value: number[];
  handleChange: any;
};

export default function RangeSlider({
  min,
  max,
  value,
  handleChange,
}: PropsRange): JSX.Element {
  const marks = [
    {
      value: min,
      label: `${min} $`,
    },
    {
      value: max,
      label: `${max} $`,
    },
  ];

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        sx={sx}
        min={min}
        max={max}
        marks={marks}
        value={value}
        step={100}
        onChange={handleChange}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
