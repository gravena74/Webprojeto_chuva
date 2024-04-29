describe('checa elementos básicos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('titulo do trabalho existe', () => {
    cy.get('.titulo_h2').contains('Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP');
    cy.compareSnapshot('Trabalho - Base');
  });

  it('botão de expandir resumo existe', () => {
    cy.get('.botao_expandir').contains('ver mais');
    cy.compareSnapshot('Trabalho - Resumo expandido');
  });

  it('botão de criar tópico existe', () => {
    cy.get('.botaoCriacao').contains('criar tópico');
  });

  it('expandir tópico funciona', () => {
    cy.get('#topicoPronto2').click();
    cy.get('.comentarios').should('exist');
    cy.compareSnapshot('Trabalho - Card de topico expandido');
  });

  it('clicar em `criar tópico` exibe o formulário', () => {
    cy.get('button.botaoCriacao').click();
    cy.get('.botao_envia').contains('Enviar')
    cy.get('.assunto').contains('Assunto');
    cy.get('.conteudo').contains('Conteúdo');
    cy.get('.p_content').invoke('attr', 'placeholder').should('contain', 'Defina um tópico sucinto para notificar os autores...');
    cy.compareSnapshot('Trabalho - Criando novo topico');
  });

  it('enviar o formulário exibe mensagem de sucesso', () => {
    cy.get('button.botaoCriacao').click();
    cy.get('.botao_envia').click();
    cy.get('.aguardando_feedback').contains('Aguardando feedback dos autores');
    cy.compareSnapshot('Trabalho - Topico enviado');
  });

})