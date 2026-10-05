class HomePage {
  get loginButton() {
    return $('//*[@text="Login" or @content-desc="Login" or contains(@text,"Entrar")]');
  }

  get homeTitle() {
    return $('//*[@text="Home" or @content-desc="Home"]');
  }

  async waitForHome() {
    await this.homeTitle.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Tela inicial não foi carregada.' });
  }

  async openLogin() {
    await this.loginButton.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Botão de Login não foi encontrado.' });
    await this.loginButton.click();
  }
}

module.exports = new HomePage();
