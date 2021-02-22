/** @format */

export const tempData = (dataNum: number) => {
  const dataList = new Array(dataNum);
  let beforeData = 0;
  for (let index = 0; index < dataNum; index++) {
    if (index === 0) {
      dataList[index] = 0;
      continue;
    }
    beforeData = Math.random() * 0.5 + beforeData;
    dataList[index] = beforeData;
  }
  return dataList;
};
