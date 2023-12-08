import React, { useEffect, useRef, useState } from "react";
import styles from './Clock.module.css'

function Clock({ data }) {
  const [time, setTime] = useState();
  console.log(data.length)
  const countryData = data.split("/");
  const timeFetched = useRef();
  console.log(countryData);

  useEffect(() => {
    if (data!='') {
      fetchTime();
      console.log("time", time);
      timeFetched.current = setInterval(ticktock, 1000, time);
    }

    return () => clearInterval(timeFetched.current);
  }, [data]);

  const fetchTime = () => {
    fetch(
      `http://worldtimeapi.org/api/timezone/${countryData[0]}/${
        countryData[1]
      }/${countryData[2] ?? ""}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.datetime, "data");
        const date = new Date(data.datetime);
        console.log(date);
        setTime(date);
      });
  };

  function ticktock(time) {
    //--------------------
    // if (time != "") {
    //   const milliseconds = time.getTime() + 1000;
    //   //
    //   const changedDate = new Date();
    //   changedDate.setTime(milliseconds);
    //   console.log(changedDate);
    //   setTime(changedDate);
    // } else {
    // }
    //--------------------

    // const intervalTime= setInterval(() => {
    const milliseconds = +new Date(time);
    console.log(milliseconds);
    const addByOne = milliseconds + 1000;
    console.log(addByOne);
    const utcDate = new Date(addByOne).toISOString();
    console.log("utcdate", utcDate);
    var date = new Date(utcDate);
    var offset = date.getTimezoneOffset();
    var localDate = new Date(date.getTime() - offset * 60000);
    // console.log("utcdate to ISO String", utcDate.toString());

    // const localDate = new Date(
    //   utcDate.getTime() - utcDate.getTimezoneOffset() * 60000
    // );
    // console.log("localDate", localDate)
    setTime(localDate);
    console.log("localDate", localDate);
    // }, 1000);
    // return intervalTime
    //----------------------
  }

  // }, [data]);
  // console.log(typeof(time))
  // console.log(time)
  function modifyTime() {
    if (timeFetched.current) {
      setTime(time);
      clearInterval(timeFetched.current);
      timeFetched.current = null;
    } else {
      timeFetched.current = setInterval(ticktock, 1000, time);
    }
  }

  return (
    <>
      {/* <div>{time.substr(time.indexOf("T") + 1, 8)}</div> */}
      {time != null ? (
        <span className={styles.clock}>
          {time?.getHours()}:{time?.getMinutes()}:{time?.getSeconds()}
        </span>
      ) : (
        <span className={styles.clock}>00:00:00</span>
      )}
      <button
        className={styles.btn}
        onClick={modifyTime}
      >
        Pause/Start
      </button>
    </>
  );
}

export default Clock;
