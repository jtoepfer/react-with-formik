import React from "react";
import Formik from "formik";

export default class InquiryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { lead } = this.state || {};
    return <Formik initialValues={lead} />;
  }
}
