function random()
{
    return !Math.round(Math.random());
}

function buttonSubmit()
{
    $('#answer').text(random());
    console.log('test');
}