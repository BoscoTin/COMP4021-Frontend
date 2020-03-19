import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/components/Link';
import Layout from '../src/components/Layout/Layout'

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
    <Layout title="Index Page">
      <Link href="/">abc</Link>
      <Copyright />
    </Layout>
  );
}
