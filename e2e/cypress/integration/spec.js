const token = Cypress.env('bearer')

describe('Verifying Alerts', () => {
  it('Loads main page', () => {
    cy.visit('/')
    cy.contains('System Overview')
  })

  it('Contains active alarm', () => {
    cy.get('.typography-i4uj7n-0.ikMmsz').click({force: true})
    cy.contains('system.cpu')
  })

  it('Returns all good.', () => {
    cy.request({method: 'GET', url: 'http://netdata:19999/api/v1/manage/health?cmd=RESET', headers: {'X-Auth-Token': + token}})
      .its('body')
      .should('include', 'All health checks and notifications are enabled')

  })

  it('Returns all good.', () => {
    cy.request({url: 'http://netdata:19999/api/v1/manage/health?cmd=DISABLE ALL', headers: {'X-Auth-Token': + token}})
    cy.contains('system.cpu')
  })
})