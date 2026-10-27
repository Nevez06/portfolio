# Portfólio — plano de página (GradientDeck)

Situação: Extend (site estático existente). Modo: Persuade (empregadores e clientes).
Referência: `index.html`; manter componentes, cores, espaçamento e tipografia existentes.
Tarefa do visitante: avaliar projetos e tecnologias e acessar o contato sem interpretar protótipos como produtos comerciais.
Ideia própria: registro de desenvolvimento do EventX, que revela decisões e limitações reais da execução.
Ações: explorar projetos públicos e entrar em contato. Evitar depoimentos inventados e falsas demos.
Estado: atualizado em 27/10/2026. Revisitar em 390, 768 e 1440 pixels.

## Revisão mobile — 27/10/2026

Reutilizar `.nav`, `.button`, `.project`, `.cert-summary`, `.event-row`, `.project-record` e tokens semânticos existentes. Novos tokens: escala de espaçamento (4–48px), tipos (12/14/16px), alvo de toque (44px), altura do cabeçalho, borda, foco e raio de controles; representam valores recorrentes já usados no site.

Mudanças: leitura e toque maiores; certificados em linhas e eventos com data acima do título no mobile; menu com foco e fechamento previsíveis; tema aplicado antes da pintura. Mantidos todos os projetos, certificados, descrições, links, imagens e arquivos da skill. CSS global preservado, correções anexadas ao final.

Verificação: JavaScript e CSS analisados; comparação automática confirmou textos e links preservados. Testes DOM passaram para menu, Escape, foco, clique externo, redimensionamento, tema persistido, storage bloqueado e disclosure de certificados. Uma revisão independente corrigiu conflito de display no cabeçalho e retorno de foco.

Pendente: renderizar em 320/390/768/1440, medir overflow, alvos reais, fontes e contraste nos dois temas. A tentativa de executar Playwright falhou por ausência de Chromium; o download do navegador também falhou. Nenhuma captura ou validação visual foi simulada. Nenhum conteúdo de exemplo novo foi criado.
