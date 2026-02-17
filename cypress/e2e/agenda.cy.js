describe('Testes Agenda de Contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluir um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Maria Silva')
    cy.get('input[placeholder="E-mail"]').type('maria@email.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.contains('Adicionar').click()

    cy.contains('Maria Silva').should('exist')
  })

  it('Deve alterar um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Lucas Silva')
    cy.get('input[placeholder="E-mail"]').type('lucas@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11988888823')
    cy.contains('Adicionar').click()

    cy.contains('Editar').first().click()

    cy.get('input[placeholder="Nome"]').clear().type('Lucas Alterado')
    cy.contains('Salvar').click()

    cy.contains('Lucas Alterado').should('exist')
  })

  it('Deve remover um contato', () => {
    
    cy.contains('Deletar').first().click()
  })

})
