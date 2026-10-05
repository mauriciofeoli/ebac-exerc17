const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');

describe('Fluxo de login no app EBAC Shop', () => {
  it('deve realizar login com usuário válido e validar o perfil', async () => {
    await HomePage.waitForHome();
    await HomePage.openLogin();

    const email = 'cliente@ebac.com.br';
    const password = '123456';

    await LoginPage.login(email, password);
    await ProfilePage.waitForProfile();

    const profileText = await ProfilePage.getProfileLabelText();
    expect(profileText).toContain('Cliente');
  });
});
