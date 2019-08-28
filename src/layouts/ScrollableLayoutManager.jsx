import React from "react";

export default class ScrollableLayoutManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, influencer } = this.props;
    return (
      <Contact type="influencer" contact={influencer} onChange={onChange} />
    );
  }
}
