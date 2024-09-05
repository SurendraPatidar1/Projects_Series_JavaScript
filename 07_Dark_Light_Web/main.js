const showSidebar = (toggleId , sidebarId) => {
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId)

    if(toggle && sidebar){
        toggle.addEventListener('click' , () => {
            sidebar.classList.toggle('show-sidebar')
        })
    }
}
showSidebar('header_toggle','sidebar');