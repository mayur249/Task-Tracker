import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import Task from "./Tasks";

const Header = ({ title, clickAdd, showAdd }) => {
  const onClick = () => {
    clickAdd();
  };

  const Location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {Location.pathname === '/' && <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onclick={onClick}
      />}
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
