import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

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

const marks = [
  {
    value: 2000,
    label: "2000 $",
  },
  {
    value: 6000,
    label: "6000 $",
  },
];

export default function RangeSlider(): JSX.Element {
  const [value, setValue] = useState<number[]>([2000, 6000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        sx={sx}
        max={6000}
        min={2000}
        marks={marks}
        value={value}
        step={100}
        onChange={handleChange}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
