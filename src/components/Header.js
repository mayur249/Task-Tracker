import PropTypes from "prop-types";
import Button from "./Button";
import Task from "./Tasks";

const Header = ({ title, clickAdd, showAdd }) => {
  const onClick = () => {
    clickAdd();
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onclick={onClick}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
