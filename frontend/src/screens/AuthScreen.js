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
// import Switch from "@material-ui/core/Switch";
import { FormControl } from "@material-ui/core";

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
			.post("/user/signup", form)
			.then((res) => {
				const isLoggedIn = Boolean(res.data.token);
				localStorage.setItem("loggedIn", isLoggedIn);
				setLogin(isLoggedIn);
				history.push("/dashboard");
			})
			.catch(() => setOpen(true));
		axios
			.post("/user/login", form)
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
			<DialogTitle id="form-dialog-title">LOGIN</DialogTitle>

			<FormControl onSubmit={onSubmit}>
				<DialogContent>
					<TextField
						onChange={(e) => {
							setForm({ ...form, email: e.target.value });
						}}
						defaultValue={form.email}
						placeholder="awesome@iam.com"
						margin="dense"
						id="email"
						label="Enter email"
						type="text"
						fullWidth
						className="form-control"
					/>
					<TextField
						onChange={(e) => {
							setForm({ ...form, password: e.target.value });
						}}
						defaultValue={form.password}
						margin="dense"
						id="pass"
						label="Enter password"
						type="password"
						fullWidth
						className="form-control"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} type="submit" color="primary">
						Login
					</Button>
					<Button onClick={handleClose} type="submit" color="primary">
						Sign-Up
					</Button>
				</DialogActions>
			</FormControl>
		</Dialog>
	);
};

export default LoginScreen;
