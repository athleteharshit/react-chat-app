import { Route, Redirect } from "react-router-dom";

/**
 * @author
 * @function PrivateRoute
 **/

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      component={(props: any) => {
        const user = localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user") || "")
          : null;

        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/`} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
