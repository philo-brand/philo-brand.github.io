var waypoints = $('.js-waypoint-social').waypoint({
  handler: function(direction) {
    $('.js-waypoint-social .barGraph-barWrapper').addClass("is-grown");
  },
  offset: '75%'
});
