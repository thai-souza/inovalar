import { useState } from "react"
import {URL} from "../config"

export const NAV = [
    ["Início","#inicio"],
    ["Soluções","#solucoes"],
    ["Projetos","#projetos"],
    ["Para empresas","#empresas"],
    ["Sobre nós","#sobre"],
    ["Contato","#contato"]
];

export default function Header () {

    const [open, setOpen] = useState(false);

    return(
        <header className="header">
            <div className="container header-container">
                <a href="#inicio" aria-label="Inovalar"><img src="assets/img/logo inovalar.svg" alt="" /></a>
                <nav className={"nav" + (open ? " open" : "")} aria-label="Principal">
                    {NAV.map(([t, a]) => <a key={a} href={a} onClick={() => setOpen(false)}>{t}</a>)}
                    <a className="btn btn--red nav-cta" href={URL}>Solicitar orçamento</a>       
                </nav>
                <a className="btn btn--red header-cta" href={URL}>Solicitar orçamento</a>
            <button className="burger" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
            </div>
        </header>
    )
    
}