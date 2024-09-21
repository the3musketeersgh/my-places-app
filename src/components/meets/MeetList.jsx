import React from "react";
import MeetItem from "./MeetItem";
import classes from "./MeetList.module.css";
function MeetList({ meets }) {
  return (
    <ul className={classes.list}>
      {meets.map((meet) => (
        <MeetItem
          key={meet.id}
          id={meet.id}
          address={meet.address}
          description={meet.description}
          title={meet.title}
          image={meet.image}
        />
      ))}
    </ul>
  );
}

export default MeetList;
