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
    cy.get('input[placeholder="Nome"]').type('João Souza')
    cy.get('input[placeholder="E-mail"]').type('joao@email.com')
    cy.get('input[placeholder="Telefone"]').type('11988888888')
    cy.contains('Adicionar').click()

    cy.contains('Editar').first().click()

    cy.get('input[placeholder="Nome"]').clear().type('João Editado')
    cy.contains('Salvar').click()

    cy.contains('João Editado').should('exist')
  })

  it('Deve remover um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Contato Remover')
    cy.get('input[placeholder="E-mail"]').type('remover@email.com')
    cy.get('input[placeholder="Telefone"]').type('11977777777')
    cy.contains('Adicionar').click()

    cy.contains('Excluir').first().click()

    cy.contains('Contato Remover').should('not.exist')
  })

})
