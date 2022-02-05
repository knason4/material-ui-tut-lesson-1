import { Typography } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button'

export default function Notes() {
  return (
    <div>
      <Typography
          variant='h6'
          color= 'textSecondary'
          component= 'h2'
          gutterBottom
      >
          Create a New Note
      </Typography>

            <Button type= "submit">Submit</Button>
            <Button type= "submit" color='secondary' variant='outlined'>Submit</Button>
    </div>
  )
}
