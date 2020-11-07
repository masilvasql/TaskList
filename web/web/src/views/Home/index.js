import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/00:1D:7D:B2:34:19`)
      .then((resp) => {
        setTasks(resp.data);
      }).catch((error) => {
      });
  }

  function notification() {
    setFilterActived("late");
  }

  useEffect(() => {
    loadTasks();
  }, [filterActived]);
  //se colocar no colchetes o parametro, chama a
  //função e carrega todas as tarefas com o estado padrão e toda a vez que o estado mudar

  return (
    <S.Container>
      <Header clickNotification={notification} />
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
        <h3>TAREFAS {filterActived === "late" ? "ATRASADAS" : ""}</h3>
      </S.Title>

      <S.Content>
        {tasks.map((task) => (
          <Link to={`/task/${task._id}`}>
            <TaskCard
              type={task.type}
              title={task.title}
              when={task.when}
              done={task.done}
            />
          </Link>
        ))}
      </S.Content>

      <Footer />
    </S.Container>
  );
}

export default Home;
