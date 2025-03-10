import {
    IconBrandDatabricks,
    IconApps,
    IconChevronDown,
    IconDoorExit,
    IconHome2,
    IconListDetails,
    IconUsers,
    IconReceipt,
    IconAccessible,
} from "@tabler/icons-react";
import PropTypes from "prop-types";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export default function Sidebar({isVisible, setVisible, handleLogout}) {
    const user = localStorage.getItem('user');
    const {roles} = JSON.parse(user);
    let role;
    if (roles[0] === "ROLE_SUPER_ADMIN") {
        role = "Super Admin";
    } else if (roles[0] === "ROLE_ADMIN") {
        role = "Admin";
    } else {
        role = "Customer";
    }
    useEffect(() => {
        const handleResize = () => {
            setVisible(window.innerWidth >= 800);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setVisible]);

    return (
        <div
            className={`bg-primary text-white p-4 shadow ${isVisible ? "show-custom" : "hide-custom"
            }`}
        >
            <div className="font-logo text-center mb-5">
                <Link to="/" className="text-white text-decoration-none" href="/">
                    <h5>
                        <i>
                            Warung Makan <b>Bakari</b>
                        </i>
                    </h5>
                </Link>
                <h2 className="fs-6 my-4 font-primary fw-bold">{role}</h2>
            </div>
            <nav>
                <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
                    <p className="fw-bold">Dashboard</p>
                    <li
                        className="cursor-pointer text-white"
                        data-bs-toggle="collapse"
                        data-bs-target="#dashboard-collapse"
                        aria-expanded="true"
                    >
                        <i className="me-3">
                            <IconApps/>
                        </i>
                        <span>Master</span>
                        <i className="ms-3">
                            <IconChevronDown/>
                        </i>
                    </li>
                    <div className="collapse show" id="dashboard-collapse">
                        <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                            <li className="cursor-pointer">
                                <Link
                                    className="text-white text-decoration-none"
                                    to="/dashboard"
                                >
                                    <i className="me-3">
                                        <IconHome2/>
                                    </i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link
                                    to="/dashboard/menu"
                                    className="text-white text-decoration-none"
                                >
                                    <i className="me-3">
                                        <IconListDetails/>
                                    </i>
                                    <span>Menu</span>
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link
                                    to="/dashboard/table"
                                    className="text-white text-decoration-none"
                                >
                                    <i className="me-3">
                                        <IconBrandDatabricks/>
                                    </i>
                                    <span>Table</span>
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link
                                    to="/dashboard/customer"
                                    className="text-white text-decoration-none"
                                >
                                    <i className="me-3">
                                        <IconUsers/>
                                    </i>
                                    <span>Customer</span>
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link
                                    to="/dashboard/admin"
                                    className="text-white text-decoration-none"
                                >
                                    <i className="me-3">
                                        <IconAccessible />
                                    </i>
                                    <span>Admin</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <p className="fw-bold">Transaction</p>
                    <li className="cursor-pointer text-white">
                        <Link
                            className="text-white text-decoration-none"
                            to="/dashboard/transaction"
                        >
                            <i className="me-3">
                                <IconReceipt/>
                            </i>
                            <span>Transaction</span>
                        </Link>
                    </li>
                    <hr/>
                    <li
                        onClick={handleLogout}
                        className="cursor-pointer text-white"
                    >
                        <i className="me-3">
                            <IconDoorExit/>
                        </i>
                        <span>Logout</span>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

Sidebar.propTypes = {
    isVisible: PropTypes.bool,
    setVisible: PropTypes.func,
    handleLogout: PropTypes.func,
};
