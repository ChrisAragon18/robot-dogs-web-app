from flask import Flask, Response
import cv2
import subprocess

# Start the camera capture process in the background
#subprocess.Popen("cd /home/unitree/Unitree/sdk/UnitreecameraSDK-main && sudo sh start_capture.sh &", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

app = Flask(__name__)

def generate_frames():
    video_capture = cv2.VideoCapture("/dev/video1")
    while True:
        ret, frame = video_capture.read()
        if not ret:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')  # Specify your host and port
