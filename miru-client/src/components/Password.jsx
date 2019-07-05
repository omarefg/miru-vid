import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

export const Password = props => {
    const [showPassword, setShowPassword] = useState()
    const handleClickShowPassword = () => setShowPassword(!showPassword)

    return (
        <FormControl
            fullWidth={props.fullWidth}
            margin={props.margin}
        >
            <InputLabel
                htmlFor={props.id}>
                {props.label}
            </InputLabel>
            <Input
                id={props.id}
                type={showPassword ? 'text' : 'password'}
                value={props.value}
                onChange={props.onChange}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='Toggle password visibility'
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                required={props.required}
            />
        </FormControl>
    )
}
