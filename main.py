from flask import Flask, render_template, request, jsonify

 
app = Flask(__name__)


@app.route('/simple')
def simple():
    return render_template('simple.html')


@app.route('/authorized')
def authorized():
    return render_template('authorized.html')

@app.route('/coin')
def coin():
    return render_template('coin.html')

@app.route('/mines')
def mines():
    return render_template('mines.html')


if __name__ == '__main__':
    app.run(port=8080, host='127.0.0.1', debug=True)