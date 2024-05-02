# H1 Set up for ESP32 Client Sensor Side.

* This is the ESP32 (Arduino) that is connected to the Sensor.
* The ESP32 will connect to the local network and send it's sensor value to the Raspberry Pi Server twice per second.

In order for the system to work, all components must be on the same network. This must be a 2.4ghz network due to the limitations of the ESP32.

The components are:

* The WebClient_SensorSide (this repo) ESP32
* The WebClient_SpeakerSide (the other repo) ESP32
* The Raspberry PI


* Step 1
  * Start the Raspberry PI Server by running
  * cd ~/Documents/Server
  * node server.js
*  Step 2
  * Find the IP address of the Raspberry Pi. You will need to update the code for both of the ESP32 projects with this IP address.
  * Look for "UPDATE IP ADDRESS HERE" on line 20 of main.cpp in both projects. Do not delete the port :9090.
*  Step 3
  * Update the code for both ESP32 repos with the ssid and password of the local network. Reach out to the IT person if needed.
  * Look for "Update SSID HERE" and "UPDATE PASSWORD HERE" starting on line 15 of mainlcpp in both projects.
* Step 4
  * Flash the respective ESP32 Projects using either PlatformIO in VSCode or using the Arduino IDE
  * If you use the Arduino IDE you will need to just copy and paste the code into a new project.
* Step 5
  * Connect both ESP32's to power
  * Turning the potentiometer on the first ESP32 should change the tones on the second ESP32.
