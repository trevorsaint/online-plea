$(document).ready(function(){jQuery.fx.off=!0,(new GOVUK.ShowHideContent).init(),GOVUK.shimLinksWithButtonRole.init()}),$(window).load(function(){$(".js-error-example").length&&($(".error-summary").length?($(".error-summary").focus(),$(".error-summary a").click(function(r){r.preventDefault();var e=$(this).attr("href");$(e).focus()})):$(".error input:first").focus())});