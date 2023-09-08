const btnContactUs = '#contact-link [title="Contact us"]';
const txtEmail1 = '#email'
const txtOrderRef = '#id_order'
const txtMsg = '#message'

Cypress.Commands.add('addForm', () => {
    cy.visit(Cypress.env('url'))
    cy.get(btnContactUs).click();
    cy.get('select').select('Customer service') 
    cy.get(txtEmail1).type('azmaarsheikh@yahoo.com');
    cy.get(txtOrderRef).type('12345');
    cy.get(txtMsg).type('asdasd');
    cy.get('input#fileUpload').selectFile('cypress\\fixtures\\file.json');
    cy.get('#submitMessage').click();

  })
  