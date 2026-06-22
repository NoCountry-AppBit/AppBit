import Sidebar from "../components/sidebar";

const DashboardLayout = () => {


    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar role="empresa" />
        </div>
    );
};

export default DashboardLayout;