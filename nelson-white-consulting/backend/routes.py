from flask import Blueprint, request, jsonify
from models import db, User
import stripe
from config import Config
import requests

api = Blueprint("api", __name__)

# Initialize Stripe with the secret key from config.
stripe.api_key = Config.STRIPE_SECRET_KEY

# User Registration Endpoint
@api.route("/register", methods=["POST"])
def register():
    data = request.get_json() or {}
    if not data.get("email") or not data.get("password"):
        return jsonify({"error": "Email and password are required"}), 400
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "User already exists"}), 400
    user = User(email=data["email"])
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

# User Login Endpoint
@api.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    if not data.get("email") or not data.get("password"):
        return jsonify({"error": "Email and password are required"}), 400
    user = User.query.filter_by(email=data["email"]).first()
    if user is None or not user.check_password(data["password"]):
        return jsonify({"error": "Invalid credentials"}), 400
    return jsonify({"message": "Login successful", "user_id": user.id}), 200

# Subscription Purchase Endpoint Using Stripe Payment
@api.route("/subscribe", methods=["POST"])
def subscribe():
    data = request.get_json() or {}
    token = data.get("stripeToken")
    user_id = data.get("user_id")
    if not token or not user_id:
        return jsonify({"error": "Payment token and user ID required"}), 400
    
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    try:
        charge = stripe.Charge.create(
            amount=500,  # $5.00 expressed in cents
            currency="usd",
            description="Decentralization 101 Subscription",
            source=token,
        )
    except stripe.error.StripeError as e:
        return jsonify({"error": str(e)}), 400

    user.subscription_active = True
    db.session.commit()
    return jsonify({"message": "Subscription activated"}), 200

# REST Endpoint for Portfolio Data (for on-demand fetch)
@api.route("/portfolio-data", methods=["GET"])
def portfolio_data():
    api_key = request.headers.get("x-api-key")
    if not api_key:
        return jsonify({"error": "API key required"}), 400

    # Example: Use the API key to call an external service.
    # For demonstration, we simulate a response.
    data = {
        "ceo_portfolio": {
            "value": 100000,
            "change": "+5%",
            "last_updated": "2025-02-03T12:00:00Z"
        }
    }
    return jsonify(data), 200
