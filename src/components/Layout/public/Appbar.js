import Link from "../../Link";
import { useRouter } from "next/router";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

/* For these icons, go https://material-ui.com/components/material-icons/ and search*/
import { ArrowForward, Autorenew } from "@material-ui/icons";

import AppLogo from "../../SVGs/app_logo";

const barButtons = [
  { url: "/", show: { en_us: "Main" } },
  { url: "/#events", show: { en_us: "Events" } },
  { url: "/#explore", show: { en_us: "Explore" } },
  { url: "about", show: { en_us: "About us" } },
];

export default function (props) {
  const { classes } = props;
  const router = useRouter();
  var pathname = router.pathname;

  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <IconButton component={Link} href="/" style={{marginLeft:"10%"}}>
          <AppLogo fontSize="large"/>
        </IconButton>

        <Typography variant="h3" color="textPrimary">
          Bigas
        </Typography>

        <div className={classes.space} />

        {/* here loop the buttons with the array */}
        {barButtons.map((e, index) => (
          <Button key={e.url} component={Link} href={e.url} style={{marginRight:"2%"}}>
            <Typography variant="button">
              {pathname === e.url ? (
                <strong>{e.show.en_us}</strong>
              ) : (
                e.show.en_us
              )}
            </Typography>
          </Button>
        ))}

        <Button className={classes.loginButton}
                component={Link}
                href="login"
                variant="contained"
                endIcon={<ArrowForward className={classes.loginArrow}/>}
                style={{marginRight:"8%"}}
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}
