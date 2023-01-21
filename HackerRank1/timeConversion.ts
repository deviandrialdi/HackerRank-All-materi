function timeConversion(s: string) {
  // Write your code here

  let hour: string = s.substring(0, 2);
  let min: string = s.substring(3, 5);
  let sec: string = s.substring(6, 8);
  let newResult: string = "";
  let newHour: string = hour;
  let daytime: string = s.substring(8, 10);

  if (daytime == "AM" && hour === "12") {
    newHour = "00";
  }
  if (daytime == "PM") {
    if (parseInt(hour) < 12) {
      newHour = (parseInt(hour) + 12).toString();
    }
  }
  newResult = newHour + ":" + min + ":" + sec;
  return newResult;
}
