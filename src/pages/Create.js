import { Typography } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import {makeStyles} from '@material-ui/core'
import { TextField } from 'react-admin'

//this is a hook
const useStyles = makeStyles({
    
})

export default function Create() {
    const classes = useStyles()

    return ( 
        <Container>
            <Typography
                className={classes.title}
                variant='h6'
                color= 'textSecondary'
                component= 'h2'
                gutterBottom
            >
                Create a New Note that opens
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    label="No line" />
            </form>

            <Button
                className={classes.btn}
                onClick={() => console.log('you clicked me')}
                type= "submit"
                color= "secondary"
                variant= "contained"
                endIcon= {<KeyboardArrowRightIcon />}
            >       
                Submit
            </Button>
        </Container>
    )}