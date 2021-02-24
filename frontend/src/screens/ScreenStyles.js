import { makeStyles } from "@material-ui/core/styles";

const CartDialogStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    color:"white",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const DashboardStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default CartDialogStyles;
export { DashboardStyles };
