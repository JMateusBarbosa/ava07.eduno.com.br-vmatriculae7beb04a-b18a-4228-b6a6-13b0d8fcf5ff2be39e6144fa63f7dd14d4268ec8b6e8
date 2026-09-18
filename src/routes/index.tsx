import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb } from "lucide-react";
import logoAsset from "../assets/logo-iguacu-hd.png.asset.json";
import portraitAsset from "../assets/professora.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eduno" },
      {
        name: "description",
        content: "Declaração de cursando da Faculdade Iguaçu.",
      },
      { property: "og:title", content: "Declaração de Cursando | Faculdade Iguaçu" },
      { property: "og:description", content: "Declaração de cursando da Faculdade Iguaçu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="certificate-page">
      <aside className="portrait-panel" aria-label="Retrato institucional">
        <img src={portraitAsset.url} alt="Professora em uma sala de aula" />
      </aside>

      <section className="declaration-panel">
        <header className="institution-heading">
          <div className="institution-copy">
            <p className="institution-name">FACULDADE IGUAÇU - FI</p>
            <p className="institution-document">CNPJ 18.739.510/0001-40</p>
            <p className="institution-address">AV BOTUCARIS, 1590, CENTRO, CAPANEMA, PR</p>
          </div>
          <img className="institution-logo" src={logoAsset.url} alt="Faculdade Iguaçu" />
        </header>

        <div className="declaration-copy">
          <h1>DECLARAÇÃO DE CURSANDO</h1>
          <p className="course-line">
            <span>Curso: </span>
            <strong>PREVENÇÃO E COMBATE A INCÊNDIOS FLORESTAIS</strong>
          </p>
          <dl className="student-data">
            <div><dt>Aluno:</dt><dd>TIAGO ARAÚJO DA SILVA</dd></div>
            <div><dt>CPF:</dt><dd>702.521.932-02</dd></div>
            <div><dt>Matrícula:</dt><dd>017703EDC-514916</dd></div>
            <div><dt>Controle:</dt><dd>e7beb04a-b18a-4228-b6a6-13b0d8fcf5ff</dd></div>
          </dl>
        </div>

        <footer className="platform-footer">
          <div className="platform-footer-content">
            <Lightbulb className="footer-bulb" aria-hidden="true" />
            <span className="eduno">EdunoEAD</span>
            <span className="powered">powered by</span>
            <span className="hotsystems"><strong>hot</strong><span>systems</span></span>
          </div>
        </footer>
      </section>
    </main>
  );
}
