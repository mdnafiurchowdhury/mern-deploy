
import { Drawer, styled } from "@mui/material";

import SideBarContent from "./SideBarContent";

const StyledDrawer = styled(Drawer)`
    margin-top: 54px;
`



// here WE USE cURRENT FROM THE MAIN BASED ON TOGGLE FROM HEADER OF TOGGLE BRATER SATTE

const SideBar = ({ toggleDrawer, CurrentSate }) => {

    return (
        <StyledDrawer
            anchor='left'
            open={CurrentSate}
            onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': { 
                    width: 250,
                    borderRight: 'none',
                    background: '#f5F5F5',
                    marginTop: '64px',
                    height: 'calc(100vh - 64px)'
                },
            }}
          >
            <SideBarContent />
        </StyledDrawer>
    )
}

export default SideBar;