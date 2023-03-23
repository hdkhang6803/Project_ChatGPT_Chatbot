import os
import sys

from flask import Flask, render_template, request, jsonify, send_from_directory
import bot.chatbot_core as bot
import imageProcess.image_process as imgProcess

from imageProcess.food_classification import predict_class

UPLOAD_FOLDER = '\images'

sys.path.append("bot")

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/sendQuestion')
def sendQuestion():
    question = request.args.get("question")
    if not question:
        return "error"
    
    answer = bot.handle_input(question)

    return jsonify(answer) 

@app.route('/sendGenerate')
def sendGenerate():
    text = request.args.get("q")
    if not text:
        return "error"

    imageURL = imgProcess.generate_image(text)
    return jsonify({'image_url': imageURL})


@app.route('/css/<path:filepath>')
def sendDirCss(filepath):
    return send_from_directory('static/css', filepath)

@app.route('/js/<path:filepath>')
def sendDirJs(filepath):
    return send_from_directory('static/js', filepath)

@app.route('/playground_assets/<path:filepath>')
def sendDirPlayground(filepath):
    return send_from_directory('static/playground_assets', filepath)

@app.route('/uploadFile', methods = ['GET', 'POST'])
def uploadFile():
    if request.method != 'POST':
        return 'no'
    if ('file' not in request.files):
        return 'no file'

    file = request.files.get('file')
    if file.filename == '':
        return('No selected file')
    if file: 
        print(request.files)
        print(file)
        print(type(file))
        print(file.filename)
        path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        path = './images/' + file.filename
        if not os.path.exists("images"):
            os.makedirs("images")
        file.save(path)
        return jsonify(predict_class(images = [path]))
    return "something failed"

if __name__ == "__main__":
   app.run(debug = True)