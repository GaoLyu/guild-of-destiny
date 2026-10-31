import {questions,rarityTable} from './data';
import type {Answers} from './types';
const axisInfo={EI:{left:'E',right:'I'},SN:{left:'S',right:'N'},TF:{left:'T',right:'F'},JP:{left:'J',right:'P'}} as const;

/** Scores each axis independently. A tie is resolved by the answer to the earliest
 * question (lowest question id) on that axis, making the rule stable and explainable. */
export function scoreType(answers:Answers):string{
 const axes=['EI','SN','TF','JP'] as const;
 return axes.map(axis=>{
  const axisQuestions=questions.filter(q=>q.axis===axis).sort((a,b)=>a.id-b.id);
  let left=0,right=0;let firstAnswer:'A'|'B'|undefined;let firstQuestion=axisQuestions[0];
  for(const q of axisQuestions){const answer=answers[q.id];if(!answer)continue;if(!firstAnswer){firstAnswer=answer;firstQuestion=q;}const side=answer==='A'?q.aSide:q.bSide;if(side===axisInfo[axis].left)left++;else right++;}
  if(left===right&&firstAnswer)return firstAnswer==='A'?firstQuestion.aSide:firstQuestion.bSide;
  return left>right?axisInfo[axis].left:axisInfo[axis].right;
 }).join('');
}
export function rollRarity(){const total=rarityTable.reduce((s,x)=>s+x.weight,0);let n=Math.random()*total;for(const r of rarityTable){n-=r.weight;if(n<=0)return r;}return rarityTable[0];}
