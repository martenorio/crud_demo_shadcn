import {
  createHashRouter
} from "react-router-dom";
import { RootContainer } from "./core/components/RootContainer";
import { Login } from "./auth/views/Login";
import { EmployesForm } from "./employes/views/EmployesForm";
import { EmployesList } from "./employes/views/EmployesList";
import { CustomerForm } from "./customers/views/CustomerForm";
import { CustomerList } from "./customers/views/CustomerList";

const MainRouter = createHashRouter([
  {
    path:"login",
    element: <Login />
  },
  {
    path: "/",
    element: <RootContainer />,
    children:[
      {
        path:"empleado",
        element: <EmployesForm />
      },
      {
        path:"empleados",
        element: <EmployesList />
      },
      {
        path:"cliente",
        element: <CustomerForm />
      },
      {
        path:"clientes",
        element: <CustomerList />
      },
    ]
  },
]);

export default MainRouter;