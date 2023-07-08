function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const Nav = (props) => {
  const opacity = props.opacity ? Math.max(props.opacity, 0.2) : 0;
  const borderBottomWidth = props.opacity === 1 ? props.borderBottomWidth : 0;

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "navbar navbar-default navbar-static-top",
      role: "navigation",
      style: { opacity, borderBottomWidth },
    } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "navbar-header" } /*#__PURE__*/,
        React.createElement(
          "button",
          {
            type: "button",
            className: "navbar-toggle collapsed",
            "data-toggle": "collapse",
            "data-target": "#nav-id",
          } /*#__PURE__*/,
          React.createElement("span", { className: "icon-bar" }) /*#__PURE__*/,
          React.createElement("span", { className: "icon-bar" }) /*#__PURE__*/,
          React.createElement("span", { className: "icon-bar" })
        ) /*#__PURE__*/,

        React.createElement(
          "a",
          { href: "#", className: "navbar-brand" },
          "Abarrotes Fénix"
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "nav-id" } /*#__PURE__*/,
        React.createElement(
          "ul",
          { className: "nav navbar-nav navbar-right" } /*#__PURE__*/,
          React.createElement(
            "li",
            null,
            /*#__PURE__*/ React.createElement(
              "a",
              { href: "#" },
              "Sobre Nosotros"
            )
          ) /*#__PURE__*/,
          React.createElement(
            "li",
            null,
            /*#__PURE__*/ React.createElement("a", { href: "#" }, "Servicios")
          ) /*#__PURE__*/,
          React.createElement(
            "li",
            null,
            /*#__PURE__*/ React.createElement("a", { href: "#" }, "Contacto")
          )
        )
      )
    )
  );
};

const Header = (props /*#__PURE__*/) =>
  React.createElement(
    "div",
    {
      className: "header",
      style: {
        height: props.height,
        borderBottomWidth: props.borderBottomWidth,
      },
    } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "name" },
      "Abarrotes Fénix"
    ) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "description" },
      "Surtimos Abarrotes Al Mayoreo"
    ) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "links" } /*#__PURE__*/,
      React.createElement("a", { href: "#" }, "Sobre Nosotros") /*#__PURE__*/,
      React.createElement("a", { href: "#" }, "Servicios") /*#__PURE__*/,
      React.createElement("a", { href: "#" }, "Contacto")
    )
  );

const Content = () =>
  /*#__PURE__*/
  React.createElement(
    "div",
    { className: "content" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "row" } /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "col-md-12" } /*#__PURE__*/,
          React.createElement(
            "h1",
            null,
            "Desplázame hacia abajo"
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt libero in enim lobortis auctor."
          )
        )
      )
    )
  );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navOpacity: 0 };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateNavOpacity);
  }

  updateNavOpacity() {
    const navbarHeight = 50; // Bootstrap default
    const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
    const endFade = headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      null /*#__PURE__*/,
      React.createElement(Nav, {
        opacity: this.state.navOpacity,
        borderBottomWidth: this.props.bottomBorderWidth,
      }) /*#__PURE__*/,
      React.createElement(Header, {
        height: this.props.headerHeight,
        borderBottomWidth: this.props.bottomBorderWidth,
      }) /*#__PURE__*/,
      React.createElement(Content, null)
    );
  }
}
_defineProperty(App, "defaultProps", {
  bottomBorderWidth: 2,
  headerHeight: 200,
  fadeInDistance: 40,
});

ReactDOM.render(
  /*#__PURE__*/
  React.createElement(App, null),
  document.getElementById("app")
);
