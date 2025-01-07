import pickle

# Load your model (replace mock_model.pkl with an actual trained model file)
class MockPhishingDetector:
    def predict(self, texts):
        phishing_keywords = ['password', 'lottery', 'bank', 'reset', 'compromised', 'click']
        predictions = []
        for text in texts:
            if any(word in text.lower() for word in phishing_keywords):
                predictions.append(1)  # 1 = Phishing
            else:
                predictions.append(0)  # 0 = Legitimate
        return predictions

# Create instance of the detector
model = MockPhishingDetector()

# Function to detect phishing
def detect_phishing(email):
    result = model.predict([email])
    return "Phishing" if result[0] == 1 else "Legitimate"
