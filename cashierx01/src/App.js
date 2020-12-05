import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavbarComponent, ListCategories, Hasil, Menus } from "./components";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      selectedCategories: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.selectedCategories)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      selectedCategories: value,
      menus: [],
    });
    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, selectedCategories } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                selectedCategories={selectedCategories}
              />
              <Col>
                <h4>Daftar Produk</h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((itemMenu) => (
                      <Menus key={itemMenu.id} menu={itemMenu} />
                    ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
