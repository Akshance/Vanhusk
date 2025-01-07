from flask import Flask, request, jsonify
from model import detect_phishing

app = Flask(__name__)

# This Flask file will handle the backend logic and API endpoints.

@app.route('/api/detect', methods=['POST'])
def detect():
    data = request.json
    email_content = data.get('email', '')
    result = detect_phishing(email_content)
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
