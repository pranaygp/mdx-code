import React from "react";
import Embed from "react-runkit";
import scriptLoader from "react-async-script-loader";

const Code = scriptLoader("https://embed.runkit.com")(
  ({ isScriptLoaded, ...rest }) =>
    isScriptLoaded ? (
      <Embed style={{ width: "100vw" }} nodeVersion="10" {...rest} />
    ) : (
      <h1>Loading</h1>
    )
);

export default ({ children }) => {
  const [pre, code] = React.Children.toArray(children.props.children);
  let title;
  let component;
  if (code) {
    const [preamble, source] = [pre, code].map(
      c => c.props.children.props.children
    );
    title = code.props.children.props.props.metaString;
    component = <Code source={source} preamble={preamble} title={title} />;
  } else {
    const source = pre.props.children.props.children;
    title = pre.props.children.props.props.metaString;
    component = <Code source={source} title={title} />;
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
