class Sidebar {
  get accessSidebar() {
    return cy.get("[id='react-burger-menu-btn']");
  }

  get sidebarMenu() {
    return cy.get("[class='bm-menu-wrap']");
  }

  get logoutButton() {
    return cy.get("[ id='logout_sidebar_link']");
  }
}

export default new Sidebar();
