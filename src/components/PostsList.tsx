import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const PostsList = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" marginTop="3" p="10" m="10">
        <GridItem>post1</GridItem>
        <GridItem>post1</GridItem>
        <GridItem>post1</GridItem>
        <GridItem>post1</GridItem>

        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>

        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>

        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>
        <GridItem marginTop="20">post1</GridItem>
    </Grid>
  );
};

export default PostsList;
