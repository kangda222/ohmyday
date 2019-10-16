import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Box, Calendar as SmallCal } from "grommet";
import { FormPrevious, FormNext } from "grommet-icons";
import moment from "moment";
import CalCell from "../Cell";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const prevCalendar = () => {
    setCurrentDate(currentDate.clone().subtract(1, "months"));
  };

  const nextCalendar = () => {
    setCurrentDate(currentDate.clone().add(1, "months"));
  };

  const createCalendar = () => {
    const today = moment();
    const startWeek = currentDate
      .clone()
      .startOf("month")
      .week();
    const endWeek =
      currentDate
        .clone()
        .endOf("month")
        .week() === 1
        ? 53
        : currentDate
            .clone()
            .endOf("month")
            .week();
    const weekLength = endWeek - startWeek;
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <Body key={week}>
          {Array(7)
            .fill(0)
            .map((value, i) => {
              let current = currentDate
                .clone()
                .week(week)
                .startOf("week")
                .add(value + i, "day");

              return (
                <CalCell
                  isSelected={current.format("MM") === currentDate.format("MM")}
                  day={current.format("D")}
                  isToday={
                    today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  }
                  weekLength={weekLength}
                  index={i}
                  isEndWeek={week === endWeek}
                  key={current.format("MMDD")}
                />
              );
            })}
        </Body>
      );
    }
    return calendar;
  };

  return (
    <Grid
      rows={["92vh"]}
      columns={["small", "auto"]}
      areas={[
        { name: "menu", start: [0, 0], end: [0, 0] },
        { name: "calendar", start: [1, 0], end: [1, 0] }
      ]}
    >
      <Box gridArea="menu" background="light-1">
        <SmallCal
          size="small"
          date={new Date().toISOString()}
          daysOfWeek={true}
          locale={"kor"}
        />
      </Box>
      <Box gridArea="calendar" background="white">
        <Head>
          <FormPrevious onClick={prevCalendar} />
          <Main>{currentDate.format("YYYY MM")}</Main>
          <FormNext onClick={nextCalendar} />
        </Head>
        <div>
          <DayHead>
            <Cell>일</Cell>
            <Cell>월</Cell>
            <Cell>화</Cell>
            <Cell>수</Cell>
            <Cell>목</Cell>
            <Cell>금</Cell>
            <Cell>토</Cell>
          </DayHead>
          <div>{createCalendar()}</div>
        </div>
      </Box>
    </Grid>
  );
};

const Head = styled.div`
  display: flex;
  justify-content: row;
  width: 100%;
`;

const DayHead = styled(Head)`
  border-bottom: 1px solid #cccccc;
`;

const Body = styled.div`
  display: flex;
  justify-content: row;
  width: 100%;
`;

const Main = styled.div``;

const Cell = styled.div`
  text-align: center;
  width: ${100 / 7}%;
`;

export default Calendar;
