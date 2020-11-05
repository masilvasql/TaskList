import React, { useState, useEffect } from "react";
import * as S from "./style";

//API
import api from "../../services/api";

//COMPONENTES
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

function Home() {
  const [filterActived, setFilterActived] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState()

  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/06-00-00-00-00-00`)
      .then((resp) => {
        setTasks(resp.data);
      }).catch((error) => {
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/06-00-00-00-00-00`)
      .then((resp) => {
        setLateCount(resp.data.length)
      }).catch((error) => {
      });
  }

  function notification() {
    setFilterActived('late')
  }

  useEffect(() => {
    loadTasks();
    lateVerify()
  }, [filterActived]);
  //se colocar no colchetes o parametro, chama a
  //função e carrega todas as tarefas com o estado padrão e toda a vez que o estado mudar

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={notification} />
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard
            title={"Todos"}
            actived={filterActived === "all"}
          />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard
            title={"Hoje"}
            actived={filterActived === "today"}
          />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard
            title={"Semana"}
            actived={filterActived === "week"}
          />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard
            title={"Mês"}
            actived={filterActived === "month"}
          />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard
            title={"Ano"}
            actived={filterActived === "year"}
          />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>TAREFAS {filterActived === 'late' ? 'ATRASADAS' : ''}</h3>
      </S.Title>

      <S.Content>
        {tasks.map((task) => (
          <TaskCard
            type={task.type}
            title={task.title}
            when={task.when}
          />
        ))}
      </S.Content>

      <Footer />
    </S.Container>
  );
}

export default Home;
