import Link from "../Link"
import { useRouter } from 'next/router'

import { 
    AppBar, Button, Toolbar, Typography, IconButton
} from '@material-ui/core'

import {
    ArrowForward, Autorenew
} from '@material-ui/icons'


const barButtons = [
    {url: "about", show: {en_us: "About"}},
    {url: "events", show: {en_us: "Events"}},
    {url: "explore", show: {en_us: "Explore"}},
    {url: "contact", show: {en_us: "Contact us"}},
]


export default function (props) {
    const { classes } = props
    const router = useRouter()
    var pathname = router.pathname

    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <IconButton component={Link} href="/">
                    <Autorenew />
                </IconButton>

                {/* here loop the buttons with the array */}
                {barButtons.map( (e, index) => (
                    <Button key={e.url} 
                        component={Link} 
                        href={e.url}
                    >
                        <Typography variant="button">
                            { pathname === e.url
                                ? <strong>{e.show.en_us}</strong>
                                : e.show.en_us
                            }
                        </Typography>
                    </Button>
                ))}

                <div className={classes.space} />

                <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                >
                    Sign Up
                </Button>
            </Toolbar>
        </AppBar>
    );
}