const tranformTabList = (tabList) => {
  const filteredTabList = tabList?.filter(
    (item) => item?.enumKey !== "liveClassAttendance"
  );

  return filteredTabList?.map?.((item, i) => ({
    ...item,
    id: i + 1,
    label: item?.label?.toLowerCase(),
  }));
};

export default tranformTabList;
