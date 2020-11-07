import React, { useState, useEffect } from "react";

import * as S from "./style";

//COMPONENTES
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function QrCode() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>CAPTURE O QR CODE PELO CELULAR</h1>
        <S.QrCodeArea>
        </S.QrCodeArea>
        <p>suas atividades serão sincronizadas com a de seu celular</p>
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default QrCode;
