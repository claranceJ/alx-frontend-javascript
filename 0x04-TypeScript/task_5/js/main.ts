interface MajorCredits {
  credits: number;
  kind: 'major';
}

interface MinorCredits {
  credits: number;
  kind: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, kind: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, kind: 'minor' };
}

const math: MajorCredits = { credits: 10, kind: 'major' };
const history: MajorCredits = { credits: 8, kind: 'major' };

const english: MinorCredits = { credits: 5, kind: 'minor' };
const french: MinorCredits = { credits: 4, kind: 'minor' };

const totalMajorCredits = sumMajorCredits(math, history);
const totalMinorCredits = sumMinorCredits(english, french);

console.log(totalMajorCredits); // Output: { credits: 18, kind: 'major' }
console.log(totalMinorCredits); // Output: { credits: 9, kind: 'minor' }
