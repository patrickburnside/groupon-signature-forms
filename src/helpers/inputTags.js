const React = require("react");
const Tags = require("./input-tags/ReactTags");
const suggestions = require("./input-tags/board-certifications");

class InputTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions
    };
  }

  handleDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render() {
    return (
      <React.Fragment>
        <Tags
          tags={this.state.tags}
          suggestions={this.state.suggestions}
          handleDelete={this.handleDelete.bind(this)}
          handleAddition={this.handleAddition.bind(this)}
        />
      </React.Fragment>
    );
  }
}
export default InputTags;
