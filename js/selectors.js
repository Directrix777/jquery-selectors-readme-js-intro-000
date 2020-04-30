// declare your functions here...
function paragraphSelector()
{
  return $(`p`)
}

function ninjaBabySelector()
{
  return $('#baby-ninja')
}

function lastImageSelector()
{
  return $('img:last')
}

function divSelector()
{
  return $('.pics')
}

function firstListItem()
{
  console.log($('#pic-list li:first-child img:first'))
  return $('#pic-list li:first-child')
}
