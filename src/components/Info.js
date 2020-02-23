import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from "react-router-dom"

export default function Info() {
    return (
        <div className="info">
            <Link exact="true" to="/mounting"><span className="info-btn">&#105;</span></Link>
            <Typography
                variant="h5"
                component="h3"
                align="center"
                className="h3"
            >Выберите цвет свечения</Typography>
        </div>
    )
}
