import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

const Notfoundrouter = () => {
  return (
    <div className="notfound-container">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to={"/"}>
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
      />
    </div>
  );
};

export default Notfoundrouter;
