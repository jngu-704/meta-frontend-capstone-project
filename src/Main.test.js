import { updateTimes, initializeTimes } from "./Main";
import { fetchAPI } from "./api";

test("updateTimes function", () => {
  expect(
    updateTimes([], {
      date: "Tue Jan 31 2023 20:28:49 GMT+1100 (Australian Eastern Daylight Time)",
    })
  ).toStrictEqual([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "21:00",
    "21:30",
    "22:00",
    "23:00",
  ]);
});

test("initializeTimes function", () => {
  expect(initializeTimes()).toStrictEqual(fetchAPI(new Date()));
});
