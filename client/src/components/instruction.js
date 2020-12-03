import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Instruction({ name }) {

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    { name }
                </Typography>

                <Typography variant="body2" component="p">
                    <br/>
                    {'step'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Instruction;
