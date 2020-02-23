import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    item: {
        justifyContent: 'center',
        padding: '20px 10px',
        color: '#fff',
        fontSize: '1rem',
        borderTop: '1px solid #282828',
        background: '#212121',
        "&:hover": {
            backgroundColor: '#00b6ff'
        }
    },
    nav: {
        paddingTop: 0,
        paddingBottom: 0
    }
}));

export default function SideDraver(props) {

    const classes = useStyles();

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav" className={classes.nav}>
                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Обучающее видео
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Оформление заказа
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Оплата
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Доставка
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Гарантии
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Возврат
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Контакты
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.onClose(false)}
                    className={classes.item}
                >
                    Партнеры
                </ListItem>

            </List>
        </Drawer>
    )
}
