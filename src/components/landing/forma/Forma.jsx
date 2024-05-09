import React, { useEffect, useState } from "react";
import "./Forma1.css";
import { useNavigate } from "react-router-dom";
import firebase from "../../../firebaseConfig.js";

export const Forma = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   if (!loginEmail.includes("@")) {
  //     alert("Введите корректный email.");
  //     return;
  //   }
  //   if (loginPassword.length < 6) {
  //     alert("Пароль должен содержать не менее 6 символов.");
  //     return;
  //   }

  //   try {
  //     const userCredential = await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(loginEmail, loginPassword);

  //     const user = userCredential.user;

  //     const userInfo = {
  //       displayName: user.displayName || user.email,
  //       email: user.email,
  //     };

  //     console.log("Успешный вход пользователя:", userInfo);
  //     localStorage.setItem("userInfo", JSON.stringify(userInfo));

  //     if (
  //       loginEmail === "aktilek@gmail.com" &&
  //       loginPassword === "aktilekSILA"
  //     ) {
  //       console.log("Администратор вошел в систему.");
  //       navigate("/admin-page");
  //     } else {
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error("Ошибка входа:", error);
  //     alert("Такой учетной записи нет, или пароль неправильный!");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginEmail.includes("@")) {
      alert("Введите корректный email.");
      return;
    }
    if (loginPassword.length < 6) {
      alert("Пароль должен содержать не менее 6 символов.");
      return;
    }

    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(loginEmail, loginPassword);

      const user = userCredential.user;

      const userInfo = {
        displayName: user.displayName || user.email,
        email: user.email,
      };

      console.log("Успешный вход пользователя:", userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      if (
        loginEmail === "aktilek@gmail.com" &&
        loginPassword === "aktilekSILA"
      ) {
        console.log("Администратор вошел в систему.");
        navigate("/admin-page");
      } else if (
        loginEmail === "aktilek@gmail.com" &&
        loginPassword === "aktilek123"
      ) {
        console.log("Переход на страницу видео.");
        navigate("/videos");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
      alert("Такой учетной записи нет, или пароль неправильный!");
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!registerEmail.includes("@")) {
      alert("Введите корректный email для регистрации.");
      return;
    }
    if (registerPassword.length < 6) {
      alert("Пароль для регистрации должен содержать не менее 6 символов.");
      return;
    }

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(registerEmail, registerPassword);

      // Обновление профиля с displayName
      await userCredential.user.updateProfile({
        displayName: registerName,
      });

      console.log("Account created successfully:", userCredential);

      // Сохраняем данные пользователя в localStorage
      const newUser = {
        displayName: registerName, // Используйте имя, введенное при регистрации
        email: registerEmail,
      };
      localStorage.setItem("userInfo", JSON.stringify(newUser));
      alert("Регистрация прошла успешно!");
      navigate("/");
    } catch (error) {
      alert("Такой учетной записи уже есть, или пароль неправильный!");
    }
  };

  return (
    <div className="div body">
      <div className="block div">
        <div className="section div">
          <div className="container div">
            <div className="row full-height justify-content-center div">
              <div className="col-12 text-center align-self-center py-5 div">
                <div className="section pb-5 pt-5 pt-sm-2 text-center div">
                  <h6 className="mb-0 pb-3">
                    <span>Войти</span>
                    <span>Регистрация</span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto div">
                    <div className="card-3d-wrapper div">
                      <div className="card-front div">
                        <div className="center-wrap div">
                          <form
                            className="section text-center div"
                            onSubmit={handleLogin}
                          >
                            <h4 className="mb-4 pb-3">Войти</h4>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Ваш email"
                                id="logemail"
                                autoComplete="off"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Введите пароль"
                                id="logpass"
                                autoComplete="off"
                                value={loginPassword}
                                onChange={(e) =>
                                  setLoginPassword(e.target.value)
                                }
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button type="submit" className="btn mt-4">
                              войти
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="card-back div">
                        <div className="center-wrap div">
                          <div className="section text-center div">
                            <h4 className="mb-4 pb-3">Регистрация</h4>
                            <form
                              className="section text-center div"
                              onSubmit={handleRegistration}
                            >
                              <div className="form-group div">
                                <input
                                  type="text"
                                  name="logname"
                                  className="form-style"
                                  placeholder="Ваше имя"
                                  id="logname"
                                  autoComplete="off"
                                  value={registerName}
                                  onChange={(e) =>
                                    setRegisterName(e.target.value)
                                  }
                                />
                                <i className="input-icon uil uil-user"></i>
                              </div>
                              <div className="form-group mt-2 div">
                                <input
                                  type="email"
                                  name="logemail"
                                  className="form-style"
                                  placeholder="Ваш email"
                                  id="logemail"
                                  autoComplete="off"
                                  value={registerEmail}
                                  onChange={(e) =>
                                    setRegisterEmail(e.target.value)
                                  }
                                />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <div className="form-group mt-2 div">
                                <input
                                  type="password"
                                  name="logpass"
                                  className="form-style"
                                  placeholder="Введите пароль"
                                  id="logpass"
                                  autoComplete="off"
                                  value={registerPassword}
                                  onChange={(e) =>
                                    setRegisterPassword(e.target.value)
                                  }
                                />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <button type="submit" className="btn mt-4">
                                регистрация
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
