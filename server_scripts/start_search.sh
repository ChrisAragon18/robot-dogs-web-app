#!/bin/bash

sleep 5

#head nano for encode_faces.py--------------------------------------------
cd /home/unitree/Unitree/sdk/UnitreecameraSDK-main/face_recognizer && python3 encode_faces.py &

sleep 5

#SSH into nx board to do person detection (with start_recognition)---------
# Set the SSH connection information
remote_server="192.168.123.15"
ssh_user="unitree"
ssh_password="123"

# OBJECT DETECTION PART--------------------------------------------
remote_command="cd home/Desktop/objectDetection/content/yolov7 && sh start_recognition.sh &"

# Use sshpass to execute the SSH command with a password
sshpass -p "$ssh_password" ssh -X "$ssh_user@$remote_server" "$remote_command"

#SSH back into head nano to do face recognition----------------------------------------
# Set the SSH connection information
remote_server1="192.168.123.13"
ssh_user1="unitree"
ssh_password1="123"

remote_command1="cd /home/unitree/Unitree/sdk/UnitreecameraSDK-main/face_recognizer && python3 main.py &"

sshpass -p "$ssh_password1" ssh -X "$ssh_user1@$remote_server1" "$remote_command1" &
