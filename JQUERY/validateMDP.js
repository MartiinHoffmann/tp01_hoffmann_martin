$(document).ready(function()
{
    $("form").submit(function(e)
    {
        validatePassword(e);
    })
})

function validatePassword(e) 
{
    if ($("#confirmPassword").val() != $("#password").val())
    {
        alert("La confirmation de mot de passe est différent du mot de passe");
        e.preventDefault();
    }
}