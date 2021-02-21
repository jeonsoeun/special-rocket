/** @format */

export const tempData = (dataNum: number) => {
  const dataList = new Array(dataNum);
  let beforeData = 0;
  dataList.map((value, index) => {
    if (index === 0) {
      return 0;
    }
    beforeData += Math.random() * 0.5 + 0.1;
    return beforeData;
  });
  return dataList;
};
