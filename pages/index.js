import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/components/Link';
import PublicLayout from '../src/components/Layout/PublicLayout'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Index() {
  return (
    <PublicLayout title="Index Page">
      <Link href="/">abc</Link>
      <Copyright />
    </PublicLayout>
  );
}
