import './Navbar.css'
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <>
        <nav className='navbar'>
            <div className="nav_icon" onClick={() => openSidebar()}>

                    <i className='fa fa-bars' aria-hidden="true" ></i>
                </div>

                <div className='navbar__left'>
                    <a href='#'>URLs</a>
                    <a href='#'>URLs2</a>
                    <a className='active_link' href='#'>URLs3</a>
                </div>
                <div className='navbar__right'>
                    <a href='#'>
                        <i className='fa fa-search' aria-hidden="true"></i>
                    </a>
                    <a href='#'>
                        <i className="fa-regular fa-clock" aria-hidden="true" ></i>
                    </a>
                    <a href='#'>
                        <i className="fa-regular fa-clock"></i>
                    </a>
                </div>

        </nav>
    </>
)
}

export default Navbar