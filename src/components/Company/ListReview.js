import React, { Component, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReviewCard from "./ReviewCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { FormGroup, Input, Button, TextareaAutosize } from "@material-ui/core";
import CompanyService from "../../services/CompanyService";
import _clone from "lodash/clone";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  clamp: {
    position: "relative",
    height: "2em",
    overflow: "hidden",
    "&:after": {
      content: '""',
      textAlign: "right",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "40%",
      height: "1.5em",
      background: `linear-gradient(to right, ${fade(
        theme.palette.background.paper,
        0
      )}, ${theme.palette.background.paper} 50%)`,
    },
  },
}));
const ListReview = ({ listReviews, info }) => {
  const classes = useStyles();
  const [content, setContent] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const history = useHistory();
  useEffect(() => {
    console.log(listReviews);
    const list = buildItems(listReviews);
    setItems(list);
  }, [listReviews]);

  const buildItems = (listRev) => {
    if (listRev.length > 0) {
      const list = _clone(listRev).map((i) => ({
        id: i._id,
        content: i.content,
        rating: i.rating,
        employeeId: i.employeeId,
        createAt: new Date(i.createAt),
      }));
      console.log(list);
      return list;
    } else return [];
  };
  const handleSubmit = () => {
    const postData = {
      content: content,
      rating: rating,
      employeeId: "6002b6d1b3fe501c80236eb1",
      companyId: info.id,
    };
    if (localStorage.getItem("token"))
      CompanyService.writeReview(postData)
        .then((response) => {
          console.log(response);
          //history.push(`/client-company?id=${info.id}`);
          window.location.reload(true);
        })
        .catch((e) => {
          console.log(e);
        });
    else alert("Vui lòng đăng nhập để đăng review!");
  };
  return (
    <Grid>
      <Grid style={{ marginBottom: "30px" }}>
        <Card style={{ borderColor: "black", border: "solid 1px" }}>
          <CardHeader
            title="Write a review"
            titleTypographyProps={{ variant: "h4" }}
          ></CardHeader>
          <CardContent>
            <FormGroup>
              <Typography component="p" className={classes.clamp}>
                Overall rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(e) => {
                  e.preventDefault();
                  setRating(e.target.value);
                }}
              />
              <Typography component="p" className={classes.clamp}>
                Your review
              </Typography>
              <TextareaAutosize
                rowsMin={3}
                placeholder="Enter content"
                value={content}
                onChange={(e) => {
                  e.preventDefault();
                  setContent(e.target.value);
                }}
              />
              <Button
                style={{
                  width: "100px",
                  marginTop: "10px",
                }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </FormGroup>
          </CardContent>{" "}
        </Card>
      </Grid>
      <Typography component="p" variant="h4" style={{ marginBottom: "20px" }}>
        Reviews
      </Typography>
      <span className="flexSpacer" />
      <Grid>
        {items.length > 0
          ? items.map((item, i) => {
              return (
                <ReviewCard
                  reviewerName={item.id}
                  createDate={item.createDate}
                  avatar={
                    <Avatar
                      aria-label="Post"
                      style={{ backgroundColor: "red" }}
                    >
                      R
                    </Avatar>
                  }
                  rating={item.rating}
                  content={item.content}
                />
              );
            })
          : null}
      </Grid>
    </Grid>
  );
};
export default ListReview;
