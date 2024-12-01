from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    subscription = db.Column(db.Boolean, default=False)
    
    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"

class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    portfolio_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Portfolio('{self.portfolio_type}', '{self.description}')"
