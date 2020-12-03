import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import "../components_stylesheets/CreatePostModal.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {MdClose, MdImage} from "react-icons/md";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    title: {
        textAlign: "center",
        margin: "auto",
        fontSize: 20,
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

// dialog title
const DialogTitle = withStyles(styles)
((props) => {
    const {children, classes, onClose, ...other} = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography className={classes.title}>{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <MdClose/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

// dialog content
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

// dialog actions
const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
    },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    inputField: {
        width: 375,
    },
    box: {
        marginTop: 10,
        padding: "5px 10px",
        border: "1px solid #ccc",
    },
    boxRight: {
        textAlign: "end",
    },
    button: {
        margin: "auto",
    },
}));

const imageFileChosen = (e) => {
    const fileChosen = document.getElementById('file-chosen');
    fileChosen.textContent = e.target.files[0].name;
}

function CreatePostModal({onClose, isOpen}) {

    const classes = useStyles();

    return (
        <div>
            <Dialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
            >
                {/* dialog title */}
                <DialogTitle id="customized-dialog-title" onClose={onClose}>
                    Create Post
                </DialogTitle>
                {/* main Content */}
                <DialogContent dividers>
                    <TextField
                        className={classes.inputField}
                        multiline
                        rows={8}
                        placeholder="Caption...."
                        variant="outlined"
                    />
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className={classes.box}
                    >
                        <Grid item xs={6}>
                            <Typography variant="caption" component="p">
                                Add to your Image post...
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.boxRight}>
                            <IconButton
                                aria-label="open file"
                                className={classes.imageButton}
                            >
                                <div className="image-upload">
                                    <input id="file-input" type="file" accept="image/*" hidden onChange={imageFileChosen}/>
                                    <label htmlFor="file-input">
                                        <MdImage/>
                                    </label>
                                    <Typography variant="caption" component="p" id="file-chosen">
                                        <span >No file chosen</span>
                                    </Typography>
                                </div>
                            </IconButton>

                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className={classes.button}>
                    <Button onClick={onClose}>Post</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CreatePostModal;
