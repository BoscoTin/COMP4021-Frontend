import React from "react";

import { Box, Grid, Typography, IconButton, Button } from "@material-ui/core";
import { Facebook, Twitter, Instagram, ArrowForward } from "@material-ui/icons";

import Link from "../../Link";
import clsx from "clsx";

const socialInfos = [
  { key: "fb", url: "https://www.facebook.com", icon: <Facebook /> },
  { key: "twitt", url: "https://www.twitter.com", icon: <Twitter /> },
  { key: "insta", url: "https://www.instagram.com", icon: <Instagram /> },
];

export default function (props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.footTitle}>
        <Typography variant="h5">Try For Free!</Typography>
        <div className={classes.space} />
        <Button
          className={clsx(classes.footButton, classes.footButtonStyle1)}
          href="/about"
          component={Link}
        >
          <Box color={"#FFFFFF"}>About Us</Box>
        </Button>
        <Button
          className={clsx(
            classes.footButton,
            classes.footButtonMargin2,
            classes.footButtonStyle2
          )}
          href="/signup"
          component={Link}
          endIcon={<ArrowForward className={classes.loginArrow} />}
        >
          Get Start
        </Button>
      </div>

      <Typography color="primary" className={classes.footTitle}>
        Start your exploring your potential teammates with our assistance
      </Typography>


        <div className={classes.footer} >
          <br />
          <div className={classes.footInfo}>
            <Box display={"inline"}>
              <img src={"Bigas.svg"} />
            </Box>
            <Typography variant="h5" display={"inline"}> Bigas</Typography>
            <br />
            <br />
            <Typography variant="body2">HKUST No.1</Typography>
            <Typography variant="body2">Clear Water Bay, PRBW 29281</Typography>
            <br />
            <Typography variant="body2">info@bigas.project</Typography>
            <Typography variant="body2">12345678 (Main)</Typography>
            <br />
            <br />
            <Typography variant="body2">
              © Bigas™, 2020. All rights reserved.
            </Typography>
            <Typography variant="body2">
              Company Registration Number: 12345678.
            </Typography>
          </div>

        <div className={classes.footOther}>
          <br />
          <Typography variant="h5">About</Typography>
          <br />
          <br />
          <Typography variant="body2" component={Link} href="/about">
            About us
          </Typography>
          <br />
          <Typography variant="body2" component={Link} href="">
            Events
          </Typography>
          <br />
          <Typography variant="body2" component={Link} href="">
            Explore
          </Typography>
          <br />
          <Typography variant="body2" component={Link} href="">
            Contact us
          </Typography>
        </div>

        <div className={classes.footOther}>
          <br />
          <Typography variant="h5">Help</Typography>
          <br />
          <br />
          <Typography variant="body2" component={Link} href="/about">
            Support
          </Typography>
          <br />
          <Typography variant="body2" component={Link} href="">
            Sign up
          </Typography>
          <br />
          <Typography variant="body2" component={Link} href="">
            Guide
          </Typography>
          <br />
          <Typography variant="body2" component={Link} href="">
            Reports
          </Typography>
          <br />
          <Typography variant="body2" component={Link} href="">
            Q{"&"}A
          </Typography>
        </div>

        <div className={classes.footOther}>
          <br />
          <Typography variant="h5">Social Media</Typography>
          <br />
          <br />
          <Grid container>
            {socialInfos.map((e) => (
              <Grid item xs={4} key={e.key}>
                <IconButton component="a" href={e.url}>
                  {e.icon}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
