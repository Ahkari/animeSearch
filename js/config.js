
seajs.config({

    basePath:'/biometric/js/',

    // Enable plugins
    plugins: ['shim','text'],

    // Configure alias
    alias: {
        'jquery': {
            src: 'libs/jquery/jquery.min.js',
            exports: 'jQuery'
        },
        'jquery.validate':{
            src:'libs/form/jquery.validate.min.js'
        },
        'jquery.form':{
            src:'libs/form/jquery.form.min.js'
        },
        'juicer':{
            src:'libs/juicer/juicer-min',
            exports:'juicer'
        },
        'dialog':{
            src:'libs/dialog/dialog-min.js',
            exports:'dialog'   
        },
        'jquery.cookie':{
            src:'libs/cookie/jquery.cookie.min.js'
        },
        'highcharts':{
            src:'libs/highcharts/highcharts.js'
        },
        'jquery.datetime':{
        	src:'libs/datetime/jquery.datetimepicker.min.js'
        }
    },
    //charset
    charset: 'utf-8',

    preload:[
        'libs/jquery/jquery.min'
    ],

    //vars
    vars:{
        tpls:'/biometric/templates'
    }
});

