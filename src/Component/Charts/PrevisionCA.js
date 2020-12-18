import React, { useContext, useState } from "react";
import { Line } from "react-chartjs-2";
import { CultContext } from "../../Context/CultContext";
import moment from "moment";

export default function PrevisionCA() {
  const [cult, setCult] = useContext(CultContext);
  const year = "2020";

  const Format = cult.map(cur => {
    const time = moment(cur.start).add(cur.growLength, "week");
    const format = moment(time).format("YYYY-MM-DD");
    console.log(format);
    const data = {
      date: format,
      value: cur.quantity * cur.price,
    };
    return data;
  });
  console.log(Format);
  const output = Format.reduce((acc, cur) => {
    if (!acc[cur.date]) acc[cur.date] = { t: cur.date, y: cur.value };
    else acc[cur.date].y += cur.value;
    return acc;
  }, {});
console.log(output);
  const newData = {
    label: Object.keys(output),
    data: Object.values(output),
  };
  console.log(newData);
  const data = {
    labels: newData.label.sort(),
    datasets: [
      {
        label: "Evolution du chiffre d'affaire par récolte",
        data: newData.data.sort(function(a,b) {
          return new Date(a.t).getTime() - new Date(b.t).getTime()
        }),
        fill: true,
        backgroundColor: "rgba(68, 154, 51, 0.7)",
        borderColor: "#0C4F1C",
      },
    ],
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
          },
        ],
      },
    },
  };

  return <Line data={data} />;
}
