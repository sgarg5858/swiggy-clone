const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello from React CDN"),
    React.createElement("h2", { id: "heading2" }, "Hello from React CDN 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello from React CDN"),
    React.createElement("h2", { id: "heading2" }, "Hello from React CDN 2"),
  ]),
]);
console.log(parent, typeof parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
