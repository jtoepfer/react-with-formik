import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName } = this.props.contact;
    const { onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
    );
  }
}
