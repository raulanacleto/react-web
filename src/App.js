import React, { useEffect, useState } from "react";
import Header from "./Header";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [github_username, setGithubusername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 3000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    console.log("chamando POST");
    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });
    console.log("retorno:", response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubusername(e.target.value)}
            ></input>
          </div>
          <div className="input-block">
            <label htmlFor="">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            ></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/5428765?s=460&v=4"></img>
              <div className="user-info">
                <strong>raul anacleto</strong>
                <span>react, java, angular</span>
              </div>
            </header>
            <p>
              trabalha teste teste teste teste teste teste teste teste teste
              teste teste teste teste{" "}
            </p>
            <a href="http://github.com/raulanacleto">acessar perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
