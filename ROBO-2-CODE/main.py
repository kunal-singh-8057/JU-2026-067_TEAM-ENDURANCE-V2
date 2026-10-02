import cv2
import numpy as np
from flask import Flask, request, jsonify, send_file
from ultralytics import YOLO

# --------------------------------
# Flask application
# --------------------------------
app = Flask(__name__)

# --------------------------------
# Load YOLO model
# --------------------------------
model = YOLO("best.pt")


# --------------------------------
# YOLO detection function
# --------------------------------
def detect_objects(frame):

    results = model(frame)

    detected_objects = []

    for r in results:

        for box in r.boxes:

            class_id = int(box.cls[0])

            confidence = box.conf[0].item()

            if confidence > 0.5:

                label = model.names[class_id]

                x1, y1, x2, y2 = map(
                    int,
                    box.xyxy[0]
                )

                detected_objects.append({
                    "name": label,
                    "confidence": round(
                        confidence * 100,
                        2
                    ),
                    "x1": x1,
                    "y1": y1,
                    "x2": x2,
                    "y2": y2
                })

    return detected_objects


# --------------------------------
# Home page
# --------------------------------
@app.route("/")
def home():

    return send_file("index.html")


# --------------------------------
# Receive camera frame
# --------------------------------
@app.route("/detect", methods=["POST"])
def detect():

    if "image" not in request.files:

        return jsonify({
            "error": "No frame received"
        }), 400

    file = request.files["image"]

    # Read image bytes
    image_bytes = file.read()

    # Convert bytes to NumPy array
    np_array = np.frombuffer(
        image_bytes,
        np.uint8
    )

    # Convert to OpenCV image
    frame = cv2.imdecode(
        np_array,
        cv2.IMREAD_COLOR
    )

    if frame is None:

        return jsonify({
            "error": "Could not decode frame"
        }), 400

    # Run YOLO
    detected_objects = detect_objects(frame)

    return jsonify({
        "detections": detected_objects
    })


# --------------------------------
# Start Flask
# --------------------------------
if __name__ == "__main__":

    app.run(
    host="0.0.0.0",
    port=5000,
    debug=False,
    threaded=True,
    ssl_context="adhoc"
)