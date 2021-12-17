import React from "react";
import { Box, Table, Input, Button } from "./appStyle";
import { data } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: "",
      id: null,
      data: data,
      infoSearch: "",
      info: [],
      g: "name",
    };
  }

  render() {
    const onDelete = (e) => {
      this.setState({
        data: this.state.data.filter((value) => value.id !== e),
      });
    };

    const onAdd = () => {
      const nd = {
        id: this.state.data.length + 1,
        name: this.state.name,
        status: this.state.status,
      };

      this.setState({
        data: [...this.state.data, nd],
      });
    };

    const onchange = (e) => {
      this.setState({ name: e.target.value });
    };
    const onchange1 = (e) => {
      this.setState({ status: e.target.value });
    };

    const inputSearch = (e) => {
      this.setState({ infoSearch: e.target.value });
    };

    const mainInputChange = (e) => {
      e.target.value === "name" &&
        this.setState({
          g: "name",
        });
      e.target.value === "status" &&
        this.setState({
          g: "status",
        });
    };
    return (
      <div className="container">
        <div>
          <select className="selectBlock" onChange={mainInputChange}>
            <option value="name" className="miniOptions" data-attribute="b">
              NAME
            </option>
            <option value="status" className="miniOptions" data-attribute="c">
              STATUS
            </option>
          </select>
          <Input
            type="text"
            className="searchInput"
            placeholder="Search"
            onChange={inputSearch}
          />
        </div>
        <div>
          <Input
            type="text"
            className="mainInput"
            placeholder="NAME"
            name="name"
            onChange={onchange}
          />

          <Input
            type="text"
            className="mainInput"
            placeholder="STATUS"
            name="status"
            onChange={onchange1}
          />

          <Button className="addButton" onClick={onAdd}>
            ADD
          </Button>
        </div>
        <div className="table-container">
          <Table>
            <Table.Head>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Name</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Head>
            {this.state.data
              .filter((value, id) =>
                value[this.state.g]
                  .toLowerCase()
                  .includes(this.state.infoSearch)
              )
              .map((value) => (
                <Table.Body>
                  <Table.Tr>
                    <Table.Td>{value.id}</Table.Td>
                    <Table.Td>{value.name}</Table.Td>
                    <Table.Td>{value.status}</Table.Td>
                    <Table.Td width={"5%"}>
                      <button onClick={() => onDelete(value.id)}>Delete</button>
                    </Table.Td>
                  </Table.Tr>
                </Table.Body>
              ))}
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
