import React from 'react';
import Link from '../src/components/Link';
import PublicLayout from '../src/components/Layout/public/PublicLayout'

import {
  Typography, Divider
} from '@material-ui/core'

import { fade } from "@material-ui/core/styles/colorManipulator";


export default function About() {
  return (
    <PublicLayout title="about">
      <div style={{flexGrow: 1, alignItems: 'center'}}>
        <div style={{flexGrow: 1, backgroundColor: `${fade('#000000', 0.1)}`, padding: '30px'}}>
          <Typography variant="h1" align="center">
            COMP4021 project
          </Typography>
        </div>
        <br />
        
        <Typography variant="h5" align="center">
          A matching platform for startup enterpreneurs
        </Typography>
        
        <br />
        <Divider />
        <br /><br />
        <Typography variant="h2" align="center">
          Members:
        </Typography>
        <br /><br />
        <Typography variant="h3" align="left">
          Leader:
        </Typography>
        <br />
        <Typography variant="h5" align="left">
          CHIU Yui Fan, Charlie
        </Typography>
        <Typography variant="h6" align="left">
          20420581 (yfchiuaa)
        </Typography>
        <br />
        <Typography variant="body2" align="left">
          A talented programmer with full experienced in both frontend and backend side. Cheerful leader in developing the platform.
        </Typography>
        <br /><br />
        <Divider />
        <br /><br />
        <Typography variant="h3" align="left">
          Teammates:
        </Typography>
        <br />
        <Typography variant="h5" align="left">
          DAI Chi Hang, Andy
        </Typography>
        <Typography variant="h6" align="left">
          20435328 (chdaiaa)
        </Typography>
        <br />
        <Typography variant="body2" align="left">
          A programmer strive the best in developing frontend site. Help the leader a lot in solving his tasks.
        </Typography>
        <br /><br />
        <Typography variant="h3" align="left">
          Small potato:
        </Typography>
        <br />
        <Typography variant="h5" align="left">
          TANG Wai Tin, Bosco
        </Typography>
        <Typography variant="h6" align="left">
          20421717 (wttang)
        </Typography>
        <br />
        <Typography variant="body2" align="left">
          A bad programmer who always building troubles to his teammates and leader. Charlie and Andy always want to blame him for his shit codes. Do not find him to cooperate, or else you will be the next one in trouble.
        </Typography>
        <br />
      </div>
    </PublicLayout>
  );
}
