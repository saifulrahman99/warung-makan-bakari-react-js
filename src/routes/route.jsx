import { createBrowserRouter } from "react-router-dom";
import Login from "@pages/Authentication/Login";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@pages/Dashboard/Dashboard";
import Table from "@/pages/Table/Table";
import TableList from "@/pages/Table/components/TableList";
import TableForm from "@/pages/Table/components/TableForm";
import Menu from "@/pages/Menu/Menu";
import MenuList from "@/pages/Menu/components/MenuList";
import MenuForm from "@/pages/Menu/components/MenuForm";
import Customer from "@/pages/Customer/Customer";
import CustomerList from "@/pages/Customer/components/CustomerList";
import CosutomerForm from "@/pages/Customer/components/CosutomerForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "tables",
                element: <Table />,
                children: [
                    {
                        index: true,
                        element: <TableList />,
                    },
                    {
                        path: "new",
                        element: <TableForm />,
                    },
                    {
                        path: "update/:id",
                        element: <TableForm />,
                    },
                ],
            },
            {
                path: "menus",
                element: <Menu />,
                children: [
                    {
                        index: true,
                        element: <MenuList />,
                    },
                    {
                        path: "new",
                        element: <MenuForm />,
                    },
                    {
                        path: "update/:id",
                        element: <MenuForm />,
                    },
                ],
            },
            {
                path: "customers",
                element: <Customer />,
                children: [
                    {
                        index: true,
                        element: <CustomerList />,
                    },
                    {
                        path: "new",
                        element: <CosutomerForm />,
                    },
                    {
                        path: "update/:id",
                        element: <CosutomerForm />,
                    },
                ],
            },
        ]
    },
]);

export default router;