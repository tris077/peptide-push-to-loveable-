from fastapi import FastAPI, HTTPException, Depends, status, Form
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import jwt
from datetime import datetime, timedelta
import json

app = FastAPI(title="Peplike API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock database
users_db = {
    "test@example.com": {
        "id": 1,
        "email": "test@example.com",
        "username": "testuser",
        "full_name": "Test User",
        "is_active": True,
        "is_verified": True,
        "subscription_tier": "free",
        "total_tokens_used": 0,
        "total_cost_cents": 0,
        "monthly_tokens_used": 0,
        "monthly_cost_cents": 0,
        "created_at": "2024-01-01T00:00:00Z"
    }
}

# JWT secret (in production, use environment variable)
SECRET_KEY = "your-secret-key-here"
ALGORITHM = "HS256"

# Models
class UserLogin(BaseModel):
    username: str
    password: str

class UserRegister(BaseModel):
    email: str
    username: str
    password: str
    full_name: Optional[str] = None

class User(BaseModel):
    id: int
    email: str
    username: str
    full_name: Optional[str] = None
    is_active: bool
    is_verified: bool
    subscription_tier: str
    total_tokens_used: int
    total_cost_cents: int
    monthly_tokens_used: int
    monthly_cost_cents: int
    created_at: str

# Security
security = HTTPBearer()

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=7)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return email
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

# Routes
@app.post("/api/v1/auth/login")
async def login(username: str = Form(...), password: str = Form(...)):
    # For testing, accept any email/password combination
    if username not in users_db:
        # Create a new user if they don't exist
        users_db[username] = {
            "id": len(users_db) + 1,
            "email": username,
            "username": username.split("@")[0],
            "full_name": username.split("@")[0].title(),
            "is_active": True,
            "is_verified": True,
            "subscription_tier": "free",
            "total_tokens_used": 0,
            "total_cost_cents": 0,
            "monthly_tokens_used": 0,
            "monthly_cost_cents": 0,
            "created_at": datetime.utcnow().isoformat() + "Z"
        }
    
    user = users_db[username]
    access_token = create_access_token(data={"sub": user["email"]})
    
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

@app.post("/api/v1/auth/register")
async def register(user_data: UserRegister):
    if user_data.email in users_db:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = {
        "id": len(users_db) + 1,
        "email": user_data.email,
        "username": user_data.username,
        "full_name": user_data.full_name,
        "is_active": True,
        "is_verified": True,
        "subscription_tier": "free",
        "total_tokens_used": 0,
        "total_cost_cents": 0,
        "monthly_tokens_used": 0,
        "monthly_cost_cents": 0,
        "created_at": datetime.utcnow().isoformat() + "Z"
    }
    
    users_db[user_data.email] = new_user
    return new_user

@app.get("/api/v1/auth/me")
async def get_current_user(email: str = Depends(verify_token)):
    if email not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    return users_db[email]

@app.post("/api/v1/auth/test-token")
async def test_token(email: str = Depends(verify_token)):
    return {"valid": True, "email": email}

@app.get("/")
async def root():
    return {"message": "Peplike API is running!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
