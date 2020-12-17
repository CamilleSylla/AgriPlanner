import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import React, { useContext, useState } from "react";
import { CultContext } from "../../Context/CultContext";

export default function Calendar() {
  const [cult, setCult] = useContext(CultContext);

  const Parcelle = cult.map((items, i) => {
    const groups = {
      id: items._id,
      title: items.parcelle,
    };
    return groups;
  });

  const Legume = cult.map((leg, i) => {
    const legume = {
      id: leg._id,
      title: leg.legume,
    };
    return legume;
  });

  const [selection, setSelection] = useState({
    groups: Parcelle,
  });

  const items = cult.map((item, i) => {
    const dateString = item.start;
    const items = {
      id: item._id,
      group: item._id,
      title: item.legume + " " + item.variete,
      start_time: Date.parse(dateString),
      end_time: moment(dateString).add(item.growLength, "week"),
      itemProps: {
        className: "weekend",
        style: {
          background: item.color,
          color: "black",
          fontWeight: "bold",
          borderColor: "grey"
        },
      },
    };
    return items;
  });

  return (
    <div>
      <button value="0" >
        Parcelle
      </button>
      <button value="1" >
        Legume
      </button>
      <Timeline
        groups={selection.groups}
        items={items}
        defaultTimeStart={moment()}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
}
