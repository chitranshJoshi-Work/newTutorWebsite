updateDateSortedList(
  upcomingArray &&
    upcomingArray.reduce((temp, data) => {
      if (
        !temp[
          new Date(data && data.scheduleTime).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
          })
        ]
      ) {
        temp[
          new Date(data && data.scheduleTime).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
          })
        ] = [];
      }
      temp[
        new Date(data && data.scheduleTime).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
        })
      ].push(data);
      return temp;
    }, {})
);
export default updateDateSortedList;
