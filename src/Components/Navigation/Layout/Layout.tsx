import React from 'react'
import { StyledLayout, StyledMainContent } from "./Layout.style"
import Navigation from "../Navigation"
export const Layout = ({ children }) => {
    return (

        <StyledLayout>
            <Navigation></Navigation>
            <StyledMainContent>{children}</StyledMainContent>
        </StyledLayout>

    )


}
