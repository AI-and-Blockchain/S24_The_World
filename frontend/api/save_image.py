from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
import check_files

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
        File_saved, ret_link = check_files.main(
            os.path.join(os.getcwd(), 'uploads'))
        # return jsonify({'url': '/uploads/' + filename}), 200
        if File_saved:
            return jsonify({'url': ret_link}), 200
        else:
            return jsonify({'message': 'Something went wrong'}), 500

    return jsonify({'message': 'Something went wrong'}), 500


@app.route('/uploads/<filename>')
if __name__ == '__main__':
    app.run(debug=True)
