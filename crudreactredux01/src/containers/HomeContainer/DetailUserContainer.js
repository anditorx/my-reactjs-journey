import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { BackComponent, DetailUserComponent } from "../../components";
import { connect } from "react-redux";
import { getUserDetail } from "../../actions/userAction";
class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <BackComponent to={"/"} />
            </Col>
            <Col>
              <h1>Detail User {this.props.match.params.id}</h1>
            </Col>
            <Col></Col>
          </Row>
          <DetailUserComponent />
        </Container>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     getUserDetail: state.users.getUserDetail,
//     errorUserDetail: state.users.errorUserDetail,
//   };
// };

export default connect()(DetailUserContainer);
