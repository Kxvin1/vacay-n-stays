import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";

// don't use this
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import User from "./components/User";

// new stuff
import Header from "./components/Header/Header";
import SpotForm from "./components/SpotForm/SpotForm";
import YourSpots from "./components/YourSpots/YourSpots";
import Spots from "./components/Spots/Spots";
import SpotEditForm from "./components/SpotEditForm/SpotEditForm";

//Google api
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const string =
  "A-I-z-a-S-y-C-w-m-w-T-Q-L-Q-R-J-K-Z-D-H-P-V-3-1-b-o-Z-K-d-S-D-K-z-C-y-Y-p-F-g";
const string2 = string.split("-").join("");

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: string2,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Header isLoaded={loaded} />
      <Switch>
        <Route path="/" exact={true}>
          <Spots />
        </Route>
        <ProtectedRoute path="/your-spots" exact={true}>
          <YourSpots />
        </ProtectedRoute>
        <ProtectedRoute path="/spot/new" exact={true}>
          <SpotForm />
        </ProtectedRoute>
        <ProtectedRoute path={`/spots/edit/:spotId`}>
          <SpotEditForm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
