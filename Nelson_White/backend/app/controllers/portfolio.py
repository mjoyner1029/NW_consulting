from flask import Blueprint, jsonify
from app import db
from models import Portfolio

portfolio_bp = Blueprint('portfolio', __name__)

@portfolio_bp.route('/get', methods=['GET'])
def get_portfolio():
    portfolios = Portfolio.query.all()
    return jsonify([{"type": p.portfolio_type, "description": p.description} for p in portfolios])
