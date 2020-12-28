import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
export default function Loader() {

    return (
        <div >

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <h1>Loading...</h1>
                <Grid item xs={3}>
                    <CircularProgress />
                </Grid>
            </Grid>
        </div>
    );
}