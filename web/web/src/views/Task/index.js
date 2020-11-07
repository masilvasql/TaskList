import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Redirect } from "react-router-dom";

import * as S from "./style";

//API
import api from "../../services/api";

//COMPONENTES
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import typeIcons from "../../utils/typeIcons";
import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/hour.png";

//match => são os parâmetros que vem por url
function Task({ match }) {
  const [redirect, setRedirect] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddres] = useState("00:1D:7D:B2:34:19");

  async function lateVerify() {
    await api.get(`/task/filter/late/00:1D:7D:B2:34:19`)
      .then((resp) => {
        setLateCount(resp.data.length);
      }).catch((error) => {
      });
  }

  async function LoadTaskDetail() {
    await api.get(`/task/${match.params.id}`)
      .then((resp) => {
        setType(resp.data.type);
        setTitle(resp.data.title);
        setDescription(resp.data.description);
        setDate(format(new Date(resp.data.when), "yyyy-MM-dd"));
        setHour(format(new Date(resp.data.when), "HH:mm"));
        setDone(resp.data.done);
      });
  }

  function validaCampos() {
    if (!title) {
      return alert("Favor preencher o título!");
    } else if (!description) {
      return alert("Favor preencher a descrição!");
    } else if (!date) {
      return alert("Favor preencher o Data!");
    } else if (!hour) {
      return alert("Favor preencher o Hora!");
    } else if (!type) {
      return alert("O Tipo da Tarefa é obrigatório");
    } else {
      return true;
    }
  }

  async function Delete() {
    await api.delete(`/task/${match.params.id}`)
      .then((resp) => {
        setRedirect(true);
      }).catch((err) => {
        alert("Ocorreu um erro ao deletar a tarefa " + err);
      });
  }

  async function Save() {
    if (validaCampos()) {
      if (match.params.id) {
        await api.put(`/task/${match.params.id}`, {
          done,
          macaddress,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000Z`,
        })
          .then((resp) => {
            setRedirect(true);
          }).catch((error) => {
          });
      } else {
        await api.post(`/task`, {
          macaddress,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000Z`,
        })
          .then((resp) => {
            setRedirect(true);
          }).catch((error) => {
          });
      }
    }
  }

  useEffect(() => {
    lateVerify();
    if (match.params.id) {
      LoadTaskDetail();
    }
  }, []);
  //se colocar no colchetes o parametro, chama a
  //função e carrega todas as tarefas com o estado padrão e toda a vez que o estado mudar

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header lateCount={lateCount} />

      <S.Form>
        <S.TypeIcons>
          {typeIcons.map((icon, index) => (
            index > 0 &&
            <button type="button" onClick={() => setType(index)}>
              <img
                src={icon}
                alt="Tipo da Tarefa"
                className={type && type != index && "inative"}
              />
            </button>
          ))}
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input
            type="text"
            placeholder="Título da tarefa"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows={5}
            placeholder="Detalhes da Tarefa..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="Título da tarefa"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input
            type="time"
            placeholder="Título da tarefa"
            onChange={(e) => setHour(e.target.value)}
            value={hour}
          />
        </S.Input>

        <S.Options>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={() => setDone(!done)}
            />
            <span>CONCLUÍDO</span>
          </div>
          <button type="button" onClick={Delete}>EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>
      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default Task;
