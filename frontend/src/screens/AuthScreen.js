import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

import React, { useEffect, useState, useContext } from "react";
import axios from "../utils/axiosHelper";
import AuthContext from "../context/AuthContext";

const LoginScreen = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const { setLogin } = useContext(AuthContext);
  let history = useHistory();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/signin", form)
      .then((res) => {
        const isLoggedIn = Boolean(res.data.token);
        localStorage.setItem("loggedIn", isLoggedIn);
        setLogin(isLoggedIn);
        history.push("/dashboard");
      })
      .catch(() => setOpen(true));
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Get started</DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            value={form.email}
            placeholder="awesome@iam.com"
            margin="dense"
            id="email"
            label="Enter email"
            type="textnhn"
            fullWidth
            className="form-control"
          />
          <TextField
            autoFocus
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            value={form.password}
            margin="dense"
            id="pass"
            label="Enter password"
            type="password"
            fullWidth
            className="form-control"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} type="submit" color="primary">
            Sign-In
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginScreen;
