from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    print(request.files)
    if 'image' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify({'message': 'No file selected for uploading'}), 400

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join('uploads', filename))
        return jsonify({'url': '/uploads/' + filename}), 200

    return jsonify({'message': 'Something went wrong'}), 500

if __name__ == '__main__':
    app.run(debug=True)
