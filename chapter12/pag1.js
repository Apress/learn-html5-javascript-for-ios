var profileData;

if (sessionStorage.getItem('profileData') != null) {
    profileData = sessionStorage.getItem('profileData');
}

$().ready(function() {
    if (sessionStorage.getItem('profileData') == null) {
        $.getJSON('api/allprofiles.php', function(data) {
            sessionStorage.setItem('profileData'),data
            )
            ;
        });
    }
});
