import { makeStyles, rgbToHex } from "@material-ui/core/styles"
import Head from "next/head"

import AppBar from "./Appbar"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
        display: "flex",
        width: "100%",
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1
    },

    appbar: {
        position: "absolute",
        background: 'transparent',
        boxShadow: 'none'
    },
    space: {
        flexGrow: 1
    }
}))

export default function (props){
    const { title, children } = props
    const classes = useStyles()

    {/* 
        may change here when 
        further layout details need to be added 
    */}

    return (
        <section className={classes.root}>
            <Head><title>{title}</title></Head>
            <AppBar classes={classes}/>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </section>
    );
}