import {
  faEdit,
  faInfo,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "Id",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nim",
    text: "NIM",
    sort: true,
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "domisili",
    text: "Domisili",
    sort: true,
  },
  {
    dataField: "fakultas",
    text: "Fakultas",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    headerStyle: () => {
      return { width: "30%" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </Link>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

const TableComponent = (props) => {
  return (
    <>
      <Container>
        {props.getUsersList ? (
          <ToolkitProvider
            keyField="id"
            data={props.getUsersList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <Link to={"create/"}>
                      <Button color="dark" className="mr-2">
                        <FontAwesomeIcon icon={faUserPlus} /> Create New User
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <div className="float-right">
                      <SearchBar
                        {...props.searchProps}
                        placeholder="Cari ..."
                      />
                    </div>
                  </Col>
                </Row>

                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">
            {props.errorUsersList ? (
              <p>{props.errorUsersList}</p>
            ) : (
              <Spinner style={{ width: "3rem", height: "3rem" }} />
            )}
          </div>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};
export default connect(mapStateToProps, null)(TableComponent);
