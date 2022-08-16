describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should register a new skill', async () => {
    const inputNewSkill = await element(by.id('input-new-skill'));
    const buttonNewSkill = await element(by.id('button-add-skill'));
    const flatlistSkills = await element(by.id('flatlist-skills'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native\n');

    await buttonNewSkill.tap();

    await expect(flatlistSkills).toBeVisible();
  });

  it('should have the new skill', async () => {
    const inputNewSkill = await element(by.id('input-new-skill'));
    const buttonNewSkill = await element(by.id('button-add-skill'));
    
    await inputNewSkill.tap();
    await inputNewSkill.typeText('Testes E2E\n');
    
    await buttonNewSkill.tap();
    
    const newSkill = await element(by.id('text-skill-Testes E2E'));
    await expect(newSkill).toBeVisible();
  });
});
