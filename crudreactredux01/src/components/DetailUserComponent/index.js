import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">NIM</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.nim}</td>
        </tr>
				<tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.nama}</td>
        </tr>
				<tr>
          <td width="200">Fakultas</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.fakultas}</td>
        </tr>
				<tr>
          <td width="200">Domisili</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.domisili}</td>
        </tr>
      </tbody>
    </Table>
  );
};
const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

export default connect(mapStateToProps, null)(DetailUserComponent);
