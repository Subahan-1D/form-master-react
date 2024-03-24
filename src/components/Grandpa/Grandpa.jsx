import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
const Grandpa = () => {
    return (
        <div className="box ">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
            <section className="flexci">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;