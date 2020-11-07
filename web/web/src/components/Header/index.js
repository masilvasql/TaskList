import React, { useState, useEffect } from "react";
import * as S from "./style";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import { Link } from "react-router-dom";
import api from "../../services/api";
import isConnected from "../../utils/isConnected";
import { Redirect } from "react-router-dom";

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();
  const [redirect, setRedirect] = useState(false);

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
      .then((resp) => {
        setLateCount(resp.data.length);
      }).catch((error) => {
      });
  }

  async function Logout() {
    localStorage.removeItem("@todo/macaddress");
    window.location.reload();
  }

  useEffect(() => {
    if (!isConnected) {
      setRedirect(true);
    }
    lateVerify();
  }, []);

  return (
    <S.Container>
      {redirect && <Redirect to="/qrcode" />}
      <S.LeftSide>
        <img src={logo} alt="Logo"></img>
      </S.LeftSide>

      <S.RightSide>
        {!redirect &&
          <>
            <Link to="/">INÍCIO</Link>
            <span className="divider" />
            <Link to="/task">NOVA TAREFA</Link>
            <span className="divider" />
          </>}
        {!isConnected
          ? <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
          : <button type="button" onClick={Logout}>SAIR</button>}

        {lateCount > 0 && !redirect &&
          <>
            <span className="divider" />
            <button onClick={clickNotification} id="notification">
              <img src={bell} alt="Notificação"></img>
              <span>{lateCount}</span>
            </button>
          </>}
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
