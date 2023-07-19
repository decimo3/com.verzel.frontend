import React, { useState, useEffect } from 'react';
import { User } from '../Models/User';
import { BASE_URL } from '../environment';

export default function Login() {
  const [user, setUser] = useState("");
  const [paswd, setPaswd] =useState("");

  const PostUser = async (userJson) => {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userJson
    }
    return await fetch(BASE_URL + "/login", request)
    .then((data) => {
      return data.json();
    });
  }
  const ActionLogar = async (user, paswd) => {
    try {
      const u = new User(user, paswd);
      const userJson = JSON.stringify(u);
      const response = PostUser(userJson);
      console.log(response);
      if(response != null) {
        alert(`Usuário logado: ${response.token.user}`)
      }
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    ActionLogar(user, paswd);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form method='post' onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Usuário</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Digite seu usuário"
                    value={user} onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Digite sua senha"
                    value={paswd} onChange={(e) => setPaswd(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-block">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
