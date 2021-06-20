import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: 275,
      marginTop: theme.spacing(2),
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
});

const WordDetailCard = ({ detailWord }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { word, wordType, vnWords, related, desc } = detailWord;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Tạo bởi EriHuynh
        </Typography>
        <Typography variant="h5" component="h2">
          {word}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {wordType}
        </Typography>
        <Typography variant="body1" component="p">
          {bull} <b>Nghĩa tiếng Việt: </b>
          {vnWords}
          <br />
          {bull} <b>Từ đồng nghĩa: </b>
          {related && !related.length > 0 ? `chưa cập nhật` : related}
          <br />
          {bull} <b>Mô tả: </b>
          {!desc ? `chưa cập nhật` : desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WordDetailCard;
