var i = 0;
function update();
{
    i++;
    var number_of_famiy_member_in_array = 3
    if(i > number_of_famiy_member_in_array)
    {
        i = 0;
    }
    var updateimg = images[i];
    var updatename = images[i];
    document.getElementById("image_array").src = updateimg;
    document.getElementById("name_array").innerHTML = updatename;
}