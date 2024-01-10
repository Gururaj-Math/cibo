from flask import Flask
from db.index import connect_db

app = Flask(__name__)

database = connect_db()

@app.route('/')
def hello():
    return 'Hello from py!'

if __name__ == '__main__':
    app.run(debug=True)
