import React from 'react';
import ProfilePic from './ProfilePic';
import Typography from '@material-ui/core/Typography';

function ProfileCard(){
    return <div>
        <ProfilePic />
        <Typography component="h1" variant="h4">Thomas Allison</Typography>
        <Typography><a href="mailto:tomlaurenceallison@gmail.com">tomlaurenceallison@gmail.com</a></Typography>
    </div>
}

export default ProfileCard;