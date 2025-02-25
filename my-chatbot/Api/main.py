from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load the fine-tuned model and tokenizer
model_path = "fine-tuned-model1"  # Ensure this directory contains your saved model
model = GPT2LMHeadModel.from_pretrained(model_path)
tokenizer = GPT2Tokenizer.from_pretrained(model_path)

# Initialize FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class ChatRequest(BaseModel):
    text: str

@app.post("/chat")
async def chat(request: ChatRequest):
    input_text = request.text
    input_ids = tokenizer.encode(input_text, return_tensors="pt")

    # Generate a response
    output = model.generate(input_ids, max_length=100, pad_token_id=tokenizer.eos_token_id)
    response_text = tokenizer.decode(output[:, input_ids.shape[-1]:][0], skip_special_tokens=True)

    return {"response": response_text}

# To run: uvicorn main:app --reload
