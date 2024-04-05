# Collaborative Tasks with Robotic Dogs

**Link:** https://faurobotdogs.netlify.app

## Description
This project involves two Unitree Go1 Edu Quadruped Robots (resembling robot dogs), named Daisy and Milo, whose scope is collaborative tasks with the robotic dogs.

## Team Members
- Christopher Aragon
- Christopher Anastasis
- Bryan Cooke
- Charles Fernandez-Hamoui
- Francisco Guerrero





# Setting Up LIDAR & RViz
To use the LIDAR, there involves several steps:
Connect to the LIDAR IP of the Dog

If not running, in a separate terminal, run roscore.

First, you must navigate into the correct location

```
cd UnitreeSLAM
cd catkin_lidar_slam_3d
```

Now, you must set the source to the setup bash file.

    source devel/setup.bash

Once done, you can launch the buildmap file.

    roslaunch start build_map.launch 

If you want to specify a map name, you can use map_name.

    roslaunch start build_map.launch map_name=:patrolCfrom

To launch RViz, open up another terminal and run this command.

    rosrun rviz rviz

# Unitree Go1 EDU Basics
###### The dog has 4 boards
- 1 NVIDIA Nano Board (Head)
	- Head Board: Where head cameras can be accessed.
	- `IP: 192.168.123.13`
- 1 NVIDIA Nano Board (Body)
	- Body Board: Where body cameras can be accessed.
	- `IP: 196.168.123.14`
- 1 NVIDIA NX Board (LIDAR & ROS)
	- This board handles the LIDAR and ROS
	- `IP: 192.168.123.15`
- 1 Raspberry Pi Board (Wifi)
	- This Raspberry Pi board handles the wifi
	- `IP: 192.168.123.161`

#Go 1 Official Documentation Website

https://unitree-docs.readthedocs.io/en/latest/get_started/Go1_Edu.html


[![1](https://unitree-docs.readthedocs.io/en/latest/_images/1677738020344.png "1")](http://https://unitree-docs.readthedocs.io/en/latest/_images/1677738020344.png "Go1 system architecture diagram")
 
