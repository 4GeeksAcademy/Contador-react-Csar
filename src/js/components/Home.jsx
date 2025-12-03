import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [contador, setContador] = useState(0);

	useEffect (() => {
		const intervalo = setInterval (()=>{
			setContador(prevContador => prevContador +1);
		}, 1000);

		return () => {
			clearInterval(intervalo);
		};
	},[])

  return (
    <div className="text-center">
      <h1 className="titulo">Contador de Tiempo</h1>
        <h2 className="número">{contador}</h2>
      </div>
  );
};
export default Home;