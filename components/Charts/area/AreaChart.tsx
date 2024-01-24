import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "June 23, 2022",
    "My GPA": 3.5,
    "Average GPA": 2.8,
  },
  {
    date: "June 23, 2023",
    "My GPA": 3.4,
    "Average GPA": 2.56,
  },
  {
    date: "June 23, 2024",
    "My GPA": 4.0,
    "Average GPA": 3.3,
  },
  {
    date: "June 23, 2025",
    "My GPA": 3.3,
    "Average GPA": 2.89,
  }
];

const valueFormatter = function (number: number) {
  return new Intl.NumberFormat("us").format(number).toString();
};

const Area = () => (
  <Card>
    <Title>My GPA vs The Average GPA At My High School</Title>
    <AreaChart
      className="mt-4 h-72"
      data={chartdata}
      index="date"
      categories={["My GPA", "Average GPA"]}
      colors={["red", "blue"]}
      valueFormatter={valueFormatter}
    />
  </Card>
);
export default Area;
