import React, { Component } from "react";
import "./TextBox.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      isBold: false,
      isUnderline: false,
      isItalic: false,
    };
    this.editorRef = React.createRef();
  }

  handleBoldClick = () => {
    this.setState(
      (prevState) => ({ isBold: !prevState.isBold }),
      this.setFormatting
    );
  };

  handleUnderlineClick = () => {
    this.setState(
      (prevState) => ({ isUnderline: !prevState.isUnderline }),
      this.setFormatting
    );
  };

  handleItalicClick = () => {
    this.setState(
      (prevState) => ({ isItalic: !prevState.isItalic }),
      this.setFormatting
    );
  };

  setFormatting = () => {
    const editor = this.editorRef.current;
    const { isBold, isUnderline, isItalic } = this.state;
    editor.style.fontWeight = isBold ? "bold" : "normal";
    editor.style.textDecoration = isUnderline ? "underline" : "none";
    editor.style.fontStyle = isItalic ? "italic" : "normal";
  };

  handleContentChange = (event) => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.content);
  };

  handleClear = () => {
    this.setState({ content: "" });
  };

  render() {
    const { content } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <textarea
          ref={this.editorRef}
          value={content}
          onChange={this.handleContentChange}
          placeholder="Make a new job post"
          className="editor"
        />
        <div className="formatting-controls">
          <button type="button" onClick={this.handleBoldClick}>
            B
          </button>
          <button type="button" onClick={this.handleUnderlineClick}>
            U
          </button>
          <button type="button" onClick={this.handleItalicClick}>
            I
          </button>
        </div>
        <div className="form-controls">
          <button type="submit">Post</button>
          <button type="button" onClick={this.handleClear}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}

export default Form;