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
      contact = fetchContactById(id);
    } else {
      contact = createDefaultContact();
    }
    // where to put this if with formik
  }

  fetchContactById(id) {}

  createDefaultContact() {}

  render() {
    const props = this.props;
    return (
      <form onSubmit={onSubmit}>
        <ScrollableLayoutManager {...props} />
      </form>
    );
  }
}

const EnhancedInquiryForm = withFormik({})(InquiryForm);

export default EnhancedInquiryForm;
