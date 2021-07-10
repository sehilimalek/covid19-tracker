import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { options, buildChartData, casesTypesColors } from "./util";
import api from "./api";

const LineGraph = ({ casesType, ...props }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fectchData = async () => {
      await api.get("historical/all?lastdays=120").then((res) => {
        const data = res.data;
        const chartData = buildChartData(data);
        setData(chartData);
      });
    };
    fectchData();
  }, [casesType]);

  return (
    <div className={props.className}>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                label: casesType,
                fill: true,
                backgroundColor: `${casesTypesColors[casesType].halfOp}`,
                borderColor: `${casesTypesColors[casesType].hex}`,
                data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
