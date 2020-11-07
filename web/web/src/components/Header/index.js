import React, { useState, useEffect } from "react";
import * as S from "./style";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/00:1D:7D:B2:34:19`)
      .then((resp) => {
        setLateCount(resp.data.length);
      }).catch((error) => {
      });
  }

  useEffect(() => {
    lateVerify();
  }, []);

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"></img>
      </S.LeftSide>

      <S.RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="divider" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="divider" />
        <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        {lateCount &&
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
