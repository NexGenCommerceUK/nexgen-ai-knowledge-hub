import {NextResponse} from "next/server"; import {askOpenAI} from "../../../lib/openai";
export async function POST(req:Request){
  const body=await req.json(); const question=String(body.question||"").trim(); const context=String(body.context||"").trim();
  if(!question) return NextResponse.json({error:"Question is required"},{status:400});
  const prompt=`Knowledge base:
${context||"No private knowledge supplied."}

Question: ${question}`;
  try { const ai=await askOpenAI("Answer only from the supplied knowledge when possible. If evidence is missing, say so. Be concise and businesslike.",prompt);
    return NextResponse.json({answer:ai||`Demo mode: I would answer “${question}” using the supplied knowledge base. Add OPENAI_API_KEY to enable live AI.`});
  } catch { return NextResponse.json({error:"AI service unavailable"},{status:502}); }
}