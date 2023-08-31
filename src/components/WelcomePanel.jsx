import { useContext } from "react";
import { CurrentUserContext } from "../App";
import Panel from "./Panel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import { useUser } from "./UserContext";

export default function WelcomePanel() {
  const { user } = useUser()
  return (
    <Panel title="Welcome">
      {user !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}
