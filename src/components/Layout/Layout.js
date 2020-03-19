import { makeStyles } from "@material-ui/core/styles"
import Head from "next/head"

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
}))

export default function Layout(props){
    const { title, children } = props
    const classes = useStyles()

    {/* 
        may change here when 
        further layout details need to be added 
    */}

    return (
        <section className={classes.root}>
            <Head><title>{title}</title></Head>
            {children}
        </section>
    );
}