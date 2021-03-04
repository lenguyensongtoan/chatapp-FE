import store from "store";
import {redirect} from "../utilities/helper";
import {useRouter} from "next/router"
const withAuthentication = (Component) => (props) => {
  const { authenticationStore } = store.useContainer();
  const Router = useRouter()
  if (
    !authenticationStore.isAuthenticated ||
    Router.pathname !== "/auth" ){
    redirect("/auth")
    return null;
  }
  if (authenticationStore.isAuthenticated && Router.pathname === "/auth") {
    redirect("/")
    return null;
  }

  return <Component {...props} />;
};

export default withAuthentication;
