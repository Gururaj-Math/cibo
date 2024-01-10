from pymongo import MongoClient
from constant import DB_NAME

def connect_db():
    try:
        mongo_uri = "mongodb://localhost:27017"
        client = MongoClient(mongo_uri)
        db = client[DB_NAME]
        print(f"MONGODB CONNECTED!! DB HOST: {client}")
        return db

    except Exception as error:
        print(f"MONGODB connection ERROR: {error}")
        return None