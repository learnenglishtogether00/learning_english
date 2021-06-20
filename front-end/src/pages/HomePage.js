import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import WordAutoComplete from "../components/WordAutoComplete";
import WordDetailCard from "../components/WordDetailCard";

const HomePage = () => {
  const [detailWord, setDetailWord] = useState();

  return (
    <div>
      <Grid container direction="row" justify="center">
        <Grid item md={6}>
          <WordAutoComplete setDetailWord={setDetailWord} />
          {detailWord && detailWord.word && (
            <WordDetailCard detailWord={detailWord} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
