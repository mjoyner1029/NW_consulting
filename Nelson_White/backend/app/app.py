from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Change to MySQL or PostgreSQL later
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

db = SQLAlchemy(app)
jwt = JWTManager(app)

# Importing routes
from controllers import auth, portfolio

# Registering Blueprints
app.register_blueprint(auth.auth_bp, url_prefix='/api/auth')
app.register_blueprint(portfolio.portfolio_bp, url_prefix='/api/portfolio')

if __name__ == '__main__':
    app.run(debug=True)
