const fs = require('fs');
const path = require('path');

const pageCssPath = path.join(__dirname, 'src/app/(without-sidebar)/works/gear-guru/page.module.css');

const additionalCss = `
/* --- NEW STYLES FROM OVERHAUL --- */
.backPillText {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #6b7280;
  background-color: #f3f4f6;
  padding: 6px 12px;
  border-radius: 100px;
  display: inline-block;
  margin-bottom: 24px;
}

.pageDesc {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 48px;
  max-width: 600px;
  line-height: 1.5;
}

.smallCapsTitle {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #6b7280;
  text-transform: uppercase;
}

.behaviorStatsRow {
  display: flex;
  align-items: flex-end;
  gap: 40px;
}
.behaviorStat {
  display: flex;
  flex-direction: column;
}
.statNumBig {
  font-size: 64px;
  font-weight: 800;
  color: #111;
  line-height: 1;
}
.statLabelSmall {
  font-size: 12px;
  font-weight: 700;
  color: #6b7280;
  margin-top: 8px;
  letter-spacing: 1px;
}
.statDivider {
  width: 1px;
  height: 60px;
  background-color: #e5e7eb;
  margin-bottom: 10px;
}
.dividerLine {
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
}

.behaviorCardsRow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.behaviorCard {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.03);
}
.behaviorIcon {
  color: #2563EB;
  width: 24px;
  height: 24px;
  margin-bottom: 24px;
}
.behaviorCardTitle {
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin-bottom: 12px;
}
.behaviorCardDesc {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.5;
}

.personaCard {
  background: #1f1f1f;
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  flex: 1;
}
.personaIconWrap {
  width: 56px;
  height: 56px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
}
.personaCardTitle {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}
.personaCardDesc {
  font-size: 16px;
  color: #9ca3af;
  line-height: 1.6;
}

.architectureBox {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 64px;
  text-align: center;
  margin-top: 64px;
}
.architectureLabel {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #64748b;
  margin-bottom: 40px;
}
.architecturePills {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.archPill {
  background: #fff;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  color: #111;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.archPillBlue {
  color: #2563EB;
  font-size: 12px;
  font-weight: 700;
}
.architectureDesc {
  color: #64748b;
  font-size: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.coreExpList {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 48px;
}
.coreExpItem {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
.coreExpNum {
  font-size: 48px;
  font-weight: 800;
  color: #e2e8f0;
  line-height: 1;
}
.coreExpTitle {
  font-size: 22px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
}
.coreExpDesc {
  font-size: 16px;
  color: #6b7280;
}

.systemRow {
  display: flex;
  gap: 64px;
}
.systemLeft {
  flex: 1;
}
.systemRight {
  flex: 1;
}
.systemLabel {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #6b7280;
  margin-bottom: 24px;
}
.colorCircles {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}
.colorCircle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.fontBig {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 12px;
}
.fontMed {
  font-size: 20px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 16px;
}
.fontSmall {
  font-size: 14px;
  color: #6b7280;
}
.componentsCard {
  background: #fafafa;
  border: 1px solid #f3f4f6;
  border-radius: 20px;
  padding: 40px;
}
.compField {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  margin-bottom: 16px;
}
.compDotBlue { width: 12px; height: 12px; border-radius: 50%; background: #2563EB; }
.compDotGray { width: 12px; height: 12px; border-radius: 50%; background: #e5e7eb; }
.compLine { height: 6px; width: 64px; background: #f3f4f6; border-radius: 4px; }
.compButton { background: #005ce6; height: 48px; border-radius: 8px; width: 160px; display: flex; align-items: center; justify-content: center; }
.compLineBlue { height: 6px; width: 48px; background: rgba(255,255,255,0.3); border-radius: 4px; }

.pillTextBlue {
  color: #2563EB;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
}
.pillTextLightBlue {
  color: #60a5fa;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
}
.finalListCheck {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.finalListCheck li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #4b5563;
}
.finalListCheckWhite {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.finalListCheckWhite li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #d1d5db;
}
.checkIcon { color: #2563EB; width: 20px; height: 20px; flex-shrink: 0; }
.checkIconWhite { color: #2563EB; width: 20px; height: 20px; flex-shrink: 0; }
.finalCardLightBlue {
  display: flex;
  background-color: #f1f5f9;
  border-radius: 24px;
  padding: 64px 80px;
  align-items: center;
  gap: 64px;
  margin-bottom: 40px;
}
.finalCardDarkBlue {
  display: flex;
  background-color: #1e1b4b;
  border-radius: 24px;
  padding: 64px 80px;
  align-items: center;
  gap: 64px;
  margin-bottom: 40px;
}

.validationRow { display: flex; gap: 80px; }
.validationLeft { flex: 1; }
.validationRight { flex: 1; }
.iterationList {
  list-style: none;
  padding: 0;
}
.iterationList li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 16px;
  color: #4b5563;
  font-size: 16px;
}
.iterationList li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background-color: #2563EB;
  border-radius: 50%;
}
.outcomeCard {
  background: #f8fafc;
  border-radius: 24px;
  padding: 48px;
  height: 100%;
}
.outcomeList {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}
.outcomeItem {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  color: #111;
  font-weight: 500;
}
.outcomeIcon {
  color: #10B981;
  width: 24px;
  height: 24px;
}

.learnedWrap {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}
.bodyBig {
  font-size: 20px;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 48px;
}
.quoteBlock {
  border-left: 4px solid #2563EB;
  padding-left: 24px;
}
.quoteText {
  font-size: 18px;
  color: #6b7280;
  font-style: normal;
}
`;

fs.appendFileSync(pageCssPath, additionalCss);
console.log('Appended to page.module.css successfully.');
