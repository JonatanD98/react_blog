import classes from "./Card.module.css";

//Card component for universal card styles
const Card = (props) => {
  return (
    <div className={`${props.className} ${classes.card}`}>{props.children}</div>
  );
};

export default Card;
