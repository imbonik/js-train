var number = prompt ('Enter the number','');
if (number ==0)
{	
alert (0);	
}
else if (number < 0)
{
alert (-1);
}
else if (number > 0)
{
alert (1);	
} 
else if (typeof number != 'number')
{
alert (typeof number);	
}