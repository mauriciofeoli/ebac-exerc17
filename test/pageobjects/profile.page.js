class ProfilePage {
  get profileName() {
    return $('//*[@text="EBAC Cliente" or @content-desc="profile-name" or contains(@text, "Cliente")]');
  }

  get logoutButton() {
    return $('//*[@text="Logout" or @content-desc="Logout" or contains(@text, "Sair")]');
  }

  async waitForProfile() {
    await this.profileName.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Perfil não foi exibido após o login.' });
  }

  async getProfileLabelText() {
    return (await this.profileName.getText()).trim();
  }
}

module.exports = new ProfilePage();
