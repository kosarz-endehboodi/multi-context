
import { useUser } from "./UserContext";

export default function Greeting() {
 const {user}= useUser()
  return <p>You logged in as {user.name}.</p>;
}
