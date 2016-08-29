(function() {
    var appDashboards = [
        {
            title : 'First app',
            src : 'gravity-app-1/dashboard.html',
            color : 'red'
        },
        {
            title : 'Second app',
            src : 'gravity-app-2/dashboard.html',
            color : 'green'
        },
        {
            title : 'Third app',
            src : 'gravity-app-3/dashboard.html',
            color : 'blue'
        }
    ];

    var loadAppDashboards = function() {
        var tplAppDashboard = $( '#tplAppDashboard' ).html();
        var $appDashboards = $( '.app-dashboards' );

        for( var i = 0; i < appDashboards.length; i++ ) {
            var $appDashboard = $( tplAppDashboard );
            $appDashboard.find( '.app-dashboard-title' ).html( appDashboards[i].title );
            $appDashboard.find( '.app-dashboard-content' ).attr( 'src', appDashboards[i].src );
            $appDashboard.css( 'border-left', '5px solid ' + appDashboards[i].color );   
            $appDashboards.append( $appDashboard );
        }
    };
    
    var toggleAllDashboards = function() {
        $( '.app-dashboard-content' ).slideToggle( 'fast' );
    };

    var resizeIframe = function( iframe ) {
        $( iframe ).height( iframe.contentWindow.document.body.scrollHeight );
    };

    $( document ).on( 'ready', function() {
        loadAppDashboards();
        toggleAllDashboards();

        $( 'body' ).on( 'click', '.app-dashboard-title', function() {
            var $appDashboardContent = $( this ).closest( '.app-dashboard' ).find( '.app-dashboard-content' );
            resizeIframe( $appDashboardContent[0] );
            $appDashboardContent.slideToggle( 'fast' );
        });

        $( 'iframe.app-dashboard-content' ).on( 'load', function() {
            resizeIframe( this );
        });
        
        $( window ).on( 'resize', function() {
            $( 'iframe.app-dashboard-content' ).each( function() {
                resizeIframe( this );
            });
        });
    });
}());