import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.editor = null;
  }

  componentDidMount() {
    const { onContentChange } = this.props;

    this.editor = new Editor({
      el: this.containerRef.current,
      hideModeSwitch: true,
    });

    this.editor.addHook('change', () => {
      const content = this.editor.getMarkdown();
      onContentChange(content);
    });
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }

  render() {
    return <div ref={this.containerRef} />;
  }
}

export default MarkdownEditor;
// END
