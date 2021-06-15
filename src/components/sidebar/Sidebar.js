import "./Sidebar.css"
import logo1 from "../../assets/logo1.png"

const Sidebar = ({SidebarOpen, closedSidebar})=>{
    return(
        <div className={SidebarOpen ? "sidebar-responsive": ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo1} alt="logo"/>
                    <h1>Blackcoffer</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={()=>closedSidebar()}></i>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>

                {/* <h2>MNG</h2> */}
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employee Management</a>
                </div>
                {/* <div className="sidebar_link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-handsome-o"></i>
                    <a href="#">Contracts</a>
                </div> */}

                {/* <h2>Leave</h2> */}
                <br/>
                <div className="sidebar_link">
                    <i className="fa fa-question"></i>
                    <a href="#">End Year</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Topics</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Sector</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Region</a>
                </div>

                {/* <h2>PAYROLL</h2> */}
                <div className="sidebar_link">
                    <i className="fa fa-money"></i>
                    <a href="#">Pest</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Sources</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">SWOT</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Country</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">City</a>
                </div>
                
                <div className="sidebar_logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;