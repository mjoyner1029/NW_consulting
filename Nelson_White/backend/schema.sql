CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    subscription BOOLEAN DEFAULT 0
);

CREATE TABLE portfolio (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    portfolio_type TEXT NOT NULL,
    description TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES user(id)
);
