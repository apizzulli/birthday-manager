from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql


app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'riley456'
app.config['MYSQL_DB'] = 'sys'
app.config['MYSQL_TABLE'] = 'Users'

mysql = pymysql.connect(
    host = app.config['MYSQL_HOST'],
    user = app.config['MYSQL_USER'],
    password= app.config['MYSQL_PASSWORD'],
    db = app.config['MYSQL_DB'],
)

@app.route("/")
def hello_world():
    cur = mysql.cursor()
    cur.execute('INSERT INTO Users (name) VALUES (%s)', ("Sabrina"))
    mysql.commit()
    cur.close()
    return "<p>Hello, World!</p>"

@app.route("/create-birthday", methods=['POST'])
def create_birthday():
    data = request.json
    #name = data['name']['firstName']
    print("\n\n\nData: "+str(data)+"\n\n\n")
    cur = mysql.cursor()
   # cur.execute('INSERT INTO Users (name) VALUES (%s)', (name))
    mysql.commit()
    cur.close()
    return "Success! Created birthday for " + data['name']
