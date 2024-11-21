
const Sidebar = ({selectedTab, setSelectedTab}) => {
  return(
    <>
    <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item" onClick={()=>{setSelectedTab("Dashboard")}}>
      <a className={`nav-link ${selectedTab!=="Dashboard"&& "collapsed"}`}>
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </a>
    </li>{/* End Dashboard Nav */}
    <li className="nav-item" onClick={()=> {setSelectedTab("File Manager")}}>
      <a className={`nav-link  ${selectedTab!=="File Manager"&& "collapsed"}`} data-bs-target="#components-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
        <i className="bi bi-menu-button-wide" /><span>File Manager</span><i  />
      </a>
      
      </li>{/* End Components Nav */}
    <li className="nav-item" onClick={()=>{setSelectedTab("Settings")}}>
      <a className={`nav-link ${selectedTab!=="Settings"&& "collapsed"}`}data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
        <i className="bi bi-journal-text" /><span>Settings</span><i />
      </a>
          </li>{/* End Forms Nav */}
   
    <li className="nav-item" onClick={()=>{setSelectedTab("Custom HomePage")}}>
      <a className={`nav-link  ${selectedTab!=="Custom HomePage"&& "collapsed"}`} data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
        <i className="bi bi-bar-chart" /><span>Custom HomePage</span><i  />
      </a>
      
    </li>{/* End Charts Nav */}
    <li className="nav-item" onClick={()=>{setSelectedTab("Icons")}}>
      <a className={`nav-link  ${selectedTab!=="Icons"&& "collapsed"}`} data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
        <i className="bi bi-gem" /><span>Icons</span><i />
      </a>
      
    </li>{/* End Icons Nav */}
    
    <li className="nav-item">
      <a className="nav-link collapsed" href="users-profile.html">
        <i className="bi bi-person" />
        <span>Profile</span>
      </a>
    </li>{/* End Profile Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-faq.html">
        <i className="bi bi-question-circle" />
        <span>F.A.Q</span>
      </a>
    </li>{/* End F.A.Q Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-contact.html">
        <i className="bi bi-envelope" />
        <span>Contact</span>
      </a>
    </li>{/* End Contact Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-register.html">
        <i className="bi bi-card-list" />
        <span>Register</span>
      </a>
    </li>{/* End Register Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-login.html">
        <i className="bi bi-box-arrow-in-right" />
        <span>Login</span>
      </a>
    </li>
  </ul>
</aside>


    </>
  )

};
export default Sidebar;