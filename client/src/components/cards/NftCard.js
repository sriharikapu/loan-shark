import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    maxWidth: 345,
    maxHeight: 500,
  },
  media: {
    height: 140,
  },
}

const NftCard = props =>  {
  const { classes, item = {} } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withStyles(styles)(NftCard)