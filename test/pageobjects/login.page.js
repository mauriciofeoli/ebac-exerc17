class LoginPage {
  get emailInput() {
    return $('//*[@text="Email" or @hint="Email" or @resource-id="emailInput"]');
  }

  get passwordInput() {
    return $('//*[@text="Password" or @hint="Password" or @resource-id="passwordInput"]');
  }

  get submitButton() {
    return $('//*[@text="Login" or @content-desc="Login" or @resource-id="loginButton"]');
  }

  get errorMessage() {
    return $('//*[@text and contains(@text, "err") or contains(@text, "invalid")]');
  }

  async login(email, password) {
    await this.emailInput.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Campo de e-mail não encontrado.' });
    await this.emailInput.setValue(email);

    await this.passwordInput.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Campo de senha não encontrado.' });
    await this.passwordInput.setValue(password);

    await this.submitButton.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Botão de login não encontrado.' });
    await this.submitButton.click();
  }
}

module.exports = new LoginPage();
