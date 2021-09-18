#!/usr/bin/bash
#update tambahan
apt-get update -y
apt-get upgrade -y
apt-get install -y nodejs libwebp ffmpeg wget tesseract ffmpeg npm nmap
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
echo "Okeh udah selesai sekarang lu tinggal path nya aja langsung npm start"
npm start
