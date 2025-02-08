import os

# Determine the absolute path to the current directory.
basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Secret key for session management and security; in production, set this via an environment variable.
    SECRET_KEY = os.environ.get("SECRET_KEY") or "you-will-never-guess"
    
    # SQLAlchemy database URI: by default, uses a local SQLite database; override with DATABASE_URL env var if needed.
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or \
        "sqlite:///" + os.path.join(basedir, "app.db")
    
    # Disable SQLAlchemy event system to save resources.
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Stripe secret key for payment processing; replace the placeholder with your real key or set the env variable.
    STRIPE_SECRET_KEY = os.environ.get("STRIPE_SECRET_KEY") or "your-stripe-secret-key-here"
    
    # Optional: API key for an external crypto data provider.
    CRYPTO_API_KEY = os.environ.get("CRYPTO_API_KEY") or "your-crypto-api-key-here"
