//Min of dates
function minDate(dates) {
    let minDate = dates[0],
     min_dtObj = new Date(dates[0]);
    dates.forEach(function(dt, index)
     {
     if ( new Date( dt ) < min_dtObj)
     {
     min_dt = dt;
     min_dtObj = new Date(dt);
     }
     });
    return min_dt;
     }
   console.log(minDate(['2007/03/25', '2007/02/25', '2007/01/25']));
