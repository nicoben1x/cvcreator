import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";

export function About() {
    return (
      <>
        <h1>Usted es {useLocation().state.usuarioi.nombre}</h1>
      </>
    );
  }