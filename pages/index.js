import Topo from "../componentes/Topo";
import Base from "../componentes/Base";
import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
 
function Home(){
    return(
  <div>
    <Head><title>Olá as musiquinhas</title></Head>
    <Topo/>
    <div className={styles.album}>
      <a href='albums'>Albuns pá escuta</a>
    </div>
    <Base/>
  </div>
    )
}
export default Home;