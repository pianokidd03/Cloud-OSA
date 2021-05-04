# Cloud-OSA
This repo uses HighChart to plot static data from a virtual Optical Spectrum Analyser.

jQuery is used to implement basic front-end functionality. The data.json file is taken from the [Cloud Optical Spectrum Analyzer](http://flaskosa.herokuapp.com/). It is possible to hit the heroku server and get json back, but the connection is not secure and the app will return a CORS policy error. The data from the heroku app is static, and since the goal of this project is to learn about HighChart, there is no need to query the server. 
