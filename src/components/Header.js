import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Badge from '@material-ui/core/Badge'
import SideDrawer from './SideDrawer'
import Logo from './icon/Logo'

export default function Header() {

    const [drawerOpen, setDrawerOpen] = useState(false)


    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: '#1a1a1a',
                boxShadow: 'none',
                padding: '10px 0px',
                height: 75
            }}
        >
            <Toolbar>
                <div style={{ flexGrow: 1 }}>
                    <Logo />
                </div>
                <IconButton color="inherit">
                    <Badge badgeContent={1} color="primary">
                        <LocalGroceryStoreIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}
                >
                    {!drawerOpen ? <MenuIcon /> : <CloseIcon />}
                </IconButton>
                <SideDrawer
                    style={{ top: 84 }}
                    open={drawerOpen}
                    onClose={(value) => toggleDrawer(value)}
                />
            </Toolbar>
        </AppBar>
    )
}
