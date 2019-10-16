import React, { useState } from "react";
import styled from "styled-components";

const CalCell = props => {
  const [todos, setTodo] = useState({ todoNum: 0 });

  const handleClick = e => {
    console.log("click");
    console.log(e.target);
    setTodo(prevState => {
      return {
        todoNum: ++prevState.todoNum
      };
    });
  };

  const getTodos = () => {
    console.log(`todos: ${todos.todoNum}`);
    let todoTag = [];
    for (let i = 0; i < todos.todoNum; i++) {
      todoTag.push(<TodoTag key={i}>(제목없음)</TodoTag>);
    }
    return todoTag;
  };

  return (
    <Cell
      isSelected={props.isSelected}
      weekLength={props.weekLength}
      index={props.index}
      isEndWeek={props.isEndWeek}
      onClick={handleClick}
    >
      <CellSpan isToday={props.isToday}>{props.day}</CellSpan>
      {getTodos()}
    </Cell>
  );
};

const Cell = styled.div.attrs(
  ({ isSelected, weekLength, index, isEndWeek }) => ({
    style: {
      color: isSelected ? `#333333` : `#cccccc`,
      height: weekLength > 4 ? `14.2vh` : `17vh`,
      borderBottom: isEndWeek ? `0` : `1px solid #cccccc`,
      borderRight: index === 6 ? `0` : `1px solid #cccccc`
    }
  })
)`
  text-align: center;
  padding-top: 2px;
  width: ${100 / 7}%;
`;

const CellSpan = styled.span.attrs(({ isToday }) => ({
  style: {
    borderRadius: isToday ? `50%` : `0`,
    color: isToday ? `white` : `0`,
    backgroundColor: isToday ? `#7D4CDB` : `0`
  }
}))``;

const TodoTag = styled.div`
  font-size: 0.8rem;
  background-color: #7d4cdb;
  text-align: left;
  padding-left: 3px;
  color: #333333;
  width: ${300}%;
`;

export default CalCell;
