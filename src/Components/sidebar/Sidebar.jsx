
import './Sidebar.css'
const Sidebar = ({ sidebarOpen, closeSidebar }) => {

    

    return (
        <>
            <div className={sidebarOpen ? "sidebar-responsive" : ""}  id="sidebar" >
                    <div className="sidebar__title">
                        <div className="sidebar__imge">
                            <i className="fa-brands fa-slack me-3 mb-1"></i>
                            <h1>Logo</h1>
                        </div>
                        <i className="fa fa-times"
                        id="sidebarIcon"
                        onClick={() =>closeSidebar() }></i>
                    </div>
                <div className='sidebar__menu'>

                    <h2 className='mb-4'>Admin</h2>
                    <div className="sidbar__link active_menu_link">
                        <i className="fa fa-home"></i>
                        <a href='#'>Home</a>
                    </div>


                    <div className="sidbar__link    ">
                    
                        <i className='fa fa-user-group'></i>
                        <a href='#'>Users </a>
                        
                    </div>

                    <div className="sidbar__link">
                        <i className='fa fa-building'></i>
                        <a href='#'>URls </a>
                    </div>

                    <div className="sidbar__link">
                        <i className='fa fa-wrench'></i>

                        <a href='#'>URls 2</a>
                    </div>

                    <div className="sidbar__link">
                        <i className='fa fa-archive'></i>

                        <a href='#'>URls 3</a>
                    </div>

                    <div className="sidbar__link">
                        <i className='fa fa-handshake'></i>
                        <a href='#'>URls 4</a>
                    </div>



                    <div className="sidebar__logout ">
                        <i className='fa fa-power-off'></i>
                        <a href='#'>logout</a>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Sidebar;