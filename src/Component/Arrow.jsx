import { Fab } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Arrow = ({ direction, handleClick }) => {
  return (
    <Fab
      style={{
        padding: "2em",
        backgroundColor: "unset",
        boxShadow: "unset",
        border: "1px solid"
      }}
      onClick={handleClick}
    >
      {direction === "right" ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </Fab>
  );
};

export default Arrow;
