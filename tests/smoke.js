// Chrome Card smoke tests. Serve the site root with this repo at /chrome-card/.
const {page,expect,test,noErrors,run}=require('./harness');
run({name:'Chrome Card',fn:async()=>{
  await test('loads and draws the lab card',async()=>{const pg=await page('/chrome-card/');await pg.waitForTimeout(500);
    expect((await pg.locator('svg,canvas').count())>0,'nothing drawn');await noErrors(pg)});
  await test('no patient or hospital number box',async()=>{const pg=await page('/chrome-card/');expect(!(await pg.locator('#fPatient').count()),'patient box present')});
  await test('logo links to the landing page',async()=>{const pg=await page('/chrome-card/');expect((await pg.getAttribute('a.homelink','href'))==='/','logo link missing')});
}});
