ps -aux | grep point_cloud_node
ps -aux | grep mqttControlNode
ps -aux | grep live_human_pose
ps -aux | grep rosnode
ps -aux | grep point_cloud_node | awk '{print $2}' | xargs kill -9
ps -aux | grep mqttControlNode | awk '{print $2}' | xargs kill -9
ps -aux | grep live_human_pose | awk '{print $2}' | xargs kill -9
ps -aux | grep rosnode | awk '{print $2}' | xargs kill -9

./bins/example_getRawFrame