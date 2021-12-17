import styled, { css } from "styled-components";

const getSize = ({ type }) => {
  console.log(type);
  switch (type) {
    case "large":
      return { size: "200px", color: "blue" };
    case "medium":
      return { size: "150px", color: "red" };
    case "small":
      return { size: "100px", color: "green" };
    default:
      return { size: "150px", color: "red" };
  }
};

export const Box = styled.div`
  width: ${(props) => getSize(props).size};
  height: ${(props) => getSize(props).size};
  background-color: ${(props) => getSize(props).color};
  margin: 10px;
`;

export const Table = styled.table`
  background-color: #ffffff;
  font-size: 16px;
  border-collapse: collapse;
  /* display: none; */
`;

const common = css`
  /* border: 1px solid black;  */
`;

Table.Body = styled.tbody`
  overflow: scroll;
  /* height: 200px; */
`;
Table.Head = styled.thead``;
Table.Tr = styled.tr``;
Table.Th = styled.th`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: hsl(20, 50%, 70%);
`;

Table.Td = styled.td`
  border: 1px solid;
  padding: 10px;
  min-width: 150px;
  background: white;
  box-sizing: border-box;
  text-align: left;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 2px;
`;
export const Button = styled.button`
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  padding: 8px .8em;
  text-align: center;
`;
