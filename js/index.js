function random()
{
    return !Math.round(Math.random());
}

function buttonSubmit()
{
    var rand = random();
    $('#answer').text(rand);
    
    navigator.notification.beep(1);
    /*if(rand)
    {
        navigator.notification.beep(1);
    } else
    {
        navigator.notification.beep(2);
    }*/
}