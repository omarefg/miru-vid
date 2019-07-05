import React from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'

export const FormMessage = props => {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby='form-dialog-title'
        >
            <form
                onSubmit={props.onSubmit}
                autoComplete='off'
            >
                <DialogTitle id='form-dialog-title'>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{props.message}</DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label={props.label}
                        type='email'
                        fullWidth
                        value={props.inputValue}
                        onChange={props.inputOnChange}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color='primary'>Cancel</Button>
                    <Button
                        color='primary'
                        type='submit'
                    >
                        {props.buttonTitle || 'Submit'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
