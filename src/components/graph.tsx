import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function BasicLineChart() {
  const [value, setValue] = React.useState<number[]>([0, 5]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const min = Math.max(0, newValue[0]);
    const max = Math.min(xAxisData[0].data.length - 1, newValue[1]);
    setValue([min, max]);
  };

  const xAxisData = [{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] }];
  const seriesData = [
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5, 4.5, 7, 3, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <LineChart
          xAxis={[
            {
              label: 'Date',
              data: xAxisData[0].data.slice(value[0], value[1] + 1),
            },
          ]}
          yAxis={[
            {
              label: 'Weight (kg)',
            },
          ]}
          series={[
            {
              data: seriesData[0].data.slice(value[0], value[1] + 1),
              color: '#ccff00',
            },
          ]}
          width={500}
          height={300}
        />
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={xAxisData[0].data.length - 1}
        />
      </Box>
    </ThemeProvider>
  );
}
