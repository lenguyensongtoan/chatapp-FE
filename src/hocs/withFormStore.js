const withOpenMenu = (Component) => (Provider, providerProps) => (props) => {
  return (
    <Provider {...providerProps}>
      <Component {...props} />
    </Provider>
  );
};

export default withOpenMenu;
