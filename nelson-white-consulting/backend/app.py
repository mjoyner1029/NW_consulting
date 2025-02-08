from flask import Flask
from config import Config
from models import db
from routes import api
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import eventlet
import time
import threading
import random

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize database and CORS
    db.init_app(app)
    CORS(app)
    
    # Register API blueprint
    app.register_blueprint(api, url_prefix="/api")
    
    with app.app_context():
        db.create_all()
    
    return app

app = create_app()
socketio = SocketIO(app, cors_allowed_origins="*")

# Background thread to simulate live portfolio updates
def background_portfolio_update():
    while True:
        # Simulate fetching live data (replace this with an actual API call if needed)
        data = {
            "ceo_portfolio": {
                "value": random.randint(90000, 110000),
                "change": f"{random.choice(['+','-'])}{random.randint(1,10)}%",
                "last_updated": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
            }
        }
        # Emit update to all connected WebSocket clients
        socketio.emit("portfolio_update", data, broadcast=True)
        eventlet.sleep(10)  # Update every 10 seconds

# Start the background thread for live updates
thread = threading.Thread(target=background_portfolio_update)
thread.daemon = True
thread.start()

@socketio.on("connect")
def handle_connect():
    print("Client connected")
    emit("portfolio_update", {"message": "Welcome, live data will be provided shortly."})

@socketio.on("disconnect")
def handle_disconnect():
    print("Client disconnected")

if __name__ == "__main__":
    socketio.run(app, debug=True)
