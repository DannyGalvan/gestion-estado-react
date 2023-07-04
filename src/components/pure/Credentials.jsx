import React from "react";

export const Credentials = ({ user }) => {
  return (
    <div>
      Token de inicio sesion:{" "}
      {user.loged
        ? user.token
        : user.fetching
        ? "Cargando..."
        : "No se ha iniciado sesion"}
    </div>
  );
};
