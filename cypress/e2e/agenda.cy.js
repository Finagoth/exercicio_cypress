describe('Testes da Agenda de Contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Lucas Teste')
    cy.get('input[placeholder="E-mail"]').type('lucas@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11993451499')

    cy.contains('button', 'Adicionar').click()

    cy.contains('Lucas Teste').should('exist')
  })

})