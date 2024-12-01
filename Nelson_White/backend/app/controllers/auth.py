from flask import Blueprint, request, jsonify
from app import db
from models import User
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    new_user = User(username=data['username'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and user.password == data['password']:  # Use hashed passwords in production!
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token)
    return jsonify({"message": "Invalid credentials"}), 401
