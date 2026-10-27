# Sistema de design — Portfólio de João Antônio Neves

## Público e objetivo
O site apresenta trabalhos acadêmicos, projetos pessoais e formação para recrutadores e pequenos clientes de desenvolvimento. Prioridades: projetos verificáveis, contatos funcionais e autoria honesta.

## Fonte dos padrões atuais
- **Cores:** `index.html`, CSS `:root` e `[data-theme=light]`. `--bg` (fundo), `--panel` (superfície), `--text` (texto), `--muted` (apoio), `--line` (bordas) e `--accent` (CTA). Identificadas diretamente nas variáveis (alta confiança).
- **Tipos:** Space Grotesk para títulos e DM Sans para leitura e controles, conforme fontes carregadas no cabeçalho (alta).
- **Composição:** `--container:1180px`, cabeçalho fixo, hero de duas colunas, projetos, sobre, competências, certificados e contato (alta).
- **Componentes:** `.button`, `.project`, `.tags`, `.cert-item`, `.project-record`, nav responsiva e alternância claro/escuro (alta).
- **Runtime:** HTML + CSS + JS estáticos publicados em GitHub Pages. Sem build, backend ou dependência do GradientDeck no navegador.

## Evidências e linguagem
- **EventX:** iniciado pelo próprio João; protótipos não concluídos. Frontend Next.js/TypeScript privado e exemplos públicos de API C#/.NET. Não representar como produto lançado.
- **ScanPlant:** colaboração em equipe. Nunca atribuir sozinho a João.
- **Formação:** Fatec ADS em andamento, técnico ETEC concluído e certificados de cursos e eventos, não experiência profissional formal.
- Sem inventar clientes, empresas, métricas, datas, funcionalidades ou depoimentos.

## Princípio editorial
O primeiro viewport responde: "Que tipo de tecnologia João pratica, que prova existe e como o contato?" A ficha do EventX mostra trabalho e limites reais, sem um terminal falso.

## Qualidade
Manter foco de teclado visível, alvos de toque, contraste, link externo seguro, HTML semântico, tema claro/escuro e preferências de movimento reduzido. Validar 1440px, 768px e 390px nas alterações futuras.

## Integração de autoria
GradientDeck (MIT) em `.agents/skills/gradientdeck` orienta agentes como Codex e Cursor durante edição do repositório. Não deve ser importada como pacote JS no site.
