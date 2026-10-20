import {NAV} from "./Header"
import { URL, FACEBOOK, INSTAGRAM, EMAIL } from "../config"

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div>
                    <img src="/assets/img/logo inovalar.svg" alt="Inovalar" />
                </div>
                <div>
                    <div><h4 className="eyebrow">Navegação</h4>{NAV.map(([t, a]) => <a key={a} href={a}>{t}</a>)}</div>
                </div>
                <div>
                    <h4 className="eyebrow">Soluções</h4>
                </div>
                <div>
                    <span><a href={URL}>WhatsApp</a></span>
                    <span><a href={INSTAGRAM}>Instagram</a></span>
                    <span><a href={FACEBOOK}>Facebook</a></span>
                    <span><a href={EMAIL}>E=mail</a></span>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 Inovalar Forros e Divisórias.</span>
                </div>
            </div>
        </footer>
    )
}