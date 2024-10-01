import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-rail': {
            backgroundColor: '#ccc',
          },
          '& .MuiSlider-thumb': {
            color: '#ccff00',
          },
          '.MuiSlider-track': {
            color: '#ccff00',
          },
        },
      },
    },
  },
});

interface BasicLineChartProps {
  uData: number[];
  xLabels: string[];
}

const BasicLineChart: React.FC<BasicLineChartProps> = ({ uData, xLabels }) => {
  const [value, setValue] = React.useState<number[]>([
    Math.max(0, xLabels.length - 5),
    xLabels.length - 1,
  ]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const min = Math.max(0, newValue[0]);
    const max = Math.min(xLabels.length - 1, newValue[1]);
    setValue([min, max]);
  };

  const valueLabelFormat = (index: number) => {
    return xLabels[index];
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <LineChart
          width={500}
          height={300}
          series={[
            {
              data: uData.slice(value[0], value[1] + 1),
              color: '#ccff00',
            },
          ]}
          xAxis={[
            {
              scaleType: 'point',
              data: xLabels.slice(value[0], value[1] + 1),
            },
          ]}
        />
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          valueLabelFormat={valueLabelFormat}
          min={0}
          max={xLabels.length - 1}
        />
      </Box>
    </ThemeProvider>
  );
};

export default BasicLineChart;
