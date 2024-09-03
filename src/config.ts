let process: any;

const p = process?.env ? process.env : import.meta.env;

export const api_config = p.VITE_OPENAI_KEY
export const hf_config = p.VITE_HF_KEY