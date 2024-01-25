import { BarChart, Card, Subtitle, Title } from "@tremor/react";

const chartdata = [
  {
    name: "My SAT Score",
    "AP Exam Score": 1560,
  },
  {
    name: "Average SAT Score",
    "AP Exam Score": 1320,
  }
];

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

const SimpleBar2 = () => (
  <Card>
    <Title>SAT Scores</Title>
    <Subtitle>
      Here is a comparison of my SAT score to the average SAT score at my high school.
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["AP Exam Score"]}
      colors={["pink"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
      minValue={0}  // Set the minimum value for the y-axis
      maxValue={1600}  // Set the maximum value for the y-axis
    />
  </Card>
);

export default SimpleBar2;
