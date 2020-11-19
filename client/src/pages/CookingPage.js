import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Instruction from '../components/instruction';
import {search} from '../spoonacular/endpoints'

class CookingPage extends React.Component {
    state = {
        instructions: []
    }
    componentDidMount() {
        search.getRecipeInstruction(324694)
            .then(res => {
                return res.json();
            })
            .then(instructions => {
                this.setState({
                    instructions : instructions.map((instruction, ii) => {
                        return <Instruction {...instruction} key={ ii} />
                    }),
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
                minWidth: 500,
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }));



        return(
            <div className={useStyles.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        {this.state.instructions}
                    </Grid>
                </Grid>


            </div>
        );
    }
}

export default CookingPage;