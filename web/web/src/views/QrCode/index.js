import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Qr from "qrcode.react";

import * as S from "./style";

//COMPONENTES
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMack() {
    if (mac) {
      await localStorage.setItem("@todo/macaddress", mac);
      setRedirect(true);
      window.location.reload();
    } else {
      alert("Macaddres é obrigatório");
    }
  }

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />
      <S.Content>
        <h1>CAPTURE O QR CODE PELO CELULAR</h1>
        <p>suas atividades serão sincronizadas com a de seu celular</p>
        <S.QrCodeArea>
          <Qr value="getmacaddres" size={350} />
        </S.QrCodeArea>
        <S.ValidationCode>
          <span>Digite a numeração que apareceu no seu celular</span>
          <input
            type="text"
            onChange={(e) => setMac(e.target.value)}
            value={mac}
          />
          <button type="button" onClick={SaveMack}>SINCRONIZAR</button>
        </S.ValidationCode>
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default QrCode;
