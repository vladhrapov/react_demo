import React from "react";
import Thumbnail from "./Thumbnail.jsx";

class ThumbnailList extends React.Component {
  constructor() {
    super();
  }

  render() {
    var list = this.props.thumbnailData.map((itemProps) => {
      return <Thumbnail {...itemProps} />
    });

    return (
      <div>
        { list }
      </div>
    );
  }
}

export default ThumbnailList;
