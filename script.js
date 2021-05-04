// for a full list of features, see the HighCharts documentation 
// https://api.highcharts.com/highcharts/?_ga=2.71073040.1610039926.1620136146-469871029.1620136146

document.addEventListener('DOMContentLoaded', () => {
    $.getJSON('data.json', function(json){
        data = [];
        for (let i = 0; i < json['ydata'].length; i++) {
            var tuplet = [];
            tuplet.push(json['xdata'][i]);
            tuplet.push(json['ydata'][i]);
            data.push(tuplet);
        }
        console.log(data)
        Highcharts.chart('container', {
            chart: {
                zoomType: 'xy',
            },

            credits: {
                // enabled: false,
                text: 'Gabe Braden',
                href: 'https://github.com/pianokidd03',
                position: {
                    align: 'left',
                    x: 10,
                    y: -10
                },
            },
    
            title: {
                text: 'Cloud Optical Spectrum Analyzer'
            },
            yAxis: {
                title: {
                    text: 'dBm'
                }
            },
    
            xAxis: {
                title: {
                    text: 'Hz'
                }
            },
            series: [{
                name: 'Virtual Instrument Data',
                data: data
            }],
        });
    });
});