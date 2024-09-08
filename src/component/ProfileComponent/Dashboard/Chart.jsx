import { DonutChart } from "@mantine/charts";

export const Chart = ({chartData}) => {
  const complete= chartData

  const free = 100- chartData
  return (
    <DonutChart
      data={[
        { name: "درصد تکمیل فرم", value:complete , color: "blue" },
        { name: "", value:free , color: "gray.6" },
      ]}
    />
  );
};
