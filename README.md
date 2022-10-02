# merge_color in javascript

## What is this?

It makes you can get merged color easily with this.

-------------


## How to use?

At first, define below code

```
<script src = "https://cdn.jsdelivr.net/gh/ABER1047/Merge-color@main/scripts.js"></script>
```

and then, you can use the below function

```
merge_color(color1, color2, amount, debug_mode);
```

you need to set the parameter **"color1"** and **"color2"**
**(hex color only)**

</br>

</br>

And then set the parameter **"amount"** to merge colors  
**(0 is minimum and 1 is maximum. if amount value is less than 0 or over than 1, it is applied 0 and 1**
**if amount is 0, you can get only "color1" value, and if amount is 1, you can get only "color2" value)**

</br>

</br>

and if you want to see the result color, set the parameter **"debug_mode"** into 1

it show you the result using canvas

**(if you don't want to debug, just make parameter "debug_mode" empty or enter "0"**

</br>

## Example

```

//define the function "merge_color()"
<script src = "https://cdn.jsdelivr.net/gh/ABER1047/Merge-color@main/scripts.js"></script>

<script>

//it return "gray" color
merge_color("#ffffff", "#2a2a28", 0.5);

//if you want to see the result, use the parameter "debug mode"
merge_color("#ffffff", "#2a2a28", 0.5, 1);

</script>

```


