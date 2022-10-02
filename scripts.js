//merge color
function merge_color(color_value1, color_value2, amount, debug_mode)
{
debug_mode = debug_mode || 0;

    if (amount > 1)
    {
    amount = 1;
    }
    
    if (amount < 0)
    {
    amount = 0;
    }

    var length_color1 = color_value1.length;
    var length_color2 = color_value2.length;
    if (length_color1 == 4)
    {
        for(var i = 1; i <= 4; i++)
        {
        color_value1 += color_value1[i]+color_value1[i];
        }
    }
    else
    {
    color_value1 = color_value1.substring(1);
    }
    
    if (length_color2 == 4)
    {
        for(var i = 1; i <= 4; i++)
        {
        color_value2 += color_value2[i]+color_value2[i];
        }
    }
    else
    {
    color_value2 = color_value2.substring(1);
    }


color_value1 = [parseInt(color_value1[0] + color_value1[1], 16), parseInt(color_value1[2] + color_value1[3], 16), parseInt(color_value1[4] + color_value1[5], 16)];
color_value2 = [parseInt(color_value2[0] + color_value2[1], 16), parseInt(color_value2[2] + color_value2[3], 16), parseInt(color_value2[4] + color_value2[5], 16)];

var total_color = [(1 - amount) * color_value1[0] + amount * color_value2[0], (1 - amount) * color_value1[1] + amount * color_value2[1], (1 - amount) * color_value1[2] + amount * color_value2[2]];
total_color = '#' + int_to_hex(total_color[0]) + int_to_hex(total_color[1]) + int_to_hex(total_color[2]);



if (debug_mode == 1)
{
//color output to canvas
var cvs = document.createElement('canvas');
var ctx = cvs.getContext('2d');
cvs.width = 90;
cvs.height = 25;
document.body.appendChild(cvs);

ctx.fillStyle = color_value1;
ctx.fillRect(0, 0, 30, 25);

ctx.fillStyle = color_value2;
ctx.fillRect(60, 0, 30, 25);

ctx.fillStyle = total_color;
ctx.fillRect(30, 0, 30, 25);
}


return total_color;
}

function int_to_hex(num)
{
var hex = Math.round(num).toString(16);
    if (hex.length == 1)
    {
    hex = '0' + hex;
    }
return hex;
}


