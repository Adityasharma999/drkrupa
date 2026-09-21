/* Mobile/responsive + interaction QA assertions (run with: node scripts/qa-check.mjs) */
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
let passed = 0,
  failed = 0;
const check = (name, cond, extra = "") => {
  if (cond) {
    passed++;
    console.log(`  ✓ ${name}`);
  } else {
    failed++;
    console.log(`  ✗ ${name} ${extra}`);
  }
};

const browser = await chromium.launch();

// ---------- Mobile ----------
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(BASE, { waitUntil: "networkidle" });
  console.log("MOBILE 390x844");
  check("hamburger visible", await page.locator('button[aria-controls="mobile-menu"]').isVisible());
  check("desktop nav hidden", !(await page.locator("nav ul").first().isVisible()));
  check("h1 present", (await page.locator("h1").innerText()).includes("Happy Little Faces"));
  const noHScroll = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth + 1
  );
  if (!noHScroll) {
    const wide = await page.evaluate(() =>
      [...document.querySelectorAll("*")]
        .map((el) => ({
          tag: el.tagName,
          cls: String(el.className).slice(0, 60),
          right: el.getBoundingClientRect().right,
        }))
        .filter((x) => x.right > window.innerWidth + 1)
        .sort((a, b) => b.right - a.right)
        .slice(0, 5)
    );
    console.log("   overflow culprits:", JSON.stringify(wide, null, 1));
  }
  check("no horizontal overflow", noHScroll);
  const cta = await page.locator('a.btn:has-text("Book an Appointment")').first().boundingBox();
  const visual = await page.locator('img[alt*="Pediatric dentist"]').first().boundingBox();
  check("CTA above visual on mobile", cta && visual && cta.y < visual.y, `cta=${cta?.y} visual=${visual?.y}`);
  check("tel link present", (await page.locator('a[href="tel:+919426233043"]').count()) > 0);
  check("instagram link", (await page.locator('a[href*="instagram.com/drkrupatewani"]').count()) > 0);

  // open hamburger menu
  await page.locator('button[aria-controls="mobile-menu"]').click();
  await page.waitForTimeout(500);
  check("menu opens with links", await page.locator('#mobile-menu a:has-text("Services")').isVisible());

  // form validation: empty submit -> errors
  await page.goto(`${BASE}/#book`, { waitUntil: "networkidle" });
  await page.locator('button:has-text("Request Appointment")').click();
  await page.waitForTimeout(400);
  const errs = await page.locator('[role="alert"]').count();
  check("validation errors shown on empty submit", errs >= 3, `errors=${errs}`);

  // bad phone -> error
  await page.fill("#field-parentName", "Ramesh Patel");
  await page.fill("#field-childName", "Aarav");
  await page.fill("#field-phone", "12345");
  await page.locator('button:has-text("Request Appointment")').click();
  await page.waitForTimeout(300);
  check("phone format validated", await page.locator("#err-phone").isVisible());

  // valid submit -> success
  await page.fill("#field-phone", "9876543210");
  await page.locator('button:has-text("Request Appointment")').click();
  await page.waitForTimeout(1400);
  check("success state after valid submit", await page.locator('text=Request Received!').isVisible());
  await page.close();
}

// ---------- Desktop ----------
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE, { waitUntil: "networkidle" });
  console.log("DESKTOP 1440x900");
  check("desktop nav visible", await page.locator('nav a:has-text("Why Us")').isVisible());
  check("hamburger hidden", !(await page.locator('button[aria-controls="mobile-menu"]').isVisible()));
  const noHScroll = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth + 1
  );
  check("no horizontal overflow", noHScroll);
  check("map iframe titled", (await page.locator('iframe[title*="Google Map"]').count()) === 1);
  check("footer copyright 2026", (await page.locator("footer").innerText()).includes("© 2026"));
  check("JSON-LD dentist", (await page.locator('script[type="application/ld+json"]').count()) >= 1);
  const title = await page.title();
  check("SEO title", title.includes("Pediatric Dentist in Gandhidham"), title);
  await page.close();
}

await browser.close();
console.log(`\nRESULT: ${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
