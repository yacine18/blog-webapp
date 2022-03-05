import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

const PostsList = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)'  p="10" m="15">
      <GridItem>post1</GridItem>
      <GridItem>post1</GridItem>
      <GridItem>post1</GridItem>
      <GridItem>post1</GridItem>
    </Grid>
  )
}

export default PostsList