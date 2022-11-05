import React, { useState } from 'react'


const Week = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


    return <>
        <Nav>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar}/>
            </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
            </SidebarWrap>
        </SidebarNav>
    </>
}
