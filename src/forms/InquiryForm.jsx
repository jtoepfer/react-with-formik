import React from "react";
import { withFormik } from "formik";
import ScrollableLayoutManager from "../layouts/ScrollableLayoutManager";

class InquiryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let contact = null;
    // TODO: fetch data from microservice
    const { id } = ""; // parsed from query string
    if (id) {
      contact = this.fetchContactById(id);
    } else {
      contact = this.createDefaultContact();
    }
    // TODO: where to put this if with formik
    this.setState({
      contact: contact
    });
  }

  fetchContactById(id) {
    return {
      playerOne: {},
      playerTwo: {}
    };
  }

  createDefaultContact() {
    return {
      playerOne: {
        firstName: ""
      },
      playerTwo: {
        firstName: ""
      }
    };
  }

  render() {
    const props = this.props;
    const { onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <ScrollableLayoutManager {...props} />
      </form>
    );
  }
}

const EnhancedInquiryForm = withFormik({})(InquiryForm);

export default EnhancedInquiryForm;
