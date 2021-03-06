import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


import { Container } from '@material-ui/core';


import NearestReviewListView from '../Home/NearestReviewListView';


const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "white",
    // marginTop: "12px",
    // padding: "26px",
  },
}));


const CompanyJobListView = ({ info }) => {
  const classes = useStyles();

  return <Container className={classes.card} maxWidth="lg">
    <NearestReviewListView />
  </Container>;;
}


export default CompanyJobListView;