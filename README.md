# Cloud-OSA
This repo uses HighChart to plot static data from a virtual Optical Spectrum Analyser.

jQuery is used to implement basic front-end functionality. The data.json file is taken from the [Cloud Optical Spectrum Analyzer](http://flaskosa.herokuapp.com/). It is possible to hit the heroku server and get json back, but the connection is not secure and the app will return a CORS policy error. The data from the heroku app is static, and since the goal of this project is to learn about HighChart, there is no need to query the server. 

## Installation
### Clone the repository
`git clone https://github.com/pianokidd03/cloud-osa.git`

### Change Directory Into the Repository
`cd cloud-osa`

### Run the Webapp Locally
There are multiple live servers to choose from. For this project the [Live Server VS Code extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) by Ritwick Dey was used. The app can also be run using the `npm live-server` command.
