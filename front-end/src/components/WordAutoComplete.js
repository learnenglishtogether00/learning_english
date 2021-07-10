import React, { useEffect, useState } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import { debounce } from "../utils";

const useStyles = makeStyles((theme) => {
  return {
    autoComplete: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    renderInput: {
      background: "white",
      color: "black",
    },
  };
});

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog({ setDetailWord }) {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState({
    word: "",
  });
  const [curWordData, setCurWordData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchWordByEN = (newKeyWord) => {
    axios
      .get(`http://localhost:5035/api/wordsByEN/${newKeyWord}`)
      .then(({ data: res }) => {
        setCurWordData(res.data);
      });
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (inputValue) {
        fetchWordByEN(inputValue);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  const handleClose = () => {
    setDialogValue({
      word: "",
    });

    toggleOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      word: dialogValue.word,
      related: dialogValue.related,
      desc: dialogValue.desc,
      vnWords: dialogValue.vnWords,
      wordType: dialogValue.wordType,
    });
    setDetailWord({
      word: dialogValue.word,
      related: dialogValue.related,
      desc: dialogValue.desc,
      vnWords: dialogValue.vnWords,
      wordType: dialogValue.wordType,
    });

    handleClose();
  };

  return (
    <div>
      <Autocomplete
        className={classes.autoComplete}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                word: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              word: newValue.inputValue,
            });
          } else {
            setValue(newValue);
            setDetailWord({ ...newValue });
          }
        }}
        onInputChange={(event, newInputValue) => {
          if (newInputValue) {
            setInputValue(newInputValue);
          }
          setCurWordData([]);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              word: `Thêm từ mới "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={curWordData}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.word;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.word}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Hãy nhập từ bạn cần tìm"
            variant="outlined"
            className={classes.renderInput}
          />
        )}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth={true}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Thêm từ mới</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Hãy điền đầy đủ các thông tin cần thiết cho từ nhé!
            </DialogContentText>
            <Grid container justify="space-between">
              <Grid item md={6}>
                <TextField
                  fullWidth
                  autoFocus
                  id="word"
                  value={dialogValue.word}
                  onChange={(event) =>
                    setDialogValue({ ...dialogValue, word: event.target.value })
                  }
                  label="Từ tiếng anh"
                  type="text"
                />
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <InputLabel id="wordTypeLabel">Loại từ</InputLabel>
                  <Select
                    labelId="wordTypeLabel"
                    id="wordType"
                    onChange={(event) =>
                      setDialogValue({
                        ...dialogValue,
                        wordType: event.target.value,
                      })
                    }
                  >
                    <MenuItem value={"Danh từ (N)"}>Danh từ (N)</MenuItem>
                    <MenuItem value={"Động từ (V)"}>Động từ (V)</MenuItem>
                    <MenuItem value={"Tính từ (ADJ)"}>Tính từ (ADJ)</MenuItem>
                    <MenuItem value={"Trạng từ (ADV)"}>Trạng từ (ADV)</MenuItem>

                    <MenuItem value={"Khác"}>Khác</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  id="related"
                  onChange={(event) =>
                    setDialogValue({
                      ...dialogValue,
                      related: event.target.value,
                    })
                  }
                  label="Các từ đồng nghĩa (EN)"
                  type="text"
                  helperText={`Các từ cách nhau bằng dấu  "/"`}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  id="vnWords"
                  onChange={(event) =>
                    setDialogValue({
                      ...dialogValue,
                      vnWords: event.target.value,
                    })
                  }
                  label="Nghĩa tiếng việt (có thể nhiều từ đồng nghĩa)"
                  type="text"
                  helperText={`Các từ cách nhau bằng dấu  "/"`}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  id="desc"
                  onChange={(event) =>
                    setDialogValue({
                      ...dialogValue,
                      desc: event.target.value,
                    })
                  }
                  label="Mô tả"
                  type="text"
                  helperText="Dùng để ghi chú thêm"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Hủy
            </Button>
            <Button type="submit" color="primary">
              Thêm mới
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
