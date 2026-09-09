export async function askOpenAI(instructions:string,input:string){
  const key=process.env.OPENAI_API_KEY;
  if(!key) return null;
  const model=process.env.OPENAI_MODEL || "gpt-5.6-luna";
  const res=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Authorization":`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({model,instructions,input})});
  if(!res.ok) throw new Error(`OpenAI request failed: ${res.status}`);
  const data=await res.json();
  if(typeof data.output_text === "string") return data.output_text;
  const texts=(data.output||[]).flatMap((o:any)=>o.content||[]).filter((c:any)=>c.type==="output_text").map((c:any)=>c.text);
  return texts.join("
").trim();
}