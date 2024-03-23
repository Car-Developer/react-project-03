const Box = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const element = (
  <div className="container">
    <h1 className="boxes-heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="box1" children="Small" />
      <Box className="box2" children="Medium" />
      <Box className="box3" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
