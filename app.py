from flask import Flask, render_template

app = Flask(__name__, template_folder= 'templates', static_folder='staticfiles')

@app.route('/')
def home():
    return render_template('Graduation.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/FeedBack.html')
def feedback():
    return render_template('FeedBack.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/register.html')
def register():
    return render_template('register.html')


@app.route('/Account.html')
def account():
    return render_template('Account.html')