import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';


import {
  Container,
  AppBar, Tabs, Tab, Typography, Box
} from '@material-ui/core';


import CompanyDescription from './CompanyDescription';
import CompanyJobs from './CompanyJobs';
import CompanyReviews from './CompanyReviews';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "white",
    marginTop: "12px",
    padding: "0px",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: "0px",
    margin: "0px",
    // width: 500,
  },
  MuiPaperElevation4: {
    boxShadow: "none",
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const CompanyTabView = () => {
  const classes = useStyles();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (<Container className={classes.card} maxWidth="lg">
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Thông tin chung" {...a11yProps(0)} />
          <Tab label="Thông tin tuyển dụng" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CompanyDescription />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CompanyJobs/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <CompanyReviews />
        </TabPanel>
      </SwipeableViews>
    </div>
  </Container>);
}


export default CompanyTabView;