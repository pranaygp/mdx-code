import React from "react";
import Embed from "react-runkit";
import scriptLoader from "react-async-script-loader";

const Code = scriptLoader("https://embed.runkit.com")(
  ({ isScriptLoaded, ...rest }) =>
    isScriptLoaded ? (
      <Embed style={{ width: "100vw" }} {...rest} />
    ) : (
      <h3>Loading</h3>
    )
);

export default ({ nodeVersion = 10, children }) => {
  const [pre, code] = React.Children.toArray(children);
  let title;
  let component;
  if (code) {
    const [preamble, source] = [pre, code].map(
      c => c.props.children.props.children
    );
    title = code.props.children.props.metastring;
    component = <Code source={source} preamble={preamble} title={title} nodeVersion={nodeVersion} />;
  } else {
    const source = pre.props.children.props.children;
    title = pre.props.children.props.metastring;
    component = <Code source={source} title={title} nodeVersion={nodeVersion} />;
  }
  return (
    <div
      style={{
        width: "80vw"
      }}
    >
      <h2>{title}</h2>
      {component}
    </div>
  );
};
